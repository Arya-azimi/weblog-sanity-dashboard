import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'programSubmission',
  title: 'Program Submission',
  type: 'document',
  fields: [
    defineField({
      name: 'userName',
      title: 'User Name',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'gender',
      title: 'Gender',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'age',
      title: 'Age',
      type: 'number',
      readOnly: true,
    }),
    defineField({
      name: 'height',
      title: 'Height (cm)',
      type: 'number',
      readOnly: true,
    }),
    defineField({
      name: 'weight',
      title: 'Weight (kg)',
      type: 'number',
      readOnly: true,
    }),
    defineField({
      name: 'goal',
      title: 'Goal',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'activityLevel',
      title: 'Activity Level',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'bmi',
      title: 'BMI',
      type: 'number',
      readOnly: true,
    }),
    defineField({
      name: 'recommendedCalories',
      title: 'Recommended Calories',
      type: 'number',
      readOnly: true,
    }),
    defineField({
      name: 'submittedAt',
      title: 'Submitted At',
      type: 'datetime',
      readOnly: true,
    }),
  ],
  preview: {
    select: {
      title: 'userName',
      subtitle: 'submittedAt',
    },
  },
})
