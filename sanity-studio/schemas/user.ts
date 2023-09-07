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
          to: [{type: 'user'}],
        },
      ],
    },
    {
      type: 'array',
      name: 'learning',
      title: 'Learning',
      of: [
        {
          type: 'reference',
          to: [{type: 'learningCard'}],
        },
      ],
    },
  ],
}
