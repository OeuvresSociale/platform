import "./login.css"
import React,{useState} from "react"
export const Login = () => {
    const [email, setEmail]=useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return(
        <div className="wrapper">
          <div className="blue-section">
            <img src="./Assets/logo.png" alt="logo" className="logo" />
          </div>
            <form onSubmit={handleSubmit}>
              <h1>Belink</h1>  
                <div className="input-box">
                   <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder="youremail@esi-sba.dz" id="email" name="email" required></input>
                 </div>
                 <div className="input-box">
                    <input type="password" onChange={(e)=>setPass(e.target.value)} value={pass} placeholder="********" id="password" name="password"></input>
                  </div>
                  <div className="forget-pass">
                    <a href="#"> Forgot password? </a>
                  </div>
                 <button type="submit"> Log In </button> 
            </form>
        </div>
    )
}
