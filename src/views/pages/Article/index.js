// define
import React from 'react'
// childs
import DetailsArticle from 'views/components/smarts/DetailsArticle'

const Article = ({ match }) => <DetailsArticle id={match.params.id}/>

export default Article

