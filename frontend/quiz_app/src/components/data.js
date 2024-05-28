const questions = [{
    id: 1,
    Question: "Which is a non-sql database?",
    Options:["Firebase","Postgres","MySQL"],
},
{
    id: 2,
    Question: "Which is a frontend library?",
    Options: ["React","Django","Flask"],
},
{
    id:3,
    Question:"Which is not a type of API?",
    Options:["Next","GraphQL","Rest"],
},{
    id: 4,
    Question: "Which is not developed by Facebook?",
    Options: ["React","Prisma","flutter"],
},{
    id:5,
    Question:"Javascript is an ____ language",
    Options:["object oriented","case sensitive","primitive"],
},{
    id:6,
    Question:"Which is a backend framework?",
    Options:["angular","Vue","express"],
},{
    id:7,
    Question:"Which is not a server side language?",
    Options:["Python","Javascript","C++"],
},{
    id: 8,
    Question:"Prisma is a ___",
    Options: ["ODM","ORM","Library"],
},
{
    id:9,
    Question:"Which of the following is not a styling framework?",
    Options: ["Bootstrap","Tailwind","Nest.js"],
}]
 const answers = [0,0,0,2,0,2,2,1,2];

 module.exports= {
    questions,
    answers
 }