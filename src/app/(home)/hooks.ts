'use client';

import { useEffect } from 'react';
import { useIsClient, useSessionStorage } from 'usehooks-ts';

import useLoader from '@/lib/hooks/use-loader';

export function useFirstAppRunLoader() {
    const isClient = useIsClient();

    const [isFirstAppRun, setIsFirstAppRun] = useSessionStorage('isFirstAppRun', true, { initializeWithValue: false });
    const { isLoading, setIsLoading, stopLoadingWithDelay } = useLoader(false);

    useEffect(() => {
        if (!isClient) {
            return;
        }

        if (isFirstAppRun) {
            setIsLoading(true);
        }
    }, [isFirstAppRun, isClient, setIsLoading]);

    useEffect(() => {
        if (!isClient) {
            return;
        }

        setIsFirstAppRun(false);
        stopLoadingWithDelay(3000);
    }, [isClient, setIsFirstAppRun, stopLoadingWithDelay]);

    return { isFirstAppRunLoading: isLoading };
}
