import { Route, Routes } from 'react-router-dom';
import './App.css';

import { AuthProvider } from './contexts/authContext';
import Path from './utils/paths';

import AuthGuard from './guards/AuthGuard';
import GuestGuard from './guards/GuestGuard';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Logout from './components/Logout/Logout';
import NotFound from './components/NotFound/NotFound';
import ArticleList from './components/ArticleList/ArticleList';
import ArticleCreate from './components/ArticleCreate/ArticleCreate';
import ArticleDetails from './components/ArticleDetails/ArticleDetails';

function App() {
  return (
    <AuthProvider>
        <Header />
        
        <Routes>
            <Route path={Path.Home} element={<Home />}></Route>
            <Route path={Path.About} element={<About />}></Route>
            <Route path={Path.Contacts} element={<Contacts />}></Route>
            <Route path={Path.Articles} element={<ArticleList />}></Route>
            <Route path={Path.ArticleCreate} element={<ArticleCreate />}></Route>
            <Route path={Path.ArticleDetails} element={<ArticleDetails />}></Route>

            <Route path='*' element={<NotFound />}></Route>

            <Route element={<AuthGuard />}>
                <Route path={Path.Logout} element={<Logout />}></Route>
            </Route>

            <Route element={<GuestGuard />}>
                <Route path={Path.Login} element={<Login />}></Route>
                <Route path={Path.Register} element={<Register />}></Route>
            </Route>

        </Routes>

        <Footer />
    </AuthProvider>
  )
}

export default App
