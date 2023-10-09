import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar/navbar'
import TextBlock from './textBlock';
import Hero from './components/hero/hero'
import About from './components/about/about'
import Experience from './components/experience/experience'
import Tech from './components/tech/tech'
import Works from './components/works/works'
import Feedbacks from './components/feedbacks/feedbacks'
import Contact from './components/contact/contact'

import './App.css';

function App() {
  return (
    <div>
    {/* <BrowserRouter> */}
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />            
          <Contact />
    {/* </BrowserRouter> */}
    </div>
  );
}

export default App;