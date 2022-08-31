import React from 'react';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import {GithubProvider} from './context/github/GithubContext';


function App() {
    return (
        <GithubProvider>
        <Router>
            <div className="flex flex-col justify-between h-screen">
                <Navbar />
                <main className='container mx-auto px-3 mb-12'>
                    <Routes>
                        <Route exact path='/' element={<Home />}> Home </Route>
                        <Route path='/about' element = {<About />} > About </Route>
                        <Route path='/notfound' element={<NotFound/>}>NotFound</Route>
                        <Route path='/*' element={<NotFound/>}>NotFound</Route>
                    </Routes>
                </main>
                <Footer />
            </div>


        </Router>
        </GithubProvider>
    )
}

export default App;