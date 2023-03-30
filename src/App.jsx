import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Order from './components/Order/Order'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <Order></Order>
    </div>
  )
}

export default App
