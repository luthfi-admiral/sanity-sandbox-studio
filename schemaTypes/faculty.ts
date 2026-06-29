import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'faculty',
  title: 'Faculty',
  type: 'document',
  fields: [
    defineField({name: 'name', title: 'Name', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'role', title: 'Role', type: 'string'}),
    defineField({name: 'bio', title: 'Bio', type: 'text'}),
    defineField({name: 'avatar', title: 'Avatar', type: 'image', options: {hotspot: true}}),
    defineField({
      name: 'public',
      title: 'Public (founder-name gate)',
      type: 'boolean',
      description:
        'Off by default until the A-027 employment / cap-table gate clears. Until then by-lines read "Leaders Hangar faculty".',
      initialValue: false,
    }),
  ],
  preview: {select: {title: 'name', subtitle: 'role'}},
})
