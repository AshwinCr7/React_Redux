import React from 'react';
import './App.css';
import Item from './Components/Item';
import Cake from './Components/Cake';
import Newcake from './Components/Newcake';
import CakeHooks from './Components/CakeHooks';
import Ice from './Components/Ice';
import store from './Redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
  	<Provider store = {store} >
    <div className="App">
      <Item cake />
      <Item />
      <Newcake />
      <Cake />
      <CakeHooks />
      <Ice />
    </div>
    </Provider>
  );
}

export default App;
