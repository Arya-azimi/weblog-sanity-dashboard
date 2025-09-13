import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import post from './schemaTypes/post'
import author from './schemaTypes/author'

export default defineConfig({
  name: 'default',
  title: 'دیتابیس وبلاگ با نکست جی اس',

  projectId: '5el21aj4',
  dataset: 'production',
  types: [post, author],
  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
