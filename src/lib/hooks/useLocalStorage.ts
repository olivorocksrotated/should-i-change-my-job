import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useLocalStorage as useClientOnlyLocalStorage } from 'usehooks-ts';

export const useLocalStorage = <T>(
    key: string,
    initialValue: T,
): [T, Dispatch<SetStateAction<T>>] => {
    const [storedValue, setStoredValue] = useClientOnlyLocalStorage(
        key,
        initialValue,
    );
    const [firstRender, setFirstRender] = useState(false);

    useEffect(() => {
        setFirstRender(true);
    }, []);

    return [firstRender ? storedValue : initialValue, setStoredValue];
};
