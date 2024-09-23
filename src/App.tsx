import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/homepage/homepage';
import InvalidSection from './pages/404/404';
import Projects from './pages/projects/projects';
import Recommendations from './pages/recommendations/recommendations';
import Certificates from './pages/certificates/certificates';
import Contact from './pages/contact/contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="certificates" element={<Certificates />} />
        <Route path="Recommendations" element={<Recommendations />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<InvalidSection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
