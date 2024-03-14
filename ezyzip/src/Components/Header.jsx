import react from 'react';
import { IoNotificationsOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import './Header.css'
import Logo from '../Assets/Logosec.png'

const Header = () => {
  return (
   <div className='container'>
<div className='box1'>
    <div className='logo'><img src='Logosec' /></div> 
    <div className='em'>Gestion des employés</div>
</div>
<div className='box2'>
<div className='notification'><IoNotificationsOutline /></div>
<div className='profile' ><FaUserCircle /></div>

</div>


   </div>
  );
};

export default Header ;
