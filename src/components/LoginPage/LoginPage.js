import { useState } from 'react'
import './LoginPage.css'
import { Link } from "react-router-dom"

export default function LoginPage() {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    async function auth() {
        fetch('http://localhost:8080/signin',{
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
        .then(res => res.json())
        .then(res => localStorage.setItem('token', res.accessToken))
        .finally(window.dispatchEvent(new Event("changeStorage")))
    }

    return(
        <div className="loginWrapper">
            <div className='inputWrapper'> <label>Email</label><input type="textbox" onChange={(e) => setEmail(e.target.value)}></input></div>
            <div className='inputWrapper'> <label>Пароль</label><input type="textbox" onChange={(e) => setPass(e.target.value)}></input></div>
            <button onClick={()=> auth()} className='loginBtn'>Войти</button>
            <div className='reg'>
                <Link to='../register'> Зарегистрироваться </Link>
            </div>
        </div>
    )
}

//Maski321!
//aboba@mail.ru

// .loginWrapper{
//     display: block;
//     width: 400px;
//     height: 600px;
//     margin: 50px auto 0;
// }
// .inputWrapper input{
//     margin: 0 0 20px 0;
//     width: 200px;
//     height: 20px;
// }
// .inputWrapper * {
//     display: block;
// }
// .loginBtn{
//     width: 208px;
//     height: 26px;
//     background: white;
//     border: 1px solid rgb(131, 131, 131);
// }