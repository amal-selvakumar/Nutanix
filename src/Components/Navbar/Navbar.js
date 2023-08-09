import React, { Component } from 'react';
import './Navbar.css';
import logoimg from '../Images/nutanixLogoImage.png';
import * as AiIcons from 'react-icons/ai';

class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>
        <div className='logo'>
          <img src={logoimg} alt='logo'></img>
        </div>
        <div className='right-div'>
          <span>Admin Profile</span>
          <AiIcons.AiFillHome></AiIcons.AiFillHome>
        </div>
      </div>
    )
  }
}
export default Navbar;
