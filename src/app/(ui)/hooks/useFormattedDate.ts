import { useState, useEffect } from 'react';

export const useFormattedDate = (date: Date | number, format: string) => {
    const [formattedDate, setFormattedDate] = useState('');

    useEffect(() => {
        if (date instanceof Date) {
            let formattedValue = '';

            switch (format) {
                case 'year':
                    formattedValue = date.getFullYear().toString();
                    break;
                default:
                    formattedValue = 'Invalid Format';
                    break;
            }

            setFormattedDate(formattedValue);
        } else {
            setFormattedDate('Invalid Date');
        }
    }, [date, format]);

    return formattedDate;
};
