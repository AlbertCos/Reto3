const cards =[
{
    id:"card-1",
    title:"Meeting tomorrow with IT",
},
{
    id:"card-2",
    title:"Meeting tomorrow with compliance",
},
{
    id:"card-3",
    title:"Meeting tomorrow with BOD",
},
];

const data={
    lists:{
        "list-1":{
            id:"list-1",
            title: "whatever",
            cards,
        },
        "list-2":{
            id:"list-2",
            title: "Doing",
            cards: [],
        },
    },
    listIds:["list-1","list-2"],

};
export default data;