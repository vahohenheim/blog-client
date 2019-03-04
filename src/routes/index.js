import loadable from 'loadable-components'

const routes = [
  {
    path: '/',
    name: 'Blog',
    component: loadable(() => import('views/pages/Blog')),
    exact: true,
    display: true,
    sitemap: true,
  },
  {
    path: '/:id',
    name: 'Article',
    component: loadable(() => import('views/pages/Article')),
    sitemap: true,
  },
]

export default routes
