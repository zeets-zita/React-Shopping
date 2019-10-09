import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import Shop from './components/shop';
import About from './components/about';
import NotFound from './components/notFound';

import './styles/product.css';
import './App.css';

class App extends Component {
  render() {
    return (
       <BrowserRouter>
            <div className="App">
              <Navbar/>
                <Switch>
                  <Route exact path="/" component={ Home } />
                  <Route path="/shop" component={ Shop } />
                  <Route path="/about" component={ About } />
                  <Route path="/404" component={ NotFound } />
                  <Redirect to="/404" />
                </Switch>
             </div>
       </BrowserRouter>
    );
  }
}

export default App;