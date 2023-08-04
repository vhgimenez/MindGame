import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './styles/global';
import { App } from './pages/Login/App'
import { Feed } from './pages/Feed/feed';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <Feed />
  </React.StrictMode>,
)
