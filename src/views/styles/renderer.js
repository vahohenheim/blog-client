import { createRenderer } from 'fela'
import ds from 'views/styles/designSystem'

// Fela plugins (exact order)
import extend from 'fela-plugin-extend'
import embedded from 'fela-plugin-embedded'
import prefixer from 'fela-plugin-prefixer'
import fallbackValue from 'fela-plugin-fallback-value'

/*
 **
 *** Fela renderer config
 *** plugins order matters !
 **
 */

export default () => {
  const renderer = createRenderer({
    plugins: [extend(), embedded(), prefixer(), fallbackValue()],
  })

  renderer.renderStatic(
    {
      fontSize: `${ds.get('type.baseFontSize')}px`,
    },
    'html',
  )

  renderer.renderStatic(
    {
      display: 'flex',
      margin: '0 auto',
      minHeight: '100vh',
      fontSize: '1rem',
      backgroundColor: process.env.NODE_ENV !== 'storybook' ? ds.brand('greyLight') : '',
    },
    'body',
  )

  renderer.renderStatic(
    {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
    },
    '#app',
  )

  renderer.renderStatic(
    {
      fontWeight: ds.get('type.fontWeight.bold'),
    },
    'h1',
  )

  renderer.renderStatic(
    {
      fontWeight: ds.get('type.fontWeight.bold'),
    },
    'h2',
  )

  renderer.renderStatic(
    {
      fontWeight: ds.get('type.fontWeight.bold'),
    },
    'h3',
  )
  return renderer
}
