import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { motion } from 'framer-motion'

function App() {
  const [count, setCount] = useState(0)

  const animateValues = {
    initial: { opacity: 0, scale: 1 },
    animate: { opacity: 1, scale: 0.9 },
    exit: { opacity: 0, scale: 0.5 },
    transition: { delay: 1, duration: 2 }
  }

  const animateTransition = {
    initial: { top: '100vh' },
    animate: { top: '0' },
    exit: { top: '0' },
    transition: { delay: 1, duration: 1 }
  }

  return (
    <>
      <motion.div {...animateValues} className="flex flex-col">
        <div className="flex mx-auto">
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </motion.div>

      <motion.div  {...animateTransition} className="fixed top-0 left-0 w-[100vw] h-[100vh] bg-blue-600 z-10 font-bold text-white">
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </motion.div>
    </>
  )
}

export default App
