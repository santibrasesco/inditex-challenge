'use client'

import { useEffect } from "react";
import { setFilterSearch } from "../../context/characterActions";
import { useCharacterDispatch, useCharacterState } from "../../context/CharacterContext";
import { InputSearch } from "../common/InputSearch";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const CharacterFilterSearch = ({ filter }: { filter: string }) => {
    const { filterByFavs, filterSearch } = useCharacterState();
    const dispatch = useCharacterDispatch();
    const { replace } = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();

    useEffect(() => {
        if (filter !== filterSearch) {
            dispatch(setFilterSearch(filter));
        }
    }, [filter])

    const handleSearch = (value: string) => {
        if (!filterByFavs) {
            const params = new URLSearchParams(searchParams);
            if (value) {
                params.set('q', value);
            } else {
                params.delete('q');
            }
            replace(`${pathname}?${params.toString()}`);
        };

        dispatch(setFilterSearch(value));
    }

    return (
        <InputSearch
            value={filterSearch}
            placeholder="SEARCH A CHARACTER.."
            onChange={handleSearch}
        />
    )
}