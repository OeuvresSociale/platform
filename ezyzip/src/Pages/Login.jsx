import "./login.css"
import React,{useState} from "react"
import axios from 'axios';
export const Login = () => {
    const [email, setEmail]=useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
       console.log(email);
    }
    /** */
    const [inputs, setInputs]=useState({
      email:"",
      password:"",
       
    });
    const [err, setErr]=useState(null);

    const handleChange = (e) =>{
      setInputs((prev)=>({...prev,[e.target.name]:e.target.value}));
    };
    const handleLogin = async(e) => { try{
      e.preventDefault();//not refreshing the page 
      await axios.post(" http://localhost:8000/api/login",inputs);
      console.log("it work");
    }catch(err){
  setErr(err.response.data)
    }
      
    };
    return(
        <div className="wrapper">
          <div className="blue-section">
            <img src="./assets/logo.png" alt="logo" className="logo" />
          </div>
            <form onSubmit={handleSubmit}>
              <h1>Belink</h1>  
                <div className="input-box">
                   <input type="email" name="email" onChange={handleChange} placeholder="youremail@esi-sba.dz" id="email"  required></input>
                 </div>
                 <div className="input-box">
                    <input type="password" name="password" onChange={handleChange} placeholder="********" id="password" ></input>
                  </div>
                  <div className="forget-pass">
                    <a href="#"> Forgot password? </a>
                  </div>
                  {err& err}
                 <button type="submit" onClick={handleLogin}> Log In </button> 
            </form>
        </div>
    )
}
