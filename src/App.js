import React from 'react';
import Navbar from './Navbar';
import Home from './Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
//react converts all datatypes(numbers, strings and arrays not booleans & objects) to strings before outputing it to the browser

function App(){
  return (
    <Router>
      <div className="App">
        <Navbar/>   { /*it can be written as an opening and a closing tag as well :<Navbar></Navbar> as well as a self-closing tag*/ }
        <div className="content">
          <Routes>
            <Route path='/' element={<Home/>} exact />
            <Route path='/create' element={<Create />}/>
            <Route path='/blogs/:id' element={<BlogDetails />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
