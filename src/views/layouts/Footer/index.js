// define
import React from 'react'
import PropTypes from 'prop-types'
// connect
import { connect } from 'react-fela'
import { pxTo } from 'design-system-utils'
import ds from 'views/styles/designSystem'
// childs
import Container from 'views/components/presentationals/Container'
import Icon from 'views/components/presentationals/Icon'

const Footer = ({ styles }) => (
  <footer className={styles.footer}>
    <Container className={styles.container}>
      <p className={styles.content}>© WONDER. 2019</p>
      <div className={styles.icons}>
        <Icon name="facebook" className={styles.icon} /> 
      </div>
    </Container>
  </footer>
)

Footer.propTypes = {
  styles: PropTypes.object.isRequired,
}

const baseFontSize = ds.get('type.baseFontSize')
const rules = {
  footer: () => ({
    backgroundColor: ds.brand('magneticBlack'),
    height: pxTo(40, ds.get('type.baseFontSize'), 'rem'),
    color: ds.brand('white'),
  }),
  container: () => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0 auto',
    maxWidth: '100%',
    padding: `0 ${pxTo(ds.get('layout.gutter') / 2, ds.get('type.baseFontSize'), 'rem')}`,
  }),
  content: () => ({
    display: 'block',
    fontSize: pxTo(ds.get('type.sizes.md'), baseFontSize, 'rem'),
  }),
  icon: () => ({
    '> svg': {
      width: pxTo(20, baseFontSize, 'rem')
    },
  }),
}

export default connect(rules)(Footer)
