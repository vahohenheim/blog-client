import loadable from 'loadable-components'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadable(() => import('views/pages/Home')),
    exact: true,
    display: true,
    sitemap: true,
  },
  {
    path: '/about',
    name: 'About',
    component: loadable(() => import('views/pages/About')),
    sitemap: true,
  },
  {
    path: '/blog',
    name: 'Blog',
    component: loadable(() => import('views/pages/Blog')),
    sitemap: true,
  },
  {
    path: '/article/:id',
    name: 'Article',
    component: loadable(() => import('views/pages/Article')),
    sitemap: true,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: loadable(() => import('views/pages/Contact')),
    sitemap: true,
  },
  {
    path: '*',
    name: 'NoMatch',
    component: loadable(() => import('views/pages/NoMatch')),
    sitemap: true,
  },
]

export default routes
