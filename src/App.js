import React, { Component, Fragment } from 'react'
import {hot} from "react-hot-loader"
import Header from 'views/layouts/Header'
import Footer from 'views/layouts/Footer'
import 'assets/css/main.css'
import routes from 'routes'
import { BrowserRouter as Router, Route } from "react-router-dom"
import ds from 'views/styles/designSystem'
import { pxTo } from 'design-system-utils'

class App extends Component{
  render(){
    const documentBaseFontSize = ds.get('type.baseFontSize')

    return (
      <Router>
        <Fragment>
          <Header />
          <div
            style={{
              '--backgroundColor': ds.brand('white'),
              '--color': ds.get('colors.texts.default'),
              '--fontWeight': 'bold',
              '--fontSize': pxTo(14, documentBaseFontSize, 'rem'),
              '--lineHeight': pxTo(20, documentBaseFontSize, 'rem'),
              '--boxShadow': '0 2px 5px 0 rgba(0,0,0,0.2);',
              '--borderRadius': pxTo(3, documentBaseFontSize, 'rem'),
              '--spacing': pxTo(15, documentBaseFontSize, 'rem'),
            }}
          ></div>
          <main>
            {routes.map((route) => (
              <Route key={route.path} {...route} />
            ))}
          </main>
          <Footer />
        </Fragment>
      </Router>
    )
    
  }
}

export default hot(module)(App);