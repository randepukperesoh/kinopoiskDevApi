import { TypeInput } from '../TypeInput/TypeInput';
import { optionsGenre, optionsStatus, optinsАge } from './TypePageconst';
import { SubmitHandler, useForm } from "react-hook-form";
import {useParams} from 'react-router-dom';
import styles from './TypeForm.module.scss'

interface dataInterface {
    year: string;
    acter: string;
    genres: string;
    status: string;
    kpRating: string;
    ageRating: string;
    limit: string;
    type: string
}

export const TypeForm: React.FC<{setParams: Function}> = ({setParams}) => {

    const { register, handleSubmit} = useForm<dataInterface>({
        defaultValues: {
            year: '2000',
            genres:  'комедия',
            status: "completed",
            ageRating: "15",
            limit: '44',
            type: useParams().type,
        }
    });
    const submit: SubmitHandler<dataInterface> = (data) => setParams(data)
    let arr = [];
    for(let i=1960; i < 2030; i++){
        arr.push({value: i, label: i.toString()})
    }

    return(
        <form className={styles.filter} onSubmit={handleSubmit(submit)}>
            <TypeInput arr={arr} select ={register('year')} title='Год выхода'/>
            <TypeInput arr={optionsGenre} select={register("genres")} title='Жанр'/>
            <TypeInput arr={optionsStatus} select={register("status")} title='Статус релиза'/>
            <TypeInput arr={optinsАge} select={register('ageRating')} title='Возрастной рейтинг'/>
            <input className={styles.FilterBtn} type='submit' value={'Применить'}/>
        </form>
    )
}