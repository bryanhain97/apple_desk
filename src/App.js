import { useState, createContext } from 'react'
import {
  Tab,
  Dock,
  Login,
  FinderButton
} from './components'
import './index.sass';

export const LoginContext = createContext(null)

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [open, setOpen] = useState(false)

  return (
    <div className="App">
      <Login setLoggedIn={setLoggedIn} />
      <LoginContext.Provider value={{ open, setOpen }}>
        {
          loggedIn &&
          <>
            <FinderButton />
            <Tab />
            <Dock />
          </>
        }
      </LoginContext.Provider>
    </div >
  )
}

export default App;
