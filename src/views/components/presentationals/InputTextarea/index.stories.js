import React from 'react'
import { storiesOf } from '@storybook/react' // eslint-disable-line no-unused-vars

// add-on
import { text, boolean } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'

// component
import InputTextarea from './'

let input = {
  onChange: () => ({}),
  value: text(
    'Textarea content',
    "Je préfère au constance, à l'opium, au nuits, L'élixir de ta bouche où l'amour se pavane ; Quand vers toi mes désirs partent en caravane,Tes yeux sont la citerne où boivent mes ennuis.",
  ),
}

storiesOf('InputTextarea', module)
  .add(
    'Usage',
    withInfo(`
        #### Import
        ~~~js
        import InputTextarea from 'views/components/presentationals/InputTextarea'
        ~~~
        ---
        #### Usage
        ~~~js
        let input = {
            onChange: () => ({}),
              value: {string},
            }
        <InputTextarea
          label={string}
          input={input}
          meta={{
            touched: {true|false},
            error: {string},
          }}
        />
        ~~~

      `)(() => (
      <InputTextarea
        label={text('Label', 'Content')}
        input={input}
        meta={{
          touched: boolean('With error', false),
          error: text('Error message', 'Must be longer'),
        }}
      />
    )),
  )
  .add(
    'Default',
    withInfo(`
        #### Import
        ~~~js
        import InputTextarea from 'views/components/presentationals/InputTextarea'
        ~~~
        ---
        #### Usage
        ~~~js
        let input = {
          onChange: () => ({}),
          value: '',
        }
        <InputTextarea
          label="Content"
          input={input}
          meta={{
            touched: false,
          }}
        />
        ~~~

      `)(() => (
      <InputTextarea
        label="Content"
        input={{
          onChange: () => ({}),
          value: '',
        }}
        meta={{
          touched: false,
        }}
      />
    )),
  )
  .add(
    'With a value',
    withInfo(`
        #### Import
        ~~~js
        import InputTextarea from 'views/components/presentationals/InputTextarea'
        ~~~
        ---
        #### Usage
        ~~~js
        let input = {
          onChange: () => ({}),
          value: "Je préfère au constance, à l'opium, au nuits, L'élixir de ta bouche où l'amour se pavane ; Quand vers toi mes désirs partent en caravane,Tes yeux sont la citerne où boivent mes ennuis.",
        }
        <InputTextarea
          label="Content"
          input={input}
          meta={{
            touched: false,
          }}
        />
        ~~~

      `)(() => (
      <InputTextarea
        label="Content"
        input={input}
        meta={{
          touched: false,
        }}
      />
    )),
  )
  .add(
    'With an error',
    withInfo(`
        #### Import
        ~~~js
        import InputTextarea from 'views/components/presentationals/InputTextarea'
        ~~~
        ---
        #### Usage
        ~~~js
          let input = {
            onChange: () => ({}),
            value: "Je préfère au constance, à l'opium, au nuits, L'élixir de ta bouche où l'amour se pavane ; Quand vers toi mes désirs partent en caravane,Tes yeux sont la citerne où boivent mes ennuis.",
          }
          <InputTextarea
            label="Content"
            input={input}
            meta={{
              touched: true,
              error: 'Oopsie doopsie homie',
            }}
          />
        ~~~

      `)(() => (
      <InputTextarea
        label="Content"
        input={input}
        meta={{
          touched: true,
          error: text('Error message', 'Oopsie doopsie homie'),
        }}
      />
    )),
  )
