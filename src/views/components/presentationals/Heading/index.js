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
  heading: ({ number, brand = 'magneticBlack' }) => ({
    ...(number === '1' ? 
        {
          color: ds.brand(brand),
          fontSize: pxTo(ds.get('type.sizes.7xl'), baseFontSize, 'rem'),
          fontWeight: ds.get('type.fontWeight.bold'),
          position: 'relative',
          ':before': {
            content: '.',
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            color: ds.brand('primary')
          }
        } : 
        number === '2' ?
        {
          color: ds.brand(brand),
          fontSize: pxTo(ds.get('type.sizes.6xl'), baseFontSize, 'rem'),
          fontWeight: ds.get('type.fontWeight.bold'),
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
