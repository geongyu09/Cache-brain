export default {
  name: 'user',
  type: 'document',
  title: 'User',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'image',
      type: 'string',
      title: 'Image',
    },
    {
      name: 'username',
      type: 'string',
      titel: 'Username',
    },
    {
      name: 'own',
      title: 'Own',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'card'}],
        },
      ],
    },
  ],
}
