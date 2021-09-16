import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import CustomFooter from './CustomFooter'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <CustomFooter
      color="white"
      size="2x"
      author="Prathamesh"
      url="https://github.com/pratham82"
    />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
