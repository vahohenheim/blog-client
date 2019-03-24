import React from 'react'
import ds from 'views/styles/designSystem'
import { pxTo } from 'design-system-utils'
import PropTypes from 'prop-types'
import { connect } from 'react-fela'

const Card = ({ rules, styles, ...props }) => (
  <div {...props} className={[props.className, styles.container].filter((s) => s).join(' ')} />
)

Card.propTypes = {
  className: PropTypes.string,
  rules: PropTypes.object,
  styles: PropTypes.object,
}

const rules = {
  container: () => ({
    overflow: 'hidden',
    borderRadius: pxTo(ds.get('border.radius.card'), ds.get('type.baseFontSize'), 'rem'),
    backgroundColor: ds.brand('white'),
    boxShadow: `
      0
      ${pxTo(2, ds.get('type.baseFontSize'), 'rem')}
      ${pxTo(20, ds.get('type.baseFontSize'), 'rem')}
      ${ds.get('colors.transparentBlack')}
    `,
  }),
}

export default connect(rules)(Card)
