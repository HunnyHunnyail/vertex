import { defineType, defineField } from 'sanity'
import { CheckmarkIcon } from '@sanity/icons'

export const learningOutcome = defineType({
  name: 'learningOutcome',
  title: 'Learning Outcome',
  type: 'object',
  icon: CheckmarkIcon,
  fields: [
    defineField({
      name: 'icon',
      title: 'Icon Name',
      type: 'string',
      options: {
        list: [
          { title: 'Book Open', value: 'BookOpen' },
          { title: 'Code', value: 'Code' },
          { title: 'Cpu', value: 'Cpu' },
          { title: 'Database', value: 'Database' },
          { title: 'File Code', value: 'FileCode' },
          { title: 'Globe', value: 'Globe' },
          { title: 'Layers', value: 'Layers' },
          { title: 'Layout', value: 'Layout' },
          { title: 'Lightning', value: 'Lightning' },
          { title: 'Lock', value: 'Lock' },
          { title: 'Rocket', value: 'Rocket' },
          { title: 'Server', value: 'Server' },
          { title: 'Shield', value: 'Shield' },
          { title: 'Terminal', value: 'Terminal' },
          { title: 'Zap', value: 'Zap' },
        ],
      },
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
  },
})
