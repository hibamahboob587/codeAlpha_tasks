import React, { useState } from 'react';
import { useNavigate ,Link} from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate();
    const [input,setInput] = useState({
        email : "",
        password : "",
    });

    const handleLogin = (e)=>{
        e.preventDefault();
        const loggeduser = JSON.parse(localStorage.getItem("user"));
        if(input.email== loggeduser.email && input.password == loggeduser.password)
        {
            localStorage.setItem("loggedin",true);
            navigate("/");

        }else{
            alert("wrong Email or password");
        }

    }

  return (
    <>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ width: '400px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f9f9f9' }}>
        <div id="create-acct" style={{ textAlign: 'center', marginBottom: '20px' }}>
          <h1 style={{ fontSize: '24px', margin: '0' }}>Sign in</h1>
        </div>
        <form onSubmit={handleLogin} style={{ marginBottom: '20px' }}>
          <input name='email' value={input.email} onChange={(e)=>setInput({...input,[e.target.name]: e.target.value,})} id="" type="email" placeholder="Email *" style={{ padding: '10px', width: '90%', marginBottom: '10px' }} required />
          <input name='password' value={input.password} onChange={(e)=>setInput({...input,[e.target.name]: e.target.value,})} id="password-signup" type="password" placeholder="Password *" style={{ padding: '10px', width: '90%', marginBottom: '10px' }} required />
          <button id="create-acct-btn" type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', width: '50%' }}>Login</button>
          <p className='text-center'>
            <Link to='/register'>Register</Link>
          </p>
        </form>
      </div>
    </div>      
    </>
  )
}

export default Login