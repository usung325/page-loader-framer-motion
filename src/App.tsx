import { useState } from 'react'
import './App.css'
import { motion } from 'framer-motion'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import NavBar from './components/NavBar'
import { AnimatePresence } from 'framer-motion'

function App() {
  const [count, setCount] = useState(0)

  const animateValues = {
    initial: { opacity: 1, scale: 1 },
    animate: { opacity: 0, scale: 0.9 },
    exit: { opacity: 0, scale: 0.5 },
    transition: { delay: 1, duration: 2 }
  }

  const animateTransition = {
    initial: { top: '100vh' },
    animate: { top: '0' },
    exit: { top: '0' },
    transition: { delay: 1, duration: 1 }
  }
  const location = useLocation()

  return (
    <>
      {/* <div className="bg-black">
        <motion.div {...animateValues} className="flex flex-col w-[100vw] h-[100vh] bg-white">
          <div>
            <h1>Vite + React</h1>
            <div>
              <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
              </button>
              <p>
                Edit <code>src/App.tsx</code> and save to test HMR
              </p>
            </div>
            <p>
              Click on the Vite and React logos to learn more
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div  {...animateTransition} className="fixed top-0 left-0 w-[100vw] h-[100vh] bg-pink-400 z-10 font-bold text-blue-600">
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
      </motion.div> */}
      <NavBar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App
