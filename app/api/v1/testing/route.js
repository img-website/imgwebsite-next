import { NextResponse } from "next/server";

export async function GET(request) {
  const url = request.nextUrl
  return NextResponse.json({
    success: true,
    message: 'Testing API endpoint',
    url: url.toString(),
    method: request.method,
    headers: Object.fromEntries(request.headers.entries())
  });
  
}