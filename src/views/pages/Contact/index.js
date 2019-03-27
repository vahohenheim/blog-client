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
import ContactForm from 'views/components/smarts/ContactForm'

class Contact extends PureComponent {  
  render() {
    const { styles } = this.props 

    return (
      <Container className={styles.container}>
        <Row middle="xs" className={styles.container}>
          <Col xs={12} md={6} className={styles.contentWrapper}>
            <Heading number="1">
              Let's talk about everything
            </Heading>
            <p>Don't like forms ? Send us an <a className={styles.link} href="mailto:contact@wonder.com">email</a>.</p>
            <Illustration name="contact"/>
          </Col>
          <Col xs={12} md={6} className={styles.contactWrapper}>
            <Col xs={12} md={10} className={styles.contactWrapper}>
              <ContactForm/>
            </Col>
          </Col>
        </Row>
        
      </Container>
    )
  }
}

Contact.propTypes = {
    
}


const baseFontSize = ds.get('type.baseFontSize')

const rules = {
  bullet:() => ({
    color: ds.brand('primary')
  }),
  link:() => ({

  }),
  container: () => ({
    height: '100%',
  }),
  contactWrapper: () => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '> div': {
      width: '100%',
    }
  }),
  contentWrapper: () => ({
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      '> h1': {
        marginBottom: 0,
      }
  }),
}

export default connect(rules)(Contact)
