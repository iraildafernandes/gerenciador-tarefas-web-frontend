import React from 'react'
import ReactDOM from 'react-dom'
import Home from './View/Home'

// Injeta a função que representa a página de HOME no DOC HTML através da div root
ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
)
