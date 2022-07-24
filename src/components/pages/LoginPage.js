import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

import '../../App.css'

export default function SignInPage() {

    const [data, setData] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState("");


    const handleChange = ({currentTarget:input}) => {
        setData({...data, [input.name]:input.value});
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            const url = "http://localhost:8080/api/auth";
            const {data:res} = await axios.post(url, data);
            localStorage.setItem("token", res.data);
            window.location = "/"
        }catch(error){
            if (error.response && 
                error.response.status >= 400 &&
                error.response.status <= 500
                ){
                    setError(error.response.data.message)
                }
        }
    }


    return (
        <div className="text-center m-5-auto">
            <h2>Sign in to us</h2>
            <form onSubmit={handleSubmit}>
                <p>
                    <label>email address</label><br/>
                    <input type="email" name="email" placeholder="Email Address" onChange={handleChange}  value={data.email} required />
                </p>
                <p>
                    <label>Password</label>
                    <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                    <br/>
                    <input type="password" name="password" placeholder="Password" onChange={handleChange}  value={data.password} required />
                </p>
                <p>
                    {error && <div>{error}</div>}
                    <button id="sub_btn" type="submit">Login</button>
                </p>
            </form>
            <footer>
                <p>New to here? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}
