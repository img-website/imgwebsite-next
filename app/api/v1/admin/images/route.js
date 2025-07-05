import { NextResponse } from "next/server";
import connectDB from "@/app/lib/db";
import Image from "@/app/models/Image";
import { uploadBlogImage } from "@/app/middleware/imageUpload";
import { verifyToken, extractToken } from "@/app/lib/auth";
import slugify from "slugify";

// GET all images
export async function GET() {
  try {
    await connectDB();
    const images = await Image.find().sort({ createdAt: -1 }).lean();
    return NextResponse.json({
      success: true,
      message: "Images fetched successfully",
      data: images,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Error fetching images" },
      { status: 500 },
    );
  }
}

// POST add image
export async function POST(request) {
  try {
    const token = extractToken(request.headers);
    if (!token) {
      return NextResponse.json(
        { success: false, error: "Authentication required" },
        { status: 401 },
      );
    }
    const decoded = verifyToken(token);
    if (
      !decoded ||
      (decoded.role !== "admin" && decoded.role !== "superadmin")
    ) {
      return NextResponse.json(
        { success: false, error: "Admin access required" },
        { status: 403 },
      );
    }
    await connectDB();
    const url = new URL(request.url);
    const noRecord = url.searchParams.get("noRecord") === "1";
    const formData = await request.formData();
    let files = formData.getAll("files");
    if (!files || files.length === 0) {
      const single = formData.get("file");
      files = single && typeof single !== "string" ? [single] : [];
    }
    if (!files || files.length === 0) {
      return NextResponse.json(
        { success: false, error: "No file uploaded" },
        { status: 400 },
      );
    }
    const uploadedBy = decoded._id || decoded.id;
    const createdImages = [];
    for (const file of files) {
      if (!file || typeof file === "string") continue;
      const ext = file.name.split(".").pop();
      const base = file.name.replace(/\.[^/.]+$/, "");
      let slug = slugify(base, { lower: true, strict: true });
      if (!slug || slug === "undefined") {
        slug = `image-${Date.now()}`;
      }
      let storedName = ext ? `${slug}.${ext}` : slug;
      let counter = 1;
      while (await Image.findOne({ storedName })) {
        storedName = ext ? `${slug}-${counter}.${ext}` : `${slug}-${counter}`;
        counter += 1;
      }
      const uploadRes = await uploadBlogImage(file, "images", ext, storedName);
      if (!uploadRes.success) {
        return NextResponse.json(
          { success: false, error: uploadRes.error },
          { status: 400 },
        );
      }
      let record;
      if (!noRecord) {
        record = await Image.create({ storedName, uploadedBy });
      } else {
        record = { storedName };
      }
      createdImages.push(record);
    }
    return NextResponse.json(
      {
        success: true,
        message: "Images uploaded successfully",
        data: createdImages,
      },
      { status: noRecord ? 200 : 201 },
    );
  } catch (error) {
    if (error.code === 11000) {
      return NextResponse.json(
        { success: false, error: "Image already exists" },
        { status: 409 },
      );
    }
    return NextResponse.json(
      { success: false, error: "Error uploading image" },
      { status: 500 },
    );
  }
}
