import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Profile from './pages/Profile.tsx'
import { AnimatePresence } from 'framer-motion'


// const router = createBrowserRouter([{
//   path: '/',
//   element: <App />,
// }
// ])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </Router>
  </StrictMode>,
)
