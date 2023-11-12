import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
        <Header />
        
        <Routes>
            <Route path='/' element={<Home />}></Route>
        </Routes>

        <Footer />
    </>
  )
}

export default App
