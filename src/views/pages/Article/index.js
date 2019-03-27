// define
import React from 'react'
// childs
import DetailsArticle from 'views/components/smarts/DetailsArticle'

const Article = ({ match, history }) => <DetailsArticle id={match.params.id} history={history}/>

export default Article

