import {Routes, Route,BrowserRouter } from 'react-router-dom';
import "../App.css";
import Navbar from './Navbar';
import Home from './Home';
import Skills from './Skills';
import About from './About';
import Education from './Education';
import Contact from './Contact';
import Certificates from './Certificates';
function App() {
  return (
    <div className="Navbar">
     <BrowserRouter>
     <Navbar/>
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/skills' element={<Skills/>}/>
     <Route path='/certificates' element={<Certificates/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/education' element={<Education/>}/>
     <Route path='/contact' element={<Contact/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}
export default App;
