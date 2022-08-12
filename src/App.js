import { useState } from 'react'
import {
  Tab,
  Dock,
  Login,
  FinderButton
} from './components'
import './index.sass';

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [open, setOpen] = useState(false)

  return (
    <div className="App">
      <Login setLoggedIn={setLoggedIn} />
      {
        loggedIn &&
        <>
          <FinderButton setOpen={setOpen} />
          <Tab setOpen={setOpen} open={open} />
          <Dock setOpen={setOpen} />
        </>
      }
    </div >
  )
}

export default App;
