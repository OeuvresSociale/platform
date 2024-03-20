import react from 'react';
import { IoNotificationsOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import './Header.css';
import Logo from '../Assets/Logosec.png';
import { useLocation } from 'react-router-dom';
import OIP from '../Assets/OIP.png';


const Header = () => {

const location = useLocation();

  
  const { pathname } = location;

  
  const renderText = () => {
    switch (pathname) {
      case '/employeelist':
        return 'Gestion des employés';
      case '/employeelist/Addemployee':
        return 'Gestion des employés';
      case '/demande':
        return 'Table des demandes';
        case '/demande/demandedetail':
          return 'detailles des demandes';
          case '/ajouteroffre':
            return 'Ajouter formulaire';
      default:
        return 'Dashboard';
    }
  };


  
  return (
   <div className='container'>
<div className='box1'>
    <div className='logo'><img src='Logo' /></div> 
    <div className='em'>{renderText()}</div>
</div>
<div className='box2'>
<div className='notification'><IoNotificationsOutline /></div>
<div className='profile' ><img src='../Assets/OIP.png' /></div>

</div>


   </div>
  );
};

export default Header ;
