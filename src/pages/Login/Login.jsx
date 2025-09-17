import { React, useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import {login, signUp} from '../../firebase'

const Login = () => {

    const [signState, setSignState] = useState('Sign In')
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const user_auth = async (event)=>{
        event.preventDefault()
        if(signState === "Sign In"){
            await signUp(name, email, password)
        }else{
            await login(email, password);
        }
    }

    return (
        <div className='login'>
            <img className="login-logo" src={logo} alt="" />
            <div className="login-form">
                <h1>{signState}</h1>
                <form>
                    {signState === "Sign In" && 
                    <input type="text" placeholder='Your name' value={name} onChange={(e)=>{setName(e.target.value)}} />}
                    <input type="email" placeholder='Your email' onChange={(e)=>{setEmail(e.target.value)}}/>
                    <input type="password" placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}}/>
                    <button onClick={user_auth} type="submit">{signState}</button>
                    <div className="form-help">
                        <div className="remember">
                            <input type="checkbox" />
                            <label htmlFor="">Remember Me</label>
                        </div>
                        <p>Need Help ?</p>
                    </div>
                </form>
                <div className="form-switch">
                    {signState === 'Sign In' ?
                        <p>Already have an account ? 
                            <span onClick={() => setSignState('Sign Up')}>Sign Up Now</span>
                        </p> :
                        <p>New to Netflix ? 
                            <span onClick={() => setSignState('Sign In')}>Sign In Now</span>
                        </p>
                    }
                </div>
            </div>
        </div>
    )
}

export default Login