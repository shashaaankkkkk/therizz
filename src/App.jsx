import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Sidebar2 } from './components/RetractingSideBar'
function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Sidebar></Sidebar>
   </div>
  )
}

export default App
