import React from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Footer from './components/Footer';
import FetchData from './components/FetchData';

const App = () => {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home cat='general'/>}/>
          <Route exact path='/general' element={<FetchData cat='general'/>}/>
          <Route exact path='/bussiness' element={<FetchData cat='business'/>}/>
          <Route exact path='/entertainment' element={<FetchData cat='entertainment'/>}/>
          <Route exact path='/health' element={<FetchData cat='health'/>}/>
          <Route exact path='/science' element={<FetchData cat='science'/>}/>
          <Route exact path='/sports' element={<FetchData cat='sports'/>}/>
          <Route exact path='/technology' element={<FetchData cat='technology'/>}/>

        </Routes>
        <Footer/>
      </Router>
    </>
    )
}

export default App
