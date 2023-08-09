import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './styles/global';
import { App } from './pages/Login/App'
import { Feed } from './pages/Feed/feed';
import { UserPerfil } from './pages/UserPerfil/UserPerfil';
import { Achievements } from './pages/Achievements/Achievements';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <Achievements />
  </React.StrictMode>,
)
