import { Routes, Route } from 'react-router-dom';
import Home from './Home';        // your current portfolio content
import About from './About';  // the page you're adding
import ColorBomb from './ColorBomb';
import News from './News';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path='/color' element={<ColorBomb />} />
      <Route path='/news' element={<News />} />
    </Routes>
  );
}