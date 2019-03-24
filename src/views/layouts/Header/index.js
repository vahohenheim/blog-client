// define
import React from 'react'
import PropTypes from 'prop-types'
// connect
import { connect } from 'react-fela'
import { pxTo } from 'design-system-utils'
import ds from 'views/styles/designSystem'
// childs
import Navbar from 'views/layouts/Navbar'
import Icon from 'views/components/presentationals/Icon'
import Container from 'views/components/presentationals/Container'
// router
import { NavLink } from 'react-router-dom'

const Header = ({ styles }) => (
  <header className={styles.header}>
    <Container className={styles.container}>
        <div>
          <div className={styles.imgWrapper}>
            <NavLink to="/" exact>
              <Icon name="logo-origin" className={styles.logo} /> 
            </NavLink>
          </div>
          <Navbar/>
        </div>
    </Container>
  </header>
)

Header.propTypes = {
  styles: PropTypes.object.isRequired,
}

const rules = {
  header: () => ({
    backgroundColor: ds.brand('white'),
    color: ds.brand('greyDarker'),
  }),
  container: () => ({
    height: pxTo(70, ds.get('type.baseFontSize'), 'rem'),
    margin: '0 auto',
    maxWidth: '100%',
    '> div': {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: `0 ${pxTo(8, ds.get('type.baseFontSize'), 'rem')}`,
    }
  }),
  imgWrapper: () => ({
    height: '100%',
    '> a': {
      display: 'flex',
      width: '100%',
      alignItems: 'center',
      height: '100%',
    },
  }),
  logo: () => ({
    '> svg': {
      width: pxTo(120, ds.get('type.baseFontSize'), 'rem'),
    },
  }),
}

export default connect(rules)(Header)
