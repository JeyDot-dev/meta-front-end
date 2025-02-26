import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Heading from './Heading'
import Nav from './components/Nav'
import Hello from './components/Hello'
import Promo from './components/Promo.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Heading/>
    <Hello name="Johan-kun"/>
    <Promo/>
    </>
  )
}

export default App
