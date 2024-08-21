'use client'

import { Comic } from '@/app/core/entities/Comic';
import styles from "./CharacterComic.module.css";
import { useFormattedDate } from '../../hooks/useFormattedDate';

export const CharacterComic = ({ comic }: { comic: Comic }) => {
    const date = new Date(comic.saleDate);
    const formattedDate = useFormattedDate(date, 'year');

    return (
        <>
            <img className={styles.image} src={comic.urlImage} alt={`${comic.title} image`}></img>
            <div className={styles.infoContainer}>
                <div className={styles.titleContainer}><h4>{comic.title}</h4></div>
                <span className={styles.date}>{formattedDate}</span>
            </div>
        </>
    )
}