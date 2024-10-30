import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Sidebar2 } from './components/RetractingSideBar'
function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='fixed left-0 top-0 h-full'>
    <Sidebar2></Sidebar2>
   </div>
  )
}

export default App
