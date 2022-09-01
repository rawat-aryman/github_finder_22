import React from 'react';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import {GithubProvider} from './context/github/GithubContext';
import {AlertProvider} from './context/alerts/AlertContext';
import Alert from './components/layout/Alert';
import User from './pages/User';

function App() {
    return (
        <AlertProvider>
        <GithubProvider>
        <Router>
            <div className="flex flex-col justify-between h-screen">
                <Navbar />
                <main className='container mx-auto px-3 mb-12'>
                    <Alert />
                    <Routes>
                        <Route exact path='/' element={<Home />}> Home </Route>
                        <Route path='/about' element = {<About />} > About </Route>
                        <Route path='/user/:login' element = {<User />} > About </Route>
                        <Route path='/notfound' element={<NotFound/>}>NotFound</Route>
                        <Route path='/*' element={<NotFound/>}>NotFound</Route>
                    </Routes>
                </main>
                <Footer />
            </div>


        </Router>
        </GithubProvider>
        </AlertProvider>
    )
}

export default App;