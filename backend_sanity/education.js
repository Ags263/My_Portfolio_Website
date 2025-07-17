export default {
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    {
      name: 'school',
      title: 'School',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'degree',
      title: 'Degree',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'date',
      title: 'Date',
      type: 'string',
      description: 'e.g. Oct 2021 - Apr 2024',
    },
    {
      name: 'grade',
      title: 'Grade',
      type: 'string',
    },
    {
      name: 'desc',
      title: 'Description',
      type: 'text',
      rows: 4,
    },
    {
      name: 'img',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    },
  ],
}; 