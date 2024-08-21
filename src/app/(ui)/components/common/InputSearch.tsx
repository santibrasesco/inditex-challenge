'use client'

import { useEffect, useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";

interface Props {
    value: string,
    placeholder: string,
    onChange: (value: string) => void,
    delay?: number
}

export const InputSearch = ({ value, placeholder, onChange, delay }: Props) => {
    const [searchValue, setSearchValue] = useState(value);
    const debouncedValue = useDebounce(searchValue, delay);

    useEffect(() => {
        onChange(debouncedValue);
    }, [debouncedValue])

    useEffect(() => {
        setSearchValue(value);
    }, [value])

    return (
        <input
            placeholder={placeholder || ''}
            value={searchValue}
            onChange={evt => setSearchValue(evt.target.value)}
        />
    )
}