import React from 'react'
import { storiesOf } from '@storybook/react' // eslint-disable-line no-unused-vars

// add-on
import { text } from '@storybook/addon-knobs'

// component
import InputText from './'

let input = {
  onChange: () => ({}),
  value: text('label', 'example@glinko.com'),
}

storiesOf('InputText', module)
  .add('Type text', () => (
    <div>
      <InputText label="Username" input={input} />
      <InputText
        label="Username"
        input={{
          onChange: () => ({}),
          value: text('value', ''),
        }}
      />
      <InputText
        label="Username"
        input={input}
        meta={{
          touched: true,
          error: 'Must be a username',
        }}
      />
    </div>
  ))
  .add('Type password', () => (
    <div>
      <InputText label="Password" type="password" input={input} />
      <InputText
        label="Password"
        type="password"
        input={{
          onChange: () => ({}),
          value: '',
        }}
      />
      <InputText
        label="Password"
        type="password"
        input={input}
        meta={{
          touched: true,
          error: 'Must be a password',
        }}
      />
    </div>
  ))
