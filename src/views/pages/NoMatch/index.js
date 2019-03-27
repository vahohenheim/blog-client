// define
import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Grid, Row, Col } from 'react-flexbox-grid'
// connect
import { connect } from 'react-fela'
import { pxTo } from 'design-system-utils'
import ds from 'views/styles/designSystem'
// childs
import Container from 'views/components/presentationals/Container'
import Heading from 'views/components/presentationals/Heading'
import Illustration from 'views/components/presentationals/Illustration'
// router
import { NavLink } from 'react-router-dom'

class NoMatch extends PureComponent {
  
  render() {
    const { styles } = this.props 

    return (
      <Container className={styles.container}>
        <Row className={styles.container} middle="xs">
          <Col xs={12} md={6}>
            <Heading number="1">
              You seems lost...
            </Heading>
            <NavLink to="/" className={styles.link}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>
                <path fill="none" d="M0 0h24v24H0V0z"/>
              </svg>
              Back to Home
            </NavLink>
          </Col>
          <Col xs={12} md={6}>
            <Illustration name="404" className={styles.illustration}/>
          </Col>
        </Row>
        
      </Container>
    )
  }
}

NoMatch.propTypes = {
    
}


const baseFontSize = ds.get('type.baseFontSize')

const rules = {
  container:() => ({
    height: '100%',
  }),
  link: () => ({
    color: ds.brand('magneticBlack'),
    display: 'flex',
    alignItems: 'center',
    '> svg': {
      color: ds.brand('magneticBlack'),
      opacity: '.8',
    },
  }),
  illustration: () => ({
    '> svg': {
      width: '100%',
      zIndex:' -1',
    },
  }),
    
}

export default connect(rules)(NoMatch)
