'use client';

import { Button } from '@nextui-org/react';
import { useLiveQuery } from 'dexie-react-hooks';
import { AnimatePresence, motion } from 'framer-motion';
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
            <AnimatePresence>
                {isLoading ? (
                    <motion.div
                        key="loader"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Loader />
                    </motion.div>) :

                    user?.showOnboarding ? <Onboarding user={user} /> : (
                        <article>
                            <section className="p-8">
                                <h1 className="mb-2 text-4xl font-extralight">How quickly do you</h1>
                                <h2 className="text-4xl">Want to make a decision?</h2>
                            </section>

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
                        </article>)}
            </AnimatePresence>
        </main>
    );
}
