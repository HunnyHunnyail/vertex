import { defineType, defineField, defineArrayMember } from 'sanity'
import { PlayIcon } from '@sanity/icons'

const ALLOWED_VIDEO_HOSTS = [
  'youtube.com',
  'www.youtube.com',
  'youtu.be',
  'vimeo.com',
  'player.vimeo.com',
  'bunny.net',
  'b-cdn.net',
  'mediadelivery.net',
]

export const lesson = defineType({
  name: 'lesson',
  title: 'Lesson',
  type: 'document',
  icon: PlayIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video URL',
      type: 'url',
      validation: (Rule) =>
        Rule.required().custom((url) => {
          if (!url) return true
          try {
            const parsed = new URL(url)
            if (parsed.protocol !== 'https:') {
              return 'Video URL must use HTTPS'
            }
            const host = parsed.hostname.toLowerCase()
            const isAllowed = ALLOWED_VIDEO_HOSTS.some(
              (allowed) => host === allowed || host.endsWith('.' + allowed)
            )
            if (!isAllowed) {
              return `Video URL must be hosted on YouTube, Vimeo, or Bunny (got: ${host})`
            }
            return true
          } catch {
            return 'Invalid URL format'
          }
        }),
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'duration',
      title: 'Duration (in seconds)',
      type: 'number',
      validation: (Rule) =>
        Rule.required().positive().integer().error('Duration must be a positive number of seconds.'),
    }),
    defineField({
      name: 'freePreview',
      title: 'Free Preview',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'studentCount',
      title: 'Student Count',
      type: 'number',
      initialValue: 0,
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: 'notes',
      title: 'Lesson Notes',
      type: 'blockContent',
    }),
    defineField({
      name: 'keyPoints',
      title: 'Key Points ("In this lesson you will")',
      type: 'array',
      validation: (Rule) => Rule.max(6),
      of: [defineArrayMember({ type: 'string' })],
    }),
    defineField({
      name: 'proTip',
      title: 'Pro Tip',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'resources',
      title: 'Resources',
      type: 'array',
      of: [defineArrayMember({ type: 'resource' })],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      duration: 'duration',
      media: 'thumbnail',
    },
    prepare({ title, duration, media }) {
      const minutes = duration ? Math.floor(duration / 60) : 0
      const seconds = duration ? duration % 60 : 0
      const formattedDuration = duration
        ? `${minutes}:${seconds.toString().padStart(2, '0')}`
        : 'No duration'
      return {
        title,
        subtitle: formattedDuration,
        media,
      }
    },
  },
})
