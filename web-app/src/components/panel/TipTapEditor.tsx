'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Image from '@tiptap/extension-image'
import Link from '@tiptap/extension-link'
import { AlertBox } from './tiptap/AlertBox'
import { Bold, Italic, Heading2, Heading3, List, ListOrdered, Link as LinkIcon, MessageSquare, Quote } from 'lucide-react'

interface TipTapEditorProps {
  content: string
  onChange: (content: string) => void
}

const MenuBar = ({ editor }: { editor: any }) => {
  if (!editor) return null

  return (
    <div className="flex flex-wrap items-center gap-2 border border-gray-300 p-2 rounded-t-md bg-gray-50 border-b-0">
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`p-2 rounded ${editor.isActive('bold') ? 'bg-gray-200 text-black' : 'text-gray-600 hover:bg-gray-200'}`}
      >
        <Bold className="w-4 h-4" />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`p-2 rounded ${editor.isActive('italic') ? 'bg-gray-200 text-black' : 'text-gray-600 hover:bg-gray-200'}`}
      >
        <Italic className="w-4 h-4" />
      </button>
      
      <div className="w-px h-4 bg-gray-300 mx-1" />
      
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`p-2 rounded font-bold text-sm ${editor.isActive('heading', { level: 2 }) ? 'bg-gray-200 text-black' : 'text-gray-600 hover:bg-gray-200'}`}
      >
        H2
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={`p-2 rounded font-bold text-sm ${editor.isActive('heading', { level: 3 }) ? 'bg-gray-200 text-black' : 'text-gray-600 hover:bg-gray-200'}`}
      >
        H3
      </button>
      
      <div className="w-px h-4 bg-gray-300 mx-1" />
      
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`p-2 rounded ${editor.isActive('bulletList') ? 'bg-gray-200 text-black' : 'text-gray-600 hover:bg-gray-200'}`}
      >
        <List className="w-4 h-4" />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`p-2 rounded ${editor.isActive('orderedList') ? 'bg-gray-200 text-black' : 'text-gray-600 hover:bg-gray-200'}`}
      >
        <ListOrdered className="w-4 h-4" />
      </button>

      <div className="w-px h-4 bg-gray-300 mx-1" />

      <button
        type="button"
        onClick={() => {
          const url = window.prompt('URL del enlace:')
          if (url) {
            editor.chain().focus().setLink({ href: url }).run()
          }
        }}
        className={`p-2 rounded ${editor.isActive('link') ? 'bg-gray-200 text-black' : 'text-gray-600 hover:bg-gray-200'}`}
      >
        <LinkIcon className="w-4 h-4" />
      </button>

      <div className="w-px h-4 bg-gray-300 mx-1" />
      
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={`p-2 rounded ${editor.isActive('blockquote') ? 'bg-gray-200 text-black' : 'text-gray-600 hover:bg-gray-200'}`}
        title="Cita"
      >
        <Quote className="w-4 h-4" />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleNode('alertBox', 'paragraph').run()}
        className={`p-2 rounded ${editor.isActive('alertBox') ? 'bg-gray-200 text-black' : 'text-gray-600 hover:bg-gray-200'}`}
        title="Recuadro Médico (AlertBox)"
      >
        <MessageSquare className="w-4 h-4" />
      </button>
    </div>
  )
}

export default function TipTapEditor({ content, onChange }: TipTapEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        blockquote: {
          HTMLAttributes: {
            class: 'border-l-4 border-gray-300 pl-4 italic text-gray-700 my-4 text-lg bg-gray-50 py-2 rounded-r',
          }
        }
      }),
      Image,
      Link.configure({ openOnClick: false }),
      AlertBox,
    ],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML())
    },
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none focus:outline-none min-h-[300px] border border-gray-300 rounded-b-md p-4 bg-white',
      },
    },
  })

  return (
    <div className="w-full">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  )
}
