import { useState } from 'react'
import './App.css'
import Body from './components/Body'
import Head from './components/Head'
import { Provider } from 'react-redux'
import store from './utils/store'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
    <div>
      <Head/>
      <Body/>
    </div>
    </Provider>
  )
}

export default App