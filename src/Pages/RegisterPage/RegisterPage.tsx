import styles from './RegisterPage.module.scss'
import { Link, useNavigate} from "react-router-dom"
import { SubmitHandler, useForm } from "react-hook-form";

interface RegisterInterface {
    email: string,
    password: string
}

export const RegisterPage: React.FC = () => {
    const navigate = useNavigate()

    const { register, handleSubmit } = useForm<RegisterInterface>({
        defaultValues: {
           email: '',
           password: '' 
        }
    })

    const submit: SubmitHandler<RegisterInterface> = (data) => auth(data);

    async function auth(data: RegisterInterface) {
        fetch('http://localhost:8080/register',{
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
        .then(res => console.log(res.json()))
        .finally(() => navigate('../login'))
    }

    return(
        <form onSubmit={handleSubmit(submit)} className={styles.loginWrapper}>
            <div className={styles.inputWrapper}>
                <label>Email</label>
                <input type="textbox" {...register('email')} />
            </div>
            <div className={styles.inputWrapper}>
                <label>Пароль</label>
                <input type="textbox" {...register('password')}/>
            </div>
            <input  className={styles.loginBtn} type='submit' value={'Зарегистрироваться'}/>
        </form>
    )
}
