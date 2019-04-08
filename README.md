# Shopping List with Mern Stack

This repository has MERN Stack where Mongo is being used for database. 
Express is used for creating routes to connect mongo database and make http requests.
React is used for view to cover the front end area where user can see the list of items for shopping. Moreover, user can add items and delete items from list.
Redux is also used for state management.

NPM packages:

| Packages | Used For |
| ------ | ------ |
| axios | HTTP requests |
| concurrently | running back-end and front-end server simultaneously |
| mongoose | connecting express with mongo database |
| nodemon | re-running the server after changes |
| reactstrap | styled components in front end |
| react-transition-group | transitioning effect |
| redux | state management |


### `How to run the app:` 
```js
1. git clone https://github.com/usmanali598/ShoppingList.git
2. cd ShoppingList
3. npm install
4. npm run client-install
5. npm run dev
```
##### `Scripts` 
npm install --prefix client ( instead of cd client & npm install)
npm start --prefix client ( instead of cd client & npm start)
```js
npm run server: for backend server with nodemon
npm run client: for frontend server
npm run client-install: for installing client side dependencies
npm run dev: for running both backend & frontend servers
```

## Note:
Please, use your own mongo db user name and password to connect to backend.