'use client'

import { Comic } from '@/app/core/entities/Comic';
import styles from "./CharacterComic.module.css";
import { useFormattedDate } from '../../hooks/useFormattedDate';
import Image from 'next/image';

export const CharacterComic = ({ comic }: { comic: Comic }) => {
    const date = new Date(comic.saleDate);
    const formattedDate = useFormattedDate(date, 'year');

    return (
        <>
            <Image
                src={comic.urlImage}
                alt={`${comic.title} image`}
                className={styles.image}
                width={180}
                height={268}
            />
            <div className={styles.infoContainer}>
                <div className={styles.titleContainer}><h4>{comic.title}</h4></div>
                <span className={styles.date}>{formattedDate}</span>
            </div>
        </>
    )
}