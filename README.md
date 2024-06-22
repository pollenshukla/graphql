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


**Create Product:**
<img width="721" alt="image" src="https://github.com/pollenshukla/graphql/assets/28946768/818f840d-066c-43ad-9a1c-e0465c3e1e7d">
Request:
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

    Check created product in Mongo:
    <img width="1070" alt="image" src="https://github.com/pollenshukla/graphql/assets/28946768/280096ae-4aa0-420a-92d8-b54536a27d9a">


**Update a product**
mutation {
  updateProduct(input:{
    id: "6670294361c1aaecb40a18da"
    description: "Another widget for iPhone15",
    price: 12.99,
    stores: [
      {store: "Delhi"},
      {store: "Los Angeles"},
      {store: "Toronto"}
    ]
  }) {
    price
    name
    description
    id
  	soldout
  }
}
<img width="707" alt="image" src="https://github.com/pollenshukla/graphql/assets/28946768/4c5d72c5-6722-4505-9c50-b75d64f0f98b">
<img width="1154" alt="image" src="https://github.com/pollenshukla/graphql/assets/28946768/664ea26d-191c-4341-a463-56d5fd7220a2">


**Delete product/data in MongoDB**
Example removing duplicate record:
    mutation {
      deleteProduct(id: "6676d0a79f14933e776b62e3")
    }
    Before:
        <img width="888" alt="image" src="https://github.com/pollenshukla/graphql/assets/28946768/10a1a72a-debd-4479-93d0-af97d41ce5d1">
        <img width="732" alt="image" src="https://github.com/pollenshukla/graphql/assets/28946768/f2575099-374d-4650-aa4c-0d3489a70280">
    After execution:
        <img width="878" alt="image" src="https://github.com/pollenshukla/graphql/assets/28946768/4e200aec-1581-48a4-842d-ac969322d3b4">


**Get all products list**
query {
  getAllProducts {
    name
    price
    inventory
  }
}
<img width="684" alt="image" src="https://github.com/pollenshukla/graphql/assets/28946768/cfbe7e22-4941-494b-b254-bbae317a4a43">


**GraphQL aliases for specific product search**
query {
  widgetOne: getProduct(id: "6670294361c1aaecb40a18da") {
    name
    description
    soldout
  }
  widgetTwo: getProduct(id: "6676ceca8875fa4a0030743c") {
    name
    description
    inventory
    soldout
  }
}
<img width="706" alt="image" src="https://github.com/pollenshukla/graphql/assets/28946768/99af19db-a3be-49cd-95d8-b5d5ecc1a2a7">

**GraphQL Fragment**
    query {
      widgetOne: getProduct(id: "6670294361c1aaecb40a18da") {
        ...productFragment
      }
      widgetTwo: getProduct(id: "6676ceca8875fa4a0030743c") {
        ...productFragment
        inventory
      }
    }
    
    fragment productFragment on Product {
      name
      description
      soldout
    }
    <img width="696" alt="image" src="https://github.com/pollenshukla/graphql/assets/28946768/d00f2332-c357-447d-9c49-e660e94f2119">

