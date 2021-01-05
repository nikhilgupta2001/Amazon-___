import React from "react";
import './App.css';
import Header from './Header';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Home from './Home';
import Checkout from './Checkout';

function App() {
  return (
  <Router>
    <div className="app">
    <Switch>
         <Route path="/checkout">
           <Header />
           <Checkout />
           {/* <h1>Checkout</h1> */}
         </Route>
         <Route path="/login">
           <h1>Login Page</h1>
         </Route>
         {/*This is the defult route*/}
         <Route path="/">
          <Header />
          <Home />
         </Route>
    </Switch>
    </div>
  </Router>
  );
}


export default App;

