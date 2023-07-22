import { useState } from 'react'
import './RegisterPage.css'
import { Link, useNavigate} from "react-router-dom"

export default function RegisterPage() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')


    function auth() {
        fetch('http://localhost:8080/register',{
            method:'POST',
            headers:{
                'mode': "cors",
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                email: email,
                password: pass
            })
        })
        .then(res => console.log(res.json()))
        .finally(navigate('../login'))
       
    }
    return(
        <div className="loginWrapper">
            <div className='inputWrapper'> <label>Email</label><input type="textbox" onChange={(e) => setEmail(e.target.value)}></input></div>
            <div className='inputWrapper'> <label>Пароль</label><input type="textbox" onChange={(e) => setPass(e.target.value)}></input></div>
            <button onClick={()=> auth()} className='loginBtn'>Зарегистрироваться</button>
            
        </div>
    )
}
