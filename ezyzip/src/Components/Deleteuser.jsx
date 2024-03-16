import React , {useState} from "react";
import './Deleteuser.css';


const Deleteuser =({closeDelete})=>{






return (
    <div className="wrapper">
<div className="btnsd">
<button className="b1"   onClick={  ()=> closeDelete(false)}  >  Annuler </button>
 <button className="b2"    onClick={  ()=> closeDelete(false)}  > Supprimer </button>
</div>

</div>


)





}
export default Deleteuser;