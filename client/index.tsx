import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './App'

const root = document.getElementById('root')

if (module.hot) {
  module.hot.accept(() => {
    const NextApp = require('./App.tsx').default
    ReactDOM.render(
      <AppContainer>
          <NextApp/>
      </AppContainer>, root)
  })
}

ReactDOM.render(<App/>, root)
