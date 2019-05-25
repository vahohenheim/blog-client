// define
import React, { Component, Fragment } from 'react'
import {hot} from "react-hot-loader"
import routes from 'routes'
import { Switch, BrowserRouter as Router, Route } from "react-router-dom"

// connect
import { connect } from 'react-fela'
import { pxTo } from 'design-system-utils'
import ds from 'views/styles/designSystem'
import data from 'store'
// childs
import Header from 'views/layouts/Header'
import Footer from 'views/layouts/Footer'
// styles
import 'assets/css/main.css'


	
import Prismic from 'prismic-javascript';
import {Link, RichText, Date} from 'prismic-reactjs';



class App extends Component{
  constructor(props) {
    super(props)

    this.state = {
      doc: null,
    }
  }

  	
  componentWillMount() {
    const apiEndpoint = 'https://valentinbourreau.cdn.prismic.io/api/v2';
    
    const accessToken = 'MC5YTlZ0NmlvQUFENEFvNHc1.GUInVO-_vTzvv73vv73vv71F77-9Zlsg77-9JUbvv70-AWIY77-977-977-9He-_vVPvv71wS0Y';
 
    Prismic.api(apiEndpoint, {accessToken}).then(api => {
      api.query("").then(response => {
        if (response) {
          this.setState({ doc: response.results });
        }
      });
    });
  }





  render(){
    const { styles } = this.props
    const documentBaseFontSize = ds.get('type.baseFontSize')

    console.log(this.state.doc)

    if(!this.state.doc) {
      return <h1>Loading.....</h1>
    }

    

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
          <main className={styles.main}>
            <Switch>
              {routes.map((route) => (
                <Route key={route.path} {...route} />
              ))}
            </Switch>
          </main>
          <Footer/>
        </Fragment>
      </Router>
    )
    
  }
}


const rules = {
  body: () => ({
    backgroundColor: ds.brand('primary'),
    color: ds.brand('magneticBlack'),
  }),
  main: () => ({
    height: '100%',
  }),

}

export default connect(rules)(hot(module)(App))