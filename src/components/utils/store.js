const cards =[
{
    id:"card-1",
    content:"Meeting tomorrow with IT",
},
{
    id:"card-2",
    content:"Meeting tomorrow with compliance",
},
{
    id:"card-3",
    content:"Meeting tomorrow with BOD",
},
];

const data={
    lists:{
        "list-1":{
            id:"list-1",
            title: "whatever",
            cards,
        },
    },
    listIds:["list-1"],

};
export default data;