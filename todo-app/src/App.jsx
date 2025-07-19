import { Routes, Route } from 'react-router-dom';
import Navbar from './advance/routing-todo/components/Navbar';
import Home from './advance/routing-todo/webpages/Home';
import About from './advance/routing-todo/webpages/About';
import Contact from './advance/routing-todo/webpages/Contact';
import NotFound from './advance/routing-todo/webpages/NotFound';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;