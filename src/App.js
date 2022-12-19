import './styles/main.css'

import Navbar from './components/navbar/Navbar'
import Home from './pages/Home';
import Footer from './components/footer/Footer'
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';

import Project from './pages/Project';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ScrollToTop from './utils/scrollToTop';


function App() {
  return (
    
    <div className="App" >

      <Router>

      <ScrollToTop />

          <Navbar />


          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/projects' element={ <Projects /> } />
            <Route path='/project/:id' element={ <Project /> } />
            <Route path='/contacts' element={ <Contacts /> } />
          </Routes>


          <Footer />


      </Router>

   

      

    </div>
    
  );
}

export default App;
