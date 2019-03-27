// define
import React, { PureComponent, Fragment } from 'react'
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
                    children: 'Home',
                },
                {
                    type: NavBarLink,
                    props: {
                        to: '/about',
                        exact: true,
                        activeClassName: 'active',
                    },
                    children: 'About',
                },
                {
                    type: NavBarLink,
                    props: {
                        to: '/blog',
                        exact: true,
                        activeClassName: 'active',
                    },
                    children: 'Blog',
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
            <Fragment>
                <nav className={styles.navDesktop}>
                    {elements.map((element, index) =>
                        React.createElement(element.type, { ...element.props, brand: element.brand, key: index }, element.children || null),
                    )}
                </nav>
                <nav className={styles.navMobile}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
                    </svg>
                </nav>
            </Fragment>
        )
    }
}

NavBar.propTypes = {
    styles: PropTypes.object.isRequired,
}
  
const rules = {
    navDesktop: () => ({
        height: pxTo(70, ds.get('type.baseFontSize'), 'rem'),
        display: 'none',
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
        '@media (min-width: 768px)': {
            display: 'flex',
        },
    }),
    navMobile: () => ({
        height: pxTo(70, ds.get('type.baseFontSize'), 'rem'),
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
        '@media (min-width: 768px)': {
            display: 'none',
        },
    }),
}

export default connect(rules)(NavBar)
