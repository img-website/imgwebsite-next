import { Editor } from '@tinymce/tinymce-react';
import React from 'react';

export default function TinyMCEEditor({ value, onChange, ...props }) {
  return (
    <Editor
      apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY || ''}
      value={value}
      init={{
        min_height: 200,
        menu: {
          file: { title: 'File', items: 'print' },
          edit: { title: 'Edit', items: 'undo redo | cut copy paste pastetext | selectall | searchreplace' },
          view: { title: 'View', items: 'code | visualaid visualblocks | preview fullscreen' },
          insert: { title: 'Insert', items: 'image link media codesample inserttable | charmap emoticons hr | anchor' },
          format: { title: 'Format', items: 'bold italic underline strikethrough superscript subscript codeformat | styles blocks fontfamily fontsize align lineheight | forecolor backcolor | removeformat' },
          tools: { title: 'Tools', items: 'code | wordcount' },
          table: { title: 'Table', items: 'inserttable | cell row column | tableprops deletetable' }
        },
        plugins: [
          'anchor', 'autoresize', 'autolink', 'charmap', 'codesample', 'emoticons', 'image', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount', 'code', 'fullscreen', 'preview', 'directionality', 'insertdatetime', 'advlist', 'quickbars', 'accordion',
        ],
        toolbar:
          'undo redo | accordion accordionremove | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
        menubar: 'file edit view insert format tools table',
        onboarding: false,
        toolbar_mode: 'sliding',
        toolbar_sticky: true,
        sticky_toolbar: true,
        contextmenu: '*[*]',
        quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
        extended_valid_elements: 'img[class|src|border=0|alt|title|hspace|vspace|width|height|align|onmouseover|onmouseout|name]',
        ...props.init
      }}
      onEditorChange={onChange}
      {...props}
    />
  );
}
