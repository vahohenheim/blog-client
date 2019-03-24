// define
import React from 'react'
import PropTypes from 'prop-types'
// connect
import { connect } from 'react-fela'
import { pxTo } from 'design-system-utils'
import ds from 'views/styles/designSystem'

const Heading = ({ styles, number, children }) => {
  return React.createElement(
        `h${number}`, 
        { className: styles.heading }, 
        children || null)
}

Heading.propTypes = {
  styles: PropTypes.object.isRequired,
  children: PropTypes.string.isRequired,
}

const baseFontSize = ds.get('type.baseFontSize')

const rules = {
  heading: ({ number }) => ({
    ...(number === '1' ? 
        {
          fontSize: pxTo(ds.get('type.sizes.7xl'), baseFontSize, 'rem'),
          fontWeight: ds.get('type.fontWeight.bold'),
        } : 
        number === '2' ?
        {
            
        } :
        number === '3' ?
        {
            
        } :
        number === '4' ?
        {
            
        } :
        {
            
        }),
  }),
}

export default connect(rules)(Heading)
