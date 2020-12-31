import React from 'react';
import './App.css';
import HomePage from '../src/pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div>
     <switch>
       <Route exact path='/' component={HomePage}></Route>
       <Route path='/shop' component={ShopPage}></Route>
     </switch>
    </div>
  );
}

export default App;
