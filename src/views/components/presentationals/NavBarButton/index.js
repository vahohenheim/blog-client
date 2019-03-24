import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import Button from 'views/components/presentationals/Button'

const NavBarButton = ({ children, brand, outline, ...props }) => (
  <NavLink {...props}>
    <Button brand={brand} size="sm" outline={outline}>
      {children}
    </Button>
  </NavLink>
)

NavBarButton.propTypes = {
  children: PropTypes.any.isRequired,
  brand: PropTypes.string,
  outline: PropTypes.bool,
}

NavBarButton.defaultProps = {
  brand: 'primary',
  outline: true,
}

export default NavBarButton
