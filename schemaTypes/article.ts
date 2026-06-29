import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'article',
  title: 'Article (Blog)',
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
      name: 'funnelStage',
      title: 'Funnel stage',
      type: 'string',
      options: {list: ['TOFU', 'MOFU', 'BOFU']},
    }),
    defineField({name: 'eyebrow', title: 'Eyebrow (kicker)', type: 'string'}),
    defineField({name: 'lede', title: 'Lede (standfirst)', type: 'text'}),
    defineField({
      name: 'answerFirst',
      title: 'Answer-first line',
      type: 'text',
      description: 'The one-line answer up front, for AEO and humans.',
    }),
    defineField({
      name: 'takeaways',
      title: 'Key takeaways',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      description: '3 to 5 standalone, quotable statements.',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [defineArrayMember({type: 'block'})],
    }),
    defineField({
      name: 'faq',
      title: 'FAQ',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'faqItem',
          fields: [
            defineField({name: 'question', title: 'Question', type: 'string'}),
            defineField({name: 'answer', title: 'Answer', type: 'text'}),
          ],
          preview: {select: {title: 'question'}},
        }),
      ],
    }),
    defineField({name: 'author', title: 'Author', type: 'reference', to: [{type: 'faculty'}]}),
    defineField({name: 'updatedDate', title: 'Updated date', type: 'date'}),
    defineField({name: 'readTime', title: 'Read time (min)', type: 'number'}),
    defineField({
      name: 'shareTldr',
      title: 'Share TLDR',
      type: 'string',
      description: 'One line; powers the share buttons and the llms.txt description.',
    }),
    defineField({
      name: 'mdPrompt',
      title: 'Markdown prompt preamble',
      type: 'text',
      description: 'The preamble for prompt-ready copy-as-markdown.',
    }),
    defineField({name: 'ogImage', title: 'OG image', type: 'image'}),
  ],
  preview: {select: {title: 'title', subtitle: 'funnelStage'}},
})
