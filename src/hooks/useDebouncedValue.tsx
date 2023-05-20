import { useEffect, useState } from 'react';

export const useDebouncedValue = ( input: string= '', time: number = 500 ) => {
    
    const [deboucedValue, setDeboucedValue] = useState(input);

    useEffect(() => {
        const timeout = setTimeout( () => {
            setDeboucedValue( input );
        }, time )
            
        // Clears Timeout
        return () => {
            clearTimeout( timeout );
        }
    }, [input])

    return deboucedValue;
}
