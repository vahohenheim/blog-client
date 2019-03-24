// define
import React from 'react'
import PropTypes from 'prop-types'
// connect
import { connect } from 'react-fela'
import { pxTo } from 'design-system-utils'
import ds from 'views/styles/designSystem'

const Container = ({ rules, styles, ...props }) => (
  <div {...props} className={[props.className, styles.container].filter((s) => s).join(' ')} />
)

Container.propTypes = {
  rules: PropTypes.object.isRequired,
  styles: PropTypes.object.isRequired,
  className: PropTypes.string,
}

const rules = {
  container: () => ({
    padding: `0 ${pxTo(ds.get('layout.gutter') / 2, ds.get('type.baseFontSize'), 'rem')}`,
    margin: '0 auto',
    '@media (min-width: 768px)': {
      padding: 0,
      maxWidth: pxTo(ds.get('layout.maxWidth.sm'), ds.get('type.baseFontSize'), 'rem'),
    },
    '@media (min-width: 991px)': {
      maxWidth: pxTo(ds.get('layout.maxWidth.md'), ds.get('type.baseFontSize'), 'rem'),
    },
    '@media (min-width: 1280px)': {
      maxWidth: pxTo(ds.get('layout.maxWidth.lg'), ds.get('type.baseFontSize'), 'rem'),
    },
    '@media (min-width: 1440px)': {
      maxWidth: pxTo(ds.get('layout.maxWidth.xl'), ds.get('type.baseFontSize'), 'rem'),
    },
    '@media (min-width: 1600px)': {
      maxWidth: pxTo(ds.get('layout.maxWidth.xxl'), ds.get('type.baseFontSize'), 'rem'),
    },
  }),
}

export default connect(rules)(Container)
