import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
// Lazy-load About to avoid blocking the app if framer-motion isn't installed yet
const About = lazy(() => import('./pages/About'));

import "react-vertical-timeline-component/style.min.css";

const App = () => {
  return (
    <main className='bg-slate-300/20'>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route
                  path='/about'
                  element={
                    <Suspense fallback={
                      <div className='flex justify-center items-center min-h-screen'>
                        <div className="w-20 h-20 border-2 border-blue-500 border-t-blue-500 rounded-full animate-spin"></div>
                      </div>
                    }>
                      <About />
                    </Suspense>
                  }
                />
                <Route path='/contact' element={<Contact />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/blog' element={<Blog />} />
            </Routes>
        </BrowserRouter>
    </main>
  )
}

export default App 
