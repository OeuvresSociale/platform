import React from 'react';
import Header from '../Components/Header';
import Usertable from '../Components/Usertable';
import './Employeelist.css';
import Sidebar from '../Components/Sidebar';


const Employeelist = () => {
  return (
    <div>
     <div className="container">
      <Sidebar  className='sidebar'/>
      <div className="content">
        <Header className="header" />
        <Usertable className="usertable" />
      </div>
    </div>
 </div> );
};

export default Employeelist;