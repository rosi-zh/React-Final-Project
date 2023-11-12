import { Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';

import './App.css';

function App() {
  return (
    <>
        <Header />
        
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
        </Routes>

        <Footer />
    </>
  )
}

export default App
