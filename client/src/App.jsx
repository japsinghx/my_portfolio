// Import BrowserRouter to enable routing - required for Link components
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar'
import Timeline from './components/Timeline';
import Introduction from './Introduction';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

function App() {
  return (
    // Router wraps entire app - enables Link components to work
    <Router>
      <div className="min-h-screen flex flex-row overflow-hidden bg-[#fafafa] dark:bg-[#0a0a0a]">
        <NavBar />
        <main className="flex-grow overflow-x-hidden overflow-y-auto bg-[#fafafa] dark:bg-[#0a0a0a]">
          <Routes>
            <Route path="/" element={
              <>
                <Introduction/>
                <Experience />
              </>
            } />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
