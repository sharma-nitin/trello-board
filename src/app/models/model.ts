export const boards = [{
  id:1,
  name:'Teams',
  cards:[
    {
      id:1,
      title:'Product',
      desc: '3 pending task to be picked by raj',
      createdAt:new Date()
    },
    {
      id:2,
      title:'Sales',
      desc: 'send proposal to puneet for sales prices',
      createdAt:new Date()
    }
  ]
},
{
  id:2,
  name:'Products',
  cards:[
    {
      id:1,
      title:'UAT testing',
      desc: 'Ask engineer to setup testing infra',
      createdAt:new Date()
    }
  ]
}
];

export class listModal {
  constructor(
    public title: string,
    public description: string
  ) {}
}
