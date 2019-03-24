// define
import React from 'react'
import PropTypes from 'prop-types'
// connect
import { connect } from 'react-fela'
import { pxTo } from 'design-system-utils'
import ds from 'views/styles/designSystem'
// router
import { NavLink } from 'react-router-dom'

const Tag = ({ styles, children }) => {

    return (
        <div className={styles.tag}>
            {children}
        </div>
      )

  return (
    <div className={styles.tag}>
        <NavLink to={`/tag/${children}`} exact>
            {children}
        </NavLink>
    </div>
  )
}

Tag.propTypes = {
  styles: PropTypes.object.isRequired,
  children: PropTypes.string.isRequired,
}

const baseFontSize = ds.get('type.baseFontSize')

const rules = {
  tag: () => ({
    backgroundColor: ds.brand('orange'),
    borderRadius: pxTo(ds.get('border.radius.buttons'), baseFontSize, 'rem'),
    padding: pxTo(3, baseFontSize, 'rem'),
    display: 'inline-flex',
    fontSize: pxTo(ds.get('type.sizes.md'), baseFontSize, 'rem'),
    color: ds.brand('white'),
    '> a': {
        margin: 0,
        textDecoration: 'none',
        color: ds.brand('white'),
    },
  }),
}

export default connect(rules)(Tag)
