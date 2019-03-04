
import React, { Component} from "react"
import {hot} from "react-hot-loader"
import Header from 'views/layouts/Header'
import Footer from 'views/layouts/Footer'
import 'assets/css/main.css'
import routes from 'routes'
import { BrowserRouter as Router, Route } from "react-router-dom";

console.log('Route', Route)

class App extends Component{
  render(){
    return(
      <Router>
        <div className="App">
          <Header/>
          <main>
            {routes.map((route) => (
              <Route key={route.path} {...route} />
            ))}
          </main>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default hot(module)(App);