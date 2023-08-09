import React, { Component } from 'react';
import './Sidebar.css';
import profile from '../Images/person.jpeg';
import { sidebarData } from '../Data/Data';

class Sidebar extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       selected:0
    }
    this.changeMenuItem=this.changeMenuItem.bind(this)
  }
  changeMenuItem(index){
     this.setState({
      selected:index
     })
  }
  render() {
    return (
      <div className='sidebar'>
        <div className='user-profile'>
            <img src={profile} alt='user-img'></img>
            <span>Amal S</span>
        </div>
        <div className='profile-info'>
            <div className='num-div'>
                <div className='nums'>8</div>
                <div className='nums'>109</div>
                <div className='nums'>9</div>
            </div>
            <div className='credit-div'>
                <span>Xtribe badges</span>
                <span>Xtribe Points</span>
                <span>Credly badges</span>
            </div>
            <div className='menu'>
              {sidebarData.map((item,index)=>{
                return(
                    <div className={this.state.selected===index ? 'menu-items active':'menu-items'} onClick={()=>this.changeMenuItem(index)}>
                        {item.icon}
                        <span>{item.title}</span>
                    </div>
                )
              })}
            </div>
        </div>
        
      </div>
    )
  }
}
export default Sidebar;
