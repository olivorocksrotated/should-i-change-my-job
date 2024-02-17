'use client';

import { Card, CardBody, CardHeader } from '@nextui-org/react';
import { useLiveQuery } from 'dexie-react-hooks';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
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
                        <article className="p-8">
                            <section className="mb-10">
                                <h1 className="mb-2 text-4xl font-extralight">How quickly do you</h1>
                                <h2 className="text-4xl">Want to make a decision?</h2>
                            </section>

                            <section className="mb-12">
                                <Link href="/choices/random">
                                    <Card
                                        className="w-full p-6"
                                        classNames={{ base: 'overflow-visible', body: 'overflow-visible' }}
                                        shadow="sm"
                                        isPressable
                                        isHoverable
                                    >
                                        <CardHeader className="mb-2 p-0 text-2xl font-extralight">
                                            Fast and furious
                                            <Image
                                                className="absolute -right-6 -top-12"
                                                priority={true}
                                                src="/fast.svg"
                                                alt="Fast decision"
                                                width={150}
                                                height={150}
                                            />
                                        </CardHeader>
                                        <CardBody className="relative p-0">
                                            <p className="text-sm">5 minutes</p>
                                        </CardBody>
                                    </Card>
                                </Link>
                            </section>

                            <section className="mb-12">
                                <Link href="/choices/story">
                                    <Card
                                        className="w-full p-6"
                                        classNames={{ base: 'overflow-visible', body: 'overflow-visible' }}
                                        shadow="sm"
                                        isPressable
                                        isHoverable
                                    >
                                        <CardHeader className="mb-2 p-0 text-2xl font-extralight">
                                            Somehow slowly
                                            <Image
                                                className="absolute -right-6 -top-12"
                                                priority={true}
                                                src="/story.svg"
                                                alt="Story decision"
                                                width={150}
                                                height={150}
                                            />
                                        </CardHeader>
                                        <CardBody className="relative p-0">
                                            <p className="text-sm">5 minutes</p>
                                        </CardBody>
                                    </Card>
                                </Link>
                            </section>

                            <section>
                                <Link href="/choices/journal">
                                    <Card
                                        className="w-full p-6"
                                        classNames={{ base: 'overflow-visible', body: 'overflow-visible' }}
                                        shadow="sm"
                                        isPressable
                                        isHoverable
                                    >
                                        <CardHeader className="mb-2 p-0 text-2xl font-extralight">
                                             Slowly and safely
                                            <Image
                                                className="absolute -right-6 -top-8"
                                                priority={true}
                                                src="/slowly.svg"
                                                alt="Slow decision"
                                                width={150}
                                                height={150}
                                            />
                                        </CardHeader>
                                        <CardBody className="relative p-0">
                                            <p className="text-sm">5 minutes</p>
                                        </CardBody>
                                    </Card>
                                </Link>
                            </section>
                        </article>)}
            </AnimatePresence>
        </main>
    );
}
