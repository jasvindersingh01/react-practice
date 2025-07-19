import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/webpages/Home';
import About from './components/webpages/About';
import Contact from './components/webpages/Contact';
import Notfound from './components/webpages/NotFound';

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Notfound />} />
            </Routes>
        </>
    )
}

export default App;