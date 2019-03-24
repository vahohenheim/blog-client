import React from 'react'
import { createComponentWithProxy } from 'react-fela'
import { NavLink } from 'react-router-dom'
import ds from 'views/styles/designSystem'
import { pxTo } from 'design-system-utils'
import PropTypes from 'prop-types'

const NavBarLink = ({ ...props }) => <NavLink {...props} />

NavBarLink.propTypes = {
  className: PropTypes.string.isRequired,
}

const rule = () => ({
  height: '100%',
  padding: `0 ${pxTo(20, ds.get('type.baseFontSize'), 'rem')}`,
  display: 'flex',
  alignItems: 'center',
  color: 'currentColor',
  textDecoration: 'none',
  '&.active': {
    boxShadow: `inset 0 -${pxTo(3, ds.get('type.baseFontSize'), 'rem')} 0 ${ds.brand('skyBlue')}`,
  },
})

export default createComponentWithProxy(rule, NavBarLink)
