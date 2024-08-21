'use client'

import styles from "./Header.module.css";
import { useCharacterDispatch, useCharacterState } from "@/app/(ui)/context/CharacterContext";
import { Heart } from "../icons/Heart";
import { Logo } from "../icons/Logo";
import { usePathname, useRouter } from "next/navigation";
import { filterByFavs, setFilterSearch } from "../../context/characterActions";

export const Header = () => {
    const { charactersFavorites } = useCharacterState();
    const dispatch = useCharacterDispatch();
    const { replace } = useRouter();

    const goToSearch = (filterByFav: boolean) => {
        dispatch(filterByFavs(filterByFav));
        dispatch(setFilterSearch(''));

        if (filterByFav) {
            replace(`/characters/favorites`);
        } else {
            replace(`/characters`);
        }
    }

    return (
        <div className={styles.headerContainer}>
            <Logo onClick={() => goToSearch(false)} />
            <div className={styles.contentFav} onClick={() => goToSearch(true)}>
                <Heart width={25} height={25} />
                <span data-testid="count-fav">{charactersFavorites.length}</span>
            </div>
        </div>
    )
}