import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'programme',
  title: 'Programme (Course)',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string', validation: (r) => r.required()}),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (r) => r.required(),
    }),
    defineField({name: 'pillar', title: 'Pillar', type: 'reference', to: [{type: 'pillar'}]}),
    defineField({
      name: 'mode',
      title: 'Mode',
      type: 'string',
      options: {list: ['Cohort', 'Self-paced', 'Live']},
    }),
    defineField({name: 'durationHours', title: 'Duration (hours)', type: 'number'}),
    defineField({
      name: 'listPriceRange',
      title: 'List price range (nett)',
      type: 'string',
      description:
        'Shown as a nett range only, e.g. "S$1,300-1,800". Never a single subsidised number before registration.',
    }),
    defineField({name: 'nettNote', title: 'Nett note', type: 'string'}),
    defineField({
      name: 'outcomes',
      title: 'Outcomes',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
    }),
    defineField({
      name: 'cohortChips',
      title: 'Cohort chips',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
    }),
    defineField({name: 'instructor', title: 'Instructor', type: 'reference', to: [{type: 'faculty'}]}),
    defineField({
      name: 'courseRating',
      title: 'Course rating',
      type: 'number',
      description: 'Real, consented data only.',
    }),
    defineField({
      name: 'careerImpactRating',
      title: 'Career-impact rating',
      type: 'number',
      description: 'Publishes only once a real cohort produces it.',
    }),
    defineField({name: 'nextCohortDate', title: 'Next cohort date', type: 'date'}),
    defineField({name: 'lede', title: 'Lede', type: 'text'}),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [defineArrayMember({type: 'block'})],
    }),
  ],
  preview: {select: {title: 'title', subtitle: 'mode'}},
})
