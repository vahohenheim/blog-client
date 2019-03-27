// define
import React from 'react'
import PropTypes from 'prop-types'
// connect
import { connect } from 'react-fela'
import { pxTo } from 'design-system-utils'
import ds from 'views/styles/designSystem'
// childs
import Icon from 'views/components/presentationals/Icon'

const CardIconTop = ({ styles, icon }) => (
    <div className={styles.iconTop}>
        <Icon name={icon} className={styles.icon} /> 
        <span className={styles.titleIconTop}>
            Lorem ipsum dolor sit amet consectetur
        </span>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>
    </div>
)

CardIconTop.propTypes = {
    styles: PropTypes.object.isRequired,
    icon: PropTypes.string.isRequired,
    iconWidth: PropTypes.string.isRequired,
    iconHeight: PropTypes.string.isRequired,
}

const baseFontSize = ds.get('type.baseFontSize')
const rules = {
    iconTop: () => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        textAlign: 'center',
    }),
    icon: ({ iconWidth, iconHeight }) => ({
        marginBottom: pxTo(20, baseFontSize, 'rem'),
        '> svg': {
            width: iconWidth,
            heigth: iconHeight
        }
    }),
    titleIconTop: () => ({
        fontSize: pxTo(ds.get('type.sizes.4xl'), baseFontSize, 'rem'),
        fontWeight: ds.get('type.fontWeight.bold'),
    })
}

export default connect(rules)(CardIconTop)
