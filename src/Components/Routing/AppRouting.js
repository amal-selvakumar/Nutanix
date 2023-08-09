import React, { Component } from 'react';
import './AppRouting.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Blog from '../Blog/Blog';

class AppRouting extends Component {
  render() {
    return (
      <div className='app-routing'>
        <Router>
          <Routes>
            <Route path='/' element={<Blog></Blog>}></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}
export default AppRouting;
