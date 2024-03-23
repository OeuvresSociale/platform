import React ,{useState}from "react";
import './Motif.css';


const Motif=({closeMotif , handleRedClick})=>{

    const handlesendClick=()=>{
        handleRedClick();
        closeMotif(false)
      
       };

    
return(
    <div className="motifwrapper">
<div  className="motif">
   <p>Motif de refus</p>
   <input type='text' placeholder='motif de refus'/>
   <div className="motifbtns">
      <button onClick={  ()=> closeMotif(false)}  className="motifcancel">Annuler</button>
       <button onClick={ handlesendClick}  className="motifenvoyer">Envoyer</button>

    </div>

    </div>
</div>
);



};
export default Motif;