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
      name: 'description',
      type: 'string',
      title: 'Description',
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
            {name: 'progress', type: 'number', title: 'Progress'},
          ],
        },
      ],
    },
    {
      name: 'owner',
      type: 'reference',
      to: [{type: 'user'}],
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [
        {
          type: 'string',
        },
      ],
    },
  ],
}
