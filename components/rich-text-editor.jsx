"use client";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function buildToolbar(allowed) {
  if (!Array.isArray(allowed) || allowed.length === 0) return undefined;
  const tools = [];
  if (allowed.includes("link")) tools.push("link");
  if (allowed.includes("bulletedList") || allowed.includes("numberedList")) {
    tools.push("bulletedList", "numberedList");
  }
  return tools;
}

export default function RichTextEditor({ value, onChange, allowed }) {
  return (
    <CKEditor
      editor={ClassicEditor}
      data={value}
      onChange={(event, editor) => {
        const data = editor.getData();
        onChange(data);
      }}
      config={{ toolbar: buildToolbar(allowed) }}
    />
  );
}
