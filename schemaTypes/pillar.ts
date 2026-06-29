import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pillar',
  title: 'Pillar',
  type: 'document',
  fields: [
    defineField({name: 'name', title: 'Name', type: 'string', validation: (r) => r.required()}),
    defineField({
      name: 'code',
      title: 'Code',
      type: 'string',
      options: {list: ['P1', 'P2', 'P3', 'P4']},
    }),
    defineField({name: 'slug', title: 'Slug', type: 'slug', options: {source: 'name'}}),
    defineField({name: 'description', title: 'Description', type: 'text'}),
    defineField({name: 'demandNote', title: 'Demand note', type: 'string'}),
  ],
  preview: {select: {title: 'name', subtitle: 'code'}},
})
