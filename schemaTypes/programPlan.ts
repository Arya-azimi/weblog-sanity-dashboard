import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'programPlan',
  title: 'Program Plan',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{type: 'string'}],
      description: 'ویژگی‌های این پلن را لیست کنید',
    }),
    defineField({
      name: 'stripePriceId',
      title: 'Stripe Price ID',
      type: 'string',
      description: 'شناسه قیمت این محصول در Stripe (برای پرداخت)',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'price',
    },
    prepare(selection) {
      const {title, subtitle} = selection
      return {
        title: title,
        subtitle: `${subtitle} تومان`,
      }
    },
  },
})
