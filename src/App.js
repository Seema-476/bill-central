import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/view/Home';
import About from './components/view/About';
import Work from './components/view/Work';
import WhyUs from './components/view/WhyUs';
import Services from './components/view/Services';
import Testimonials from './components/view/Testimonials';
import Faq from './components/view/Faq';
import Gilded from './components/view/Gilded';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about/:id' element={<About />} />
          <Route path='/work' element={<Work />} />
          <Route path='/whyus' element={<WhyUs />} />
          <Route path='/services' element={<Services />} />
          <Route path='/testimonials' element={<Testimonials />} />
          <Route path='/faq' element={<Faq />} />
          <Route path='/gilded' element={<Gilded />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
