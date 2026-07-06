import { Node, mergeAttributes } from '@tiptap/core'

export const AlertBox = Node.create({
  name: 'alertBox',

  group: 'block',
  content: 'inline*',

  addOptions() {
    return {
      HTMLAttributes: {
        class: 'bg-blue-50 border-l-4 border-blue-500 text-blue-900 p-4 rounded-r-lg my-4 text-sm font-medium shadow-sm',
      },
    }
  },

  parseHTML() {
    return [
      {
        tag: 'div[data-type="alert-box"]',
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['div', mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, { 'data-type': 'alert-box' }), 0]
  },
})
