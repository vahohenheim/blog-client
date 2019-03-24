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
import ContactForm from 'views/components/smarts/ContactForm'

class Contact extends PureComponent {
  
  render() {
    const { styles } = this.props 

    return (
      <Container className={styles.container}>
        <Row>
          <Col xs={12} md={6}>
            <Heading number="1">
              Let's talk about everything
            </Heading>
          </Col>
          <Col xs={12} md={6}>
            <ContactForm/>
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

    container: () => ({
        backgroundColor: 'black',
    }),
}

export default connect(rules)(Contact)
