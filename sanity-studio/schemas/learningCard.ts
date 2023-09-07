export default {
  name: 'learningCard',
  type: 'document',
  title: 'learningCard',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'originCard',
      type: 'reference',
      to: [{type: 'card'}],
    },
    {
      name: 'process',
      title: 'Process',
      type: 'array',
      of: [
        {
          title: 'Cardlist',
          name: 'cardlist',
          type: 'object',
          fields: [
            {name: 'problem', type: 'string', title: 'Problem'},
            {name: 'answer', type: 'string', title: 'Answer'},
            {name: 'completeness', type: 'string', title: 'Completeness'},
          ],
        },
      ],
    },
    {
      name: 'learner',
      type: 'reference',
      to: [{type: 'user'}],
    },
    {
      name: 'tag',
      type: 'string',
      title: 'Tag',
    },
    {
      title: 'Last study date',
      name: 'lastStudyDate',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
    },
  ],
}
