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
import InputText from 'views/components/presentationals/InputText'
import InputTextarea from 'views/components/presentationals/InputTextarea'
import Button from 'views/components/presentationals/Button'
import Heading from 'views/components/presentationals/Heading'
import Tag from 'views/components/presentationals/Tag'

import InputAnt from 'antd/lib/input';


class ContactForm extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
          value: ''
      }
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      const { styles } = this.props

      const input = {
        value: '',
        onChange: () => {}
      }

      return (
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <InputAnt.Group>
            <InputText label="Full name" input={input} />
              <InputText label="Email" input={input} />
              <InputTextarea label="Message" input={input} />
              <div className={styles.button}>
                <Button brand="primary" size="sm" onClick={this.handleSubmit}>
                  Send
                </Button>
              </div>
          </InputAnt.Group>
        </form>
      );
    }
}


ContactForm.propTypes = {
    
}

const rules = () => ({
  form:() => ({
    width: '100%',
  }),
  button:() => ({
    textAlign: 'right'
  })
})

export default connect(rules)(ContactForm)
  