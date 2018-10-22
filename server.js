const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema.js');

const app = express();

app.use('/graphql', expressGraphQL({
    schema: schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('Server is running on port http://localhost:4000/graphql');
});

/* 
**QueryFormat**
query{
  employees{
    id
    name
    age
    developerType
  }
}
*/
//Mutation Format
/*addEmployee 
mutation{
  addEmployee(name:"persson", age:21, email:"new@gmail.com", developerType:"phpDev"){
    id
    name
    age
    developerType
    email
  }
}
*/

/*editEmployee
mutation{
  editEmployee(id:`1`, age:21, email:"someone.@gmail.com", developerType:"newDev"){
    id
    name
    age
    developerType
    email
  }
}
*/

/*deleteEmployee
mutation{
  deleteEmployee(id:`1`){
    id
    name
    age
    developerType
    email
  }
}
*/

