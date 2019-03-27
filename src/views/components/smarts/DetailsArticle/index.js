// define
import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Grid, Row, Col } from 'react-flexbox-grid'
// connect
import { connect } from 'react-fela'
import { pxTo } from 'design-system-utils'
import ds from 'views/styles/designSystem'
// childs
import Container from 'views/components/presentationals/Container'
import Heading from 'views/components/presentationals/Heading'
import Tag from 'views/components/presentationals/Tag'
// router
import { NavLink } from 'react-router-dom'
// data
import { articles } from '../../../../data/db.js'

class DetailsArticle extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      article: articles.filter((article) => article.id === this.props.id)[0]
    }
  }

  componentDidMount() {

  }

  render() {
    const { styles, history } = this.props
    const { article } = this.state

    if(article && Object.values(article).length > 0 ) {
      return (
        <Fragment>
          <div className={styles.image}>
            <img alt={article.imageAlt} src={article.imageUrl}/>
          </div>
          <Container>
            <Grid>
              <Row>
                <Col xs={12}>
                  <Heading number="1">
                    {article.title}
                  </Heading>
                </Col>
                <Col xs={12}>
                <Row className={styles.details}>
                  <div className={styles.infos}>
                    <div className={styles.tags}>
                      {article.tags.length > 0 && 
                        article.tags.map((tag, index) => (
                          <Tag link={true} brand="primary" key={index}>{tag}</Tag>
                        ))}    
                    </div>
                    <p className={styles.date}>{article.date}</p>
                  </div>
                  <div className={styles.content}>
                    <p>{article.content}</p> 
                  </div>
                </Row>
                </Col>
              </Row>
            </Grid>
          </Container>
        </Fragment>
      )
    } else {
      return history.push('/article/not-found')
     
    }

    
  }
}

const baseFontSize = ds.get('type.baseFontSize')

const rules = {
  image: () => ({
    height: pxTo(300, baseFontSize, 'rem'),
    '> img': {
      height: '100%',
      width: '100%',
      objectFit: 'cover',
    },
  }),
  infos: () => ({
    width: '100%',
    marginBottom: pxTo(5, baseFontSize, 'rem'),
  }),
  details: () => ({
    padding: pxTo(15, baseFontSize, 'rem'),
  }),
  tags: () => ({
    display: 'inline-flex',
    '> div ': {
      marginRight: pxTo(7, baseFontSize, 'rem'),
    }
  }),
  date: () => ({
    display: 'inline-flex',
    margin: `0 ${pxTo(5, baseFontSize, 'rem')}`,
    fontSize: pxTo(ds.get('type.sizes.md'), baseFontSize, 'rem'),
    color: ds.brand('primary'),
    fontWeight: ds.get('type.fontWeight.bold'),
    letterSpacing: pxTo(.5, baseFontSize, 'rem'),
  }),
  content: () => ({

  }),
}

export default connect(rules)(DetailsArticle)
