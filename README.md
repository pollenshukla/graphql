# graphql
Basics of GraphQL Setup and Query


# Initial install:
npm i express

Present that will compile the code from latest version of Javascript for running the code in the browser.
npm i --save-dev @babel/cli @babel/core @babel/node @babel/preset-env

nodemon - Any change in code automatically refreshes the server.
npm i nodemon
    rs: restart/refresh the server

npm i graphql express-graphql

index.js - Point of entry into the server.

Start the project:
    1. npm start
        (There should not be error)

    2. Got to the browser and hit http://localhost:8085/
        It must show "GraphQL is amazing!"


#Test in browser using GraphiQL

<img width="806" alt="image" src="https://github.com/pollenshukla/graphql/assets/28946768/01f314fb-bf38-47d0-b48f-84cd57801461">

    query {
    	hello  
    }


# Install MongoDB

* brew tap mongodb/brew

* brew update

* brew install mongodb-community@7.0

To run MongoDB (i.e. the mongod process) as a macOS service, run:

    * brew services start mongodb-community@7.0

To stop a mongod running as a macOS service, use the following command as needed:

    * brew services stop mongodb-community@7.0

Create a 'widgets' database in MongoDB

<img width="925" alt="image" src="https://github.com/pollenshukla/graphql/assets/28946768/e59266d0-f7e6-40dd-b2b9-bd538c6adfaa">


# Install Mongoose to interact with MongoDB
npm i mongoose --force

# Install Robo 3T

Run mutation query:
        mutation {
          createProduct(input:{
            name: "Widget 23",
            description: "Another widget 23",
            price: 40.99,
            soldout: ONSALE,
            stores: [
              {store: "Delhi"},
              {store: "Los Angeles"}
            ]
          }) {
            price
            name
            description
            id
          	soldout
          }
        }

<img width="714" alt="image" src="https://github.com/pollenshukla/graphql/assets/28946768/8e53ec31-82bf-45ac-8fda-be4d3fcf66ea">

Check Mondo collections and it will populate:
<img width="1266" alt="image" src="https://github.com/pollenshukla/graphql/assets/28946768/f4197b88-5f54-42a0-acf2-d9798075989d">



