export default {
  name: 'resume',
  title: 'Resume',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Optional: e.g. Resume 2024',
    },
    {
      name: 'resumeFile',
      title: 'Resume PDF',
      type: 'file',
      options: {
        accept: 'application/pdf',
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      description: 'Set to true for the current resume',
      initialValue: false,
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
      description: 'Optional: Short note about this resume version',
    },
  ],
}; 