export default {
  name: 'card',
  type: 'document',
  title: 'Card',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'destribute',
      type: 'string',
      title: 'Destribute',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          title: 'Cardlist',
          name: 'cardlist',
          type: 'object',
          fields: [
            {name: 'problem', type: 'string', title: 'Problem'},
            {name: 'answer', type: 'string', title: 'Answer'},
          ],
        },
      ],
    },
    {
      title: 'Release date',
      name: 'releaseDate',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
    },
    {
      name: 'owner',
      type: 'reference',
      to: [{type: 'user'}],
    },
    {
      name: 'tag',
      type: 'string',
      title: 'Tag',
    },
  ],
}
