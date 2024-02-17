import { useCallback, useState } from 'react';
import { useTimeout } from 'usehooks-ts';

export default function useLoader() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadingDelay, setLoadingDelay] = useState<number | null>(null);

    const stopLoadingImmediately = useCallback(() => setIsLoading(false), []);
    const stopLoadingWithDelay = useCallback((delay: number) => setLoadingDelay(delay), []);

    useTimeout(() => setIsLoading(false), loadingDelay);

    return { isLoading, stopLoadingImmediately, stopLoadingWithDelay };
}
