'use client'

import dynamic from 'next/dynamic'

const CKEditorBase = dynamic(() => import('@ckeditor/ckeditor5-react').then(m => m.CKEditor), { ssr: false })
const ClassicEditor = dynamic(() => import('@ckeditor/ckeditor5-build-classic'), { ssr: false })

function CkEditor({ value, onChange, config = {}, ...props }) {
  return (
    <CKEditorBase
      editor={ClassicEditor}
      data={value}
      onChange={(_, editor) => {
        onChange?.(editor.getData())
      }}
      config={{ licenseKey: '', ...config }}
      {...props}
    />
  )
}

export { CkEditor }
