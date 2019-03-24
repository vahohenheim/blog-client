import React from 'react'
import { render as renderDOM } from 'react-dom'
import App from "./App.js"
import { rehydrate } from 'fela-dom'
import { RendererProvider as FelaProvider } from 'react-fela'
import createRenderer from 'views/styles/renderer'

const rootEl = document.querySelector('#app')

// Render base styles
const renderer = createRenderer()
rehydrate(renderer)


renderDOM(
    <FelaProvider renderer={renderer}>
        <App />
    </FelaProvider>
    ,rootEl
)