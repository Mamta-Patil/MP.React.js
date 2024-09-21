import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import Loader from "../Components/Loader"
function Login() {

  const [email,setemil]=useState("")
  const [password,setpassword]=useState("")
  const {loginuser}=useContext(AuthContext)
  const [loading,setloading]=useState(false)
const Navigate=useNavigate()
  const handlesubmit=(e)=>{
    e.preventDefault();
    console.log(email,password)
    setloading(true)
    axios.post("https://reqres.in/api/login",{email,password})
    .then((res)=>{
      setloading(false)
      loginuser(res.data.token)
      console.log(res.data.token)
      Navigate("/dashboard")
    })
    .catch((err)=>console.log(err))
  }


  return loading ? <Loader /> : (
    <div style={{border:"1px solid black", width:"30%",margin:"10% auto",backgroundColor:"black",borderRadius:"20px"}}>
      <form data-testid="login-form" onSubmit={(e)=>handlesubmit(e)} style={{paddingLeft:"90px",paddingTop:"20px",paddingBottom:"20px"}}>
        <div>
          <label style={{color:"#fff",paddingTop:"20px"}}>
            Email <br />
            <input data-testid="email-input" value={email} onChange={(e)=>setemil(e.target.value)} type="email" placeholder="email" />
          </label>
        </div>
        <div>
          <label style={{color:"#fff"}}>
            Password  <br />
            <input
              data-testid="password-input"
              type="password" value={password} onChange={(e)=>setpassword(e.target.value)}
              placeholder="password"
            />
          </label>
        </div> 
        <div>
          <input data-testid="form-submit" type="submit" value="SUBMIT" />
        </div> <br />
      <Link to="/" style={{color:"#fff",textDecoration:"none"}} >Go Back</Link>
      </form>
      <div>
      </div>
    </div>
  );
}
export default Login;
