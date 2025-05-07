import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Topbar from './components/Topbar';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<AboutMe />} path='about' />
          <Route element={<Skills />} path='/skills' />
          <Route element={<Projects />} path='/projects' />
          <Route element={<Contact />} path='/contact' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
