import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Counter from './1.Counter'
import FunctionComponent from './3.FuncComponent'
import ElemAndComponents from './4.ElemAndComponents'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    {/* <Counter defaultCount={0} /> */}
    {/* <FunctionComponent /> */}
    <ElemAndComponents />
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
