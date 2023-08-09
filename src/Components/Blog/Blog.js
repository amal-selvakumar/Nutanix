import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Blog.css';

class Blog extends Component {
  render() {
    return (
      <div className='blog'>
        <div className='blog-header'>
          <Link to='/admin/blogs' className='link-title'>Blogs</Link>
          <Link to='/admin/store-password' className='link-title'>Store password</Link>
          <Link to='/admin/add-user' className='link-title'>Add User</Link>
        </div>
        <div className='blog-content'>

        </div>
        <div className='blog-table'>

        </div>
      </div>
    )
  }
}
export default Blog;
