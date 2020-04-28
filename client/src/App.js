import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar'
import ShoppingList from './components/ShoppingList'
import AddItemsModal from './components/AddItemsModal'
import { Container } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import {loadUser} from './actions/authActions';
class App extends Component{
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render()
  {
    return (
      <Provider store={ store }>
        <div className="App">
          <AppNavbar />
          <Container>
            <AddItemsModal />
            <ShoppingList />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
