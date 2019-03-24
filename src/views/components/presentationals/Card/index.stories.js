import React from 'react'
import { storiesOf } from '@storybook/react' // eslint-disable-line no-unused-vars
// component
import Card from './'
import { withInfo } from '@storybook/addon-info'

storiesOf('Card', module).add(
  'Usage',
  withInfo(`
      #### Import
      ~~~js
      import Card from 'views/components/presentationals/Card'
      ~~~
      ---
      #### Usage
      ~~~js
      <Card>
        <h1>Hello World</h1>
        <p>This is a card, what do you think about it ?</p>
      </Card>
      ~~~

    `)(() => (
    <div>
      <Card>
        <h1>Hello World</h1>
        <p>This is a card, what do you think about it ?</p>
      </Card>
    </div>
  )),
)
