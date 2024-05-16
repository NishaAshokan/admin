"use client"
import React, {useState} from 'react';
//import '../auth.css';
import { ToastContainer, toast } from 'react-toastify';


const SigninPage = () => {

 const [email, setEmail]= useState('');
 
 const [password , setPassword]= useState('');
 

const handleLogin = async() => {
    try{
    const response = await fetch(process.env.NEXT_PUBLIC_BACKEND_API + '/admin/login', {
        method: 'POST',
        headers : {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify({email, password}),
        credentials: 'include'
        }
    )
    
    if(response.ok){
        const data = await response.json();
        console.log('Admin login Successful' , data);

        toast.success('login succesfully', {
            position : "top-center",
            
        });
window.location.href = '/pages/addworkout';

    }
    else{
        console.error('login registeration failed', response.statusText);
toast.error('login failed', {
    position : "top-center",
});
    }
    }
    catch (error){
        console.error("Error on registeration", error);
        toast.error("error on registeration");
    }
}


  return (
    <div className='formpage'>
       

<input type="text"
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)} />
<input type="text"
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)} />


<button onClick={handleLogin}> Sign up</button>

    </div>
  )
}

export default SigninPage;