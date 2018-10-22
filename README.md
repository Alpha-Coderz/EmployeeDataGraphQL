# EmployeeDataGraphQL 
adding employeeData using graphQL 
deleting employeeData using graphQL 
editing employeeData using graphQL 

# RUN 
1. Install Dependencies - npm install 
 `( axios": "^0.16.2","express": "^4.15.3","express-graphql": "^0.6.7","graphql": "^0.10.5","json-server": "^0.11.2", "nodemon": "^1.11.0") `
2. npm run dev:server
3. npm run json:server
4. Browse localhost:4000/graphql

`Queries`

`**QueryFormat**
query{
  employees{
    id
    name
    age
    developerType
  }
}`

`//Mutation Format
addEmployee 
mutation{
  addEmployee(name:"add employeeName", age:add EmployeeAge, email:"new@gmail.com", developerType:"AddDeveloperType"){
    id
    name
    age
    developerType
    email
  }
}`

`//editEmployee
mutation{
  editEmployee(id:`1`, age:add EmployeeAge, email:"someone@gmail.com", developerType:"AddDeveloperType"){
    id
    name
    age
    developerType
    email
  }
}`

`//deleteEmployee
mutation{
  deleteEmployee(id:`1`){
    id
    name
    age
    developerType
    email
  }
}`
`

