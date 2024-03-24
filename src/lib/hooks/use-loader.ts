import { useCallback, useState } from 'react';
import { useTimeout } from 'usehooks-ts';

export default function useLoader(initialValue: boolean = true) {
    const [isLoading, setIsLoading] = useState(initialValue);
    const [loadingDelay, setLoadingDelay] = useState<number | null>(null);

    const stopLoadingImmediately = useCallback(() => setIsLoading(false), []);
    const stopLoadingWithDelay = useCallback((delay: number) => setLoadingDelay(delay), []);

    useTimeout(() => setIsLoading(false), loadingDelay);

    return {
        isLoading,
        setIsLoading,
        stopLoadingImmediately,
        stopLoadingWithDelay
    };
}
