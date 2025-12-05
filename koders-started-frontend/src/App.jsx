import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import DashboardCard from './components/DashboardCard'
import SystemStatus from './components/SystemStatus'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <DashboardCard/>
        <SystemStatus/>
    </>
  )
}

export default App
