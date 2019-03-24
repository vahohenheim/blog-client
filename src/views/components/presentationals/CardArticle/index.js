// define
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Grid, Row, Col } from 'react-flexbox-grid'
// connect
import { connect } from 'react-fela'
import { pxTo } from 'design-system-utils'
import ds from 'views/styles/designSystem'
// childs
import Tag from 'views/components/presentationals/Tag'

const CardDelivery = ({ styles, article }) => {

  const limit = 90

  return (
    <div className={styles.wrapper}>
      <Row className={styles.image}>
        <img alt={article.imageAlt} src={article.imageUrl}/>
      </Row>
      <Row className={styles.details}>
        <div className={styles.title}>
          <h2>{article.title}</h2>
        </div>
        <div className={styles.infos}>
          <div className={styles.tags}>
            {article.tags.length > 0 && 
              article.tags.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
              ))}    
          </div>
          <p className={styles.date}>{article.date}</p>
        </div>
        <div className={styles.content}>
          <p>{article.content.substring(0,limit)+" ..."}</p> 
        </div>
      </Row>
    </div>
  )
}

CardDelivery.propTypes = {
  styles: PropTypes.object.isRequired,
  article: PropTypes.object.isRequired,
}

const baseFontSize = ds.get('type.baseFontSize')

const rules = {
  wrapper: () => ({
    borderRadius: pxTo(ds.get('border.radius.fieldsets'), baseFontSize, 'rem'),
    backgroundColor: ds.brand('white'),
    overflow: 'hidden',
    margin: `${pxTo(10, baseFontSize, 'rem')} 0`,
  }),
  image: () => ({
    height: pxTo(200, baseFontSize, 'rem'),
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
  title: () => ({
    '> h2': {
      display: 'block',
      height: pxTo(50, baseFontSize, 'rem'),
      overflow: 'hidden',
      margin: `0 0 ${pxTo(10, baseFontSize, 'rem')} 0`,
    }
  }),
  date: () => ({
    display: 'inline-flex',
    margin: `0 ${pxTo(5, baseFontSize, 'rem')}`,
    fontSize: pxTo(ds.get('type.sizes.md'), baseFontSize, 'rem'),
    color: ds.brand('orange'),
    fontWeight: ds.get('type.fontWeight.bold'),
    letterSpacing: pxTo(.5, baseFontSize, 'rem'),
  }),
  content: () => ({
    '> p': {
      display: 'block',
      width: '1OO%',
      height: pxTo(50, baseFontSize, 'rem'),
      overflow: 'hidden',
      margin: 0
      },
    }),
}

export default connect(rules)(CardDelivery)
