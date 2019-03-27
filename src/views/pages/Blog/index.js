// define
import React, { PureComponent, Fragment } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
// childs
import Container from 'views/components/presentationals/Container'
import Heading from 'views/components/presentationals/Heading'
import ListArticles from 'views/components/smarts/ListArticles'

class Blog extends PureComponent {
  
  render() {

    return (
      <Fragment>
          <Container>
            <Grid>
              <Row>
                <Col xs={12}>
                    <Heading number="1">
                      Blog
                    </Heading>
                </Col>
                <Col xs={12}>
                    <ListArticles/>
                </Col>
              </Row>
            </Grid>
          </Container>
      </Fragment>
    )
  }
}

export default Blog
