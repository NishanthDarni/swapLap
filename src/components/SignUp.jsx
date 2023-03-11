import React from 'react'
import { Link } from 'react-router-dom';
import '../css/signUp.css'
import '../css/link.css'
import {useState} from 'react'
import axios from 'axios'
import PersonIcon from '@mui/icons-material/Person';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
function SignUp() {
    document.body.style.backgroundColor="#3c00a0"
    const [name,setName]=useState('')
    const [mobile,setMobile]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const handleSubmit=()=>
    {
        console.log('Hello world')
        const uri='http://localhost/swapLap/backend/connect.php'
        let fdata=new FormData()
        fdata.append('name',name)
        fdata.append('mobile',mobile)
        fdata.append('email',email)
        fdata.append('password',password)
        axios.post(uri,fdata).then(response=>alert(response.data)).catch(error=>alert(error))
    }
  return (
    <div className="form-box">
            <h1>Sign Up</h1>
            <form>
                <div className="input-group">
                    <div className="input-field">
                        <PersonIcon/>
                        <input className='input' type="text" id="name" name="name" placeholder="Name" autoComplete="off" value={name} onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div className="input-field">
                        <LocalPhoneIcon/>
                        <input type="number" className='input' autoComplete="off" name="mobileNum" id="mobileNum" placeholder="mobile number" maxLength="10" value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
                    </div>
                    <div className="input-field">
                        <EmailIcon/>
                        <input type="email" className='input' autoComplete="off" name="email" id="emailSign" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className="input-field">
                        <LockIcon/>
                        <input type="password" className='input' name="pswd" id="pswrd" placeholder="Password" maxLength="20" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <p>Forgot Password? <a href="#">Click Here!</a></p>
                </div>
                <div className="btn-field">
                <button id="submit" type='submit' onClick={handleSubmit}>Submit</button>
                </div>
            </form>
            <p>
                Already have an account?
                <Link to='../login' style={{textDecoration:'none'}}>Login</Link>
            </p>
        </div>
  )
}

export default SignUp;