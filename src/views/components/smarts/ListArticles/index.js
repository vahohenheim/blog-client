// define
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Grid, Row, Col } from 'react-flexbox-grid'
// connect
import { connect } from 'react-fela'
import { pxTo } from 'design-system-utils'
import ds from 'views/styles/designSystem'
// childs
import CardArticle from 'views/components/presentationals/CardArticle'
// router
import { NavLink } from 'react-router-dom'
// data
import { articles } from '../../../../data/db.js'


class ListArticles extends PureComponent {

  render() {
    const { styles } = this.props

    return (
        <Row>
            {articles.length > 0 && 
              articles.map((article, index) => (
              <Col xs={12} sm={6} md={6} lg={4} key={index}>
                <NavLink className={styles.link} to={`/article/${article.id}`} exact>
                  <CardArticle article={article}/>
                </NavLink>
              </Col>
            ))}
        </Row>
    )
  }
}

const baseFontSize = ds.get('type.baseFontSize')

const rules = {
  loaderWrapper: () => ({
    marginTop: pxTo(75, baseFontSize, 'rem'),
  }),
  link: () => ({
    textDecoration: 'none',
    color: ds.brand('magneticBlack')
  }),
  list: () => ({
    listStyle: 'none',
    padding: 0,
    margin: 0,
    '> li a': {
      color: 'unset',
      textDecoration: 'none',
    },
    '> li:not(last-child)': {
      padding: 0,
      marginBottom: pxTo(20, baseFontSize, 'rem'),
    },
  }),
}

export default connect(rules)(ListArticles)
