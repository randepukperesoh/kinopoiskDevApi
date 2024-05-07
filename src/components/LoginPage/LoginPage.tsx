import React from 'react'
import styles from './LoginPage.module.scss';
import { Link, useNavigate } from "react-router-dom"
import { SubmitHandler, useForm } from "react-hook-form";

interface LoginInterface {
    email: string,
    password: string
}
export const LoginPage: React.FC = () => {
    const navigate = useNavigate()

    async function auth(data: LoginInterface) {
        fetch('http://localhost:8080/signin',{
            method:'POST',
            headers:{
                'mode': "cors",
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                email: data.email,
                password: data.password
            })
        })
        .then(res => res.json())
        .then(res => localStorage.setItem('token', res.accessToken))
        .then(() => window.dispatchEvent(new Event('storage')))
        .finally(() => navigate('../'))
    }

    const { register, handleSubmit } = useForm<LoginInterface>({
        defaultValues: {
           email: '',
           password: '' 
        }
    })

    const submit: SubmitHandler<LoginInterface> = (data) => auth(data);

    return(
        <>
            <form className={styles.loginWrapper} onSubmit={handleSubmit(submit)}>
                <div className={styles.inputWrapper}>
                    <label>Email</label>
                    <input {...register('email')} type="textbox"/>
                </div>
                <div className={styles.inputWrapper}>
                    <label>Пароль</label>
                    <input {...register('password')} type="textbox" />
                </div>
                <input className={styles.loginBtn} type='submit' value={'Войти'}/>
                <div className={styles.reg}>
                    <Link to='../register'> Зарегистрироваться </Link>
                </div>
            </form>
            
        </>
    )
}

//Maski321!
//aboba@mail.ru
