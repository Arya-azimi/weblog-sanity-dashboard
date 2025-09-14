// schemaTypes/category.ts
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'parent',
      title: 'Parent Category',
      type: 'reference',
      to: [{type: 'category'}],
      options: {
        filter: ({document}) => {
          return {
            filter: '_id != $id',
            params: {id: document._id},
          }
        },
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      parentTitle: 'parent.title',
    },
    prepare(selection) {
      const {title, parentTitle} = selection
      return {
        title: title,
        subtitle: parentTitle ? `Sub-category of: ${parentTitle}` : 'Main Category',
      }
    },
  },
})
