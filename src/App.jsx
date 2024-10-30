import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Example } from './components/RetractingSideBar'
function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Example></Example>
   </div>
  )
}

export default App
