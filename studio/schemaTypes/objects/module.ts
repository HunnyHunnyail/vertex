import { defineType, defineField, defineArrayMember } from 'sanity'
import { OlistIcon } from '@sanity/icons'

export const moduleObjectType = defineType({
  name: 'module',
  title: 'Module',
  type: 'object',
  icon: OlistIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Module Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'lessons',
      title: 'Lessons',
      type: 'array',
      validation: (Rule) => Rule.required().min(1).unique(),
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'lesson' }],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      lessons: 'lessons',
    },
    prepare({ title, lessons }) {
      const count = Array.isArray(lessons) ? lessons.length : 0
      return {
        title,
        subtitle: `${count} ${count === 1 ? 'lesson' : 'lessons'}`,
      }
    },
  },
})
