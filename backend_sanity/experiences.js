export default {
  name: 'experiences',
  title: 'Experiences',
  type: 'document',
  fields: [
    {
      name: 'company',
      title: 'Company/Organization',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'position',
      title: 'Position/Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'logo',
      title: 'Company Logo',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      validation: Rule => Rule.required(),
    },
    {
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      description: 'Leave blank if currently working',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    },
    {
      name: 'technologies',
      title: 'Technologies Used',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
}; 