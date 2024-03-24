import React, { useState ,useEffect} from "react";
import { IoPersonAddOutline } from "react-icons/io5";
import { GoTrash } from "react-icons/go";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { Link } from 'react-router-dom';
import './Formulaire.css';
import { BsSearch } from "react-icons/bs";
import Deleteuser from "./Deleteuser";
import Modefyuser from "./Modefyuser";

import axios from 'axios';


const Formulaire = () => {
const[openDelete,setOpenDelete]=useState(false);
  const[openModefy,setOpenModefy]=useState(false);

    


    
  
    const [inputs, setInputs]=useState({
      idEmployee:"",
      familyName:"",
      firstName:"",
      email:"",
      phoneNumber: "" ,
      sexe:"",
      familysitution:"",
      numberOfChild:"",
      bankAccount:"",
      monthlySalary:"",
      dateStartJob:"",
      password:"",
      role:"",
      
      
    });
    
    const [err, setErr]=useState(null);
    // Effect to update inputs state when gender, role, or sitfam change
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
    const handleChange = (e) =>{
      setInputs((prev)=>({...prev,[e.target.name]:e.target.value}));
    };
    const [selectedGender, setSelectedGender] = useState(''); 

    
    /** */
      // Effect to update inputs state when gender, role, or sitfam change
  useEffect(() => {
    setInputs(prevInputs => ({
      ...prevInputs,
      sexe: selectedGender,
      role: selectedrole,
      familysitution: selectedsitfam
    }));
  }, [selectedGender, selectedrole, selectedsitfam]);


    const handleClick = async (e) => {
      
     e.preventDefault();//not refreshing the page 
    try{
     
      await axios.post("http://localhost:8000/api/register",inputs);
      
    }
    catch(err){
   // setErr(err.response.data);
    console.log(err);
    }
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
 <div style={{ width: '50%' }} className="f2" ><input type="text" name="familyName" placeholder="Nom" onChange={handleChange} /></div>
 <div style={{ width: '50%' }} className="f2"  ><input type="text"name="firstName" placeholder="Prénom" onChange={handleChange} /></div>

 </div >
 <div className="f1">
 <div style={{ width: '33%'}} className="f2" ><input type="text"  name="idEmployee" placeholder="ID" onChange={handleChange} /></div>
 <div  style={{ width: '33%'}} className="f2"><input   name="monthlySalary" placeholder="Salaire" onChange={handleChange} /></div>
 <div style={{ width: '33%'}} className="f2"><input  style={{ width: '240px' }}  type="date" name="dateStartJob" placeholder="date de recrutement" onChange={handleChange}/></div>

 </div>
 <div className="f1">
 
 <div style={{ width: '50%' }}  className="f2"><input type="text"  name="email" placeholder="address email" onChange={handleChange} /></div>
 <div style={{ width: '50%' }} className="f2"><input  type="text"  name="phoneNumber" placeholder="Phone Number" onChange={handleChange} /></div>
 </div>
 <div className="f1">
 
 <div  style={{ width: '100%' }} className="f2"><input type="text" name="bankAccount" placeholder="compte bancaire" onChange={handleChange} /></div>
 </div>
 <div className="f1">
 <div style={{ width: '33%' }} className="f2" >

 
      <div className="select-container">
        <select id="gender" name="gender" value={null} onChange={handleGenderChange}>
          <option value="">sexe</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
         
        </select>
       </div> 
      </div>
      <div style={{ width: '33%' }} className="f2" >
      <div className="select-container">
        <select id="sitfam" name="sitfam" value={null} onChange={handlesitfamChange}>
          <option value="">situation familialle</option>
          <option value="Marié">Marié</option>
          <option value="célibataire">célibataire</option>
         
        </select>
       </div> 
      </div>
      <div style={{ width: '33%' }} className="f2" >
      
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

    {selectedsitfam === 'Marié' &&(
 <div style={{ width: '200px',  marginLeft: '35%' }}className="f2"><input type="text"  name="numberOfChild" placeholder="nombre d'enfants" onChange={handleChange} /></div> )}

<div className="btns">
    <button className="cancel">Annuler</button> 
     <button className="add" onClick={handleClick}>Ajouter</button>
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
