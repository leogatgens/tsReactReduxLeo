import React from 'react'
import { History } from 'history'
import { ConnectedRouter } from 'connected-react-router'
import MainFrame from './views/game/container/MainFrame'

interface AppProps {
  history: History;
}

const App = ({ history }: AppProps) => {
  return (
    //<ConnectedRouter history={history}>
      <MainFrame></MainFrame>
    //</ConnectedRouter>
  )
}

export default App
