import { course } from './documents/course'
import { lesson } from './documents/lesson'
import { instructor } from './documents/instructor'
import { category } from './documents/category'
import { module } from './objects/module'
import { learningOutcome } from './objects/learningOutcome'
import { resource } from './objects/resource'
import { blockContent } from './objects/blockContent'

export const schemaTypes = [
  // Documents
  course,
  lesson,
  instructor,
  category,
  // Objects
  module,
  learningOutcome,
  resource,
  blockContent,
]
