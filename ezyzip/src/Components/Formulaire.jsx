import React, { useState } from "react";
import { IoPersonAddOutline } from "react-icons/io5";
import { GoTrash } from "react-icons/go";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { Link } from 'react-router-dom';
import './Formulaire.css';
import { BsSearch } from "react-icons/bs";
import Deleteuser from "./Deleteuser";
import Modefyuser from "./Modefyuser";



const Formulaire = () => {
const[openDelete,setOpenDelete]=useState(false);
  const[openModefy,setOpenModefy]=useState(false);

    
    const [selectedGender, setSelectedGender] = useState(''); 

    const handleGenderChange = (e) => {
      setSelectedGender(e.target.value);
    };

    const [selectedrole, setSelectedrole] = useState(''); 

    const handleroleChange = (e) => {
      setSelectedrole(e.target.value);
    };

    const [selectedsitfam, setSelectedsitfam] = useState(''); 

    const handlesitfamChange = (e) => {
      setSelectedsitfam(e.target.value);
    };

    
  


    return (
      <div className="boxf">
        <div className="subboxf">
           <div className="searchf">
            <input  className='inpf' type="text" placeholder="rechercher..." />
            <BsSearch />
           </div>
           
           </div>
<div className="formulaire">
<div className="f1">
 <div style={{ width: '600px', height: '48px', marginRight: '20px',marginLeft:'20px' }} className="f2" ><input type="text"  placeholder="Nom" /></div>
 <div style={{ width: '575px', height: '48px', marginRight: '10px' }} className="f2"  ><input type="text"placeholder="Prénom" /></div>

 </div >
 <div className="f1">
 <div style={{ width: '392px', height: '48px', marginRight: '12px',marginLeft:'20px' }} className="f2" ><input type="text"  placeholder="ID" /></div>
 <div type="text" style={{ width: '390px', height: '48px', marginRight: '12px' }} className="f2"><input  placeholder="Salaire" /></div>
 <div style={{ width: '385px', height: '48px', marginRight: '10px' }} className="f2"><input  style={{ width: '240px' }}  type="date" placeholder="date de recrutement"/></div>

 </div>
 <div className="f1">
 
 <div style={{ width: '595px', height: '48px', marginRight: '18px' ,marginLeft:'20px'}} className="f2"><input type="text"  placeholder="address email" /></div>
 <div style={{ width: '584px', height: '48px', marginRight: '10px' }}className="f2"><input  type="text"  placeholder="date recrutement" /></div>
 </div>
 <div className="f1">
 
 <div  style={{ width: '1200px', height: '48px', marginRight: '10px' ,marginLeft:'20px'}}className="f2"><input type="text" placeholder="compte bancaire" /></div>
 </div>
 <div className="f1">
 <div style={{ width: '390px', height: '48px', marginRight: '10px', marginLeft:'50px' }}className="f2" >

 
      <div className="select-container">
        <select id="gender" name="gender" value={null} onChange={handleGenderChange}>
          <option value="">sexe</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
         
        </select>
       </div> 
      </div>
      <div style={{ width: '390px', height: '48px', marginRight: '10px' }}className="f2" >
      <div className="select-container">
        <select id="sitfam" name="sitfam" value={null} onChange={handlesitfamChange}>
          <option value="">situation familialle</option>
          <option value="Marié">Marié</option>
          <option value="célibataire">célibataire</option>
         
        </select>
       </div> 
      </div>
      <div style={{ width: '390px', height: '48px', marginRight: '10px' }}className="f2" >
      
      <div className="select-container">
        <select id="role" name="role" value={null} onChange={handleroleChange}>
          <option value="">role</option>
          <option value="président">président</option>
          <option value="trésorerie">trésorerie</option>
          <option value="membre">membre</option>
          <option value="employé">employé</option>
         
        </select>
        </div> 
      </div>


      

 
    

 </div>
 <div className="f1">
 <div style={{ width: '185px', height: '48px', marginLeft: '377px' }}className="f2"><input type="text"  placeholder="nombre d'enfants" /></div>
<div className="btns">
    <button className="cancel">Annuler</button> 
     <button className="add">Ajouter</button>
</div>
 </div>
      

</div>
























           <div className="tablef">
           <table>
      <thead >
        <tr>
          <th>ID</th>
          <th>Nom</th>
          <th>Email</th>
          <th>Salaire</th>
          <th>Rôle</th>
          <th></th>
          
        </tr>
      </thead>
      <tbody>
        
          <tr>
            <td>123456789</td>
            <td>Dahoun Manel</td>
            <td>dahoun@esi-sba.dz</td>
            <td>40000</td>
            <td>admin</td>
            <td className="lastcolumn"><GoTrash onClick={ () =>{setOpenDelete(true);}} />
            <MdOutlineModeEditOutline  onClick={ () =>{setOpenModefy(true);}} /></td>
          </tr>

          <tr>
            <td>123456789</td>
            <td>lakhal fz</td>
            <td>dahoun@esi-sba.dz</td>
            <td>40000</td>
            <td>admin</td>
            <td className="lastcolumn"><GoTrash />
            <MdOutlineModeEditOutline /></td>
          </tr>
       
      </tbody>
    </table>






           </div>



  {openModefy && <Modefyuser closeModefy={setOpenModefy } />}
           {openDelete && <Deleteuser  closeDelete={setOpenDelete} />}


      </div>
        );
    };
    
    export default Formulaire ;
