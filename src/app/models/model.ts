export const boards = [{
  id:1,
  name:'Teams',
  cards:[
    {
      id:1,
      title:'Product',
      desc: '3 pending task to be picked by raj',
      createdAt:1628017432990
    },
    {
      id:2,
      title:'Sales',
      desc: 'send proposal to puneet for sales prices',
      createdAt:1628017460895
    }
  ]
},
{
  id:2,
  name:'Products',
  cards:[
    {
      id:3,
      title:'UAT testing',
      desc: 'Ask engineer to setup testing infra',
      createdAt:1628017475621
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
