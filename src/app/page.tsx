'use client';

import { Button } from '@nextui-org/react';
import { useLiveQuery } from 'dexie-react-hooks';
import Link from 'next/link';
import { useEffect } from 'react';

import { getUser } from '@/lib/database/queries';
import useLoader from '@/lib/hooks/use-loader';

import Loader from './components/loader';
import Onboarding from './components/onboarding';

export default function HomePage() {
    const user = useLiveQuery(getUser);
    const { isLoading, stopLoadingWithDelay } = useLoader();

    useEffect(() => {
        if (!user) {
            return;
        }
        stopLoadingWithDelay(3000);
    }, [user, stopLoadingWithDelay]);

    return (
        <main className="relative">
            {isLoading ? <Loader /> :

            user?.showOnboarding ? <Onboarding user={user} /> : (
                <>
                    <h1 className="mb-6 text-xl">How quickly do you want to make a decision?</h1>

                    <article className="mb-4">
                        <h2 className="mb-1">Very quickly, without much thought</h2>
                        <Link href="/random"><Button>Random choice</Button></Link>
                    </article>

                    <article className="mb-4">
                        <h2 className="mb-1">Somehow slowly, with some reflection</h2>
                        <Link href="/story"><Button>Story</Button></Link>
                    </article>

                    <article className="mb-4">
                        <h2 className="mb-1">Slowly and safely</h2>
                        <Link href="/journal"><Button>Journal</Button></Link>
                    </article>
                </>)}
        </main>
    );
}
