  import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://github.com/dhirendraj-cmd',
//       target: '_blank'
//   },
//   children: 'Click me '
// }

const username = "dj21"

const anotherElement = (
  <a href="https://github.com/dhirendraj-cmd">MyGit</a>
)

const reactElement = React.createElement(
  'a',
  {
    href: 'https://github.com/dhirendraj-cmd',
    target: '_blank'
  },
  'my git profile',
  username

)

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  reactElement
  
  //   {/* <App /> */}
  //   anotherElement
  // </StrictMode>,
)
