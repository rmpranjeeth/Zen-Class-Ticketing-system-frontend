import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

import '../../App.css'

export default function SignUpPage() {

    const [data, setData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const [error, setError] = useState("")
    const navigate = useNavigate();


    const handleChange = ({currentTarget:input}) => {
        setData({...data, [input.name]:input.value});
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            const url = "http://localhost:8080/api/users";
            const {data:res} = await axios.post(url, data);
            navigate("/login");
            console.log(res.message);
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
            <h2>Join us</h2>
            <h5>Create your personal account</h5>
            <form onSubmit={handleSubmit}>
                <p>
                    <label>Username</label><br/>
                    <input type="text" name="username" placeholder="Username" onChange={handleChange}  value={data.username} required />
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input type="email" name="email" placeholder="Email Address" onChange={handleChange}  value={data.email} required />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" placeholder="Password" onChange={handleChange}  value={data.password} required/>
                </p>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>
                <p>
                    {error && <div>{error}</div>}
                    <button id="sub_btn" type="submit">Register</button>
                </p>
            </form>
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )

}
