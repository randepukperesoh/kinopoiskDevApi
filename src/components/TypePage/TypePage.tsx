import React, { useState } from 'react';
import styles from './TypePage.module.scss';
import {useGetFilterTitleQuery} from '../../Api/Api';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { TypeForm } from '../TypeForm/TypeForm';
import {useParams} from 'react-router-dom';
import { GridOfTitles } from '../GridOfTitles/GridOfTitles';
import { ErorrPage } from '../ErorrPage/ErorrPage';

    // youTrack jira 
interface dataInterface {
    year: string;
    genres: string;
    status: string;
    ageRating: string;
    limit: string;
    type: string | undefined
}

const TypePage: React.FC = () => {

    const [ params, setParams ] = useState<dataInterface>({
        year: '2000',
        genres: 'комедия',
        status: 'completed',
        ageRating: '14',
        limit: '64',
        type: useParams().type,
    });

    const { data, isError, isFetching } = useGetFilterTitleQuery(params);
    
      
    return(
        <div className={styles.typePage}>
            <TypeForm setParams={setParams}/>
            <div className={styles.filteredTitle}>
                {isError && <ErorrPage/>}
                {isFetching && <div className={styles.loaderCenter}><span className={styles.loader}></span></div> }
                {data && <GridOfTitles data={data.docs}/>}
            </div>
        </div>
    )
}

export default TypePage;