// define
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
// connect
import { connect } from 'react-fela'
import { pxTo } from 'design-system-utils'
import ds from 'views/styles/designSystem'
// context
import { Link } from "react-router-dom"
import NavBarLink from 'views/components/presentationals/NavBarLink'
import NavBarButton from 'views/components/presentationals/NavBarButton'

class NavBar extends PureComponent {
    constructor(props) {
      super(props)
  
    }
  
    render() {
        const { styles } = this.props

        const elements = []
        .concat(
            [
                {
                    type: NavBarLink,
                    props: {
                    to: '/',
                    exact: true,
                    activeClassName: 'active',
                    },
                    children: 'Accueil',
                },
                {
                    type: NavBarLink,
                    props: {
                    to: '/article/1',
                    exact: true,
                    activeClassName: 'active',
                    },
                    children: 'Article',
                },
                {
                    type: NavBarButton,
                    props: {
                        to: '/contact',
                        exact: true,
                    },
                    children: 'Contact',
                },
            ]
        )

        return (
            <nav className={styles.nav}>
                {elements.map((element, index) =>
                    React.createElement(element.type, { ...element.props, key: index }, element.children || null),
                )}
            </nav>
        )
    }
}

NavBar.propTypes = {
    styles: PropTypes.object.isRequired,
}
  
const rules = {
    nav: () => ({
        height: pxTo(80, ds.get('type.baseFontSize'), 'rem'),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: ds.brand('magneticBlack'),
        '> a button': {
          marginLeft: pxTo(20, ds.get('type.baseFontSize'), 'rem'),
        },
        '> div:last-child': {
          marginLeft: pxTo(20, ds.get('type.baseFontSize'), 'rem'),
        },
    }),
}

export default connect(rules)(NavBar)
