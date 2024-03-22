'use client';

import { Button } from '@nextui-org/react';
import Image from 'next/image';
import { MouseEvent } from 'react';
import { HiOutlineArrowLongLeft, HiOutlineArrowLongRight } from 'react-icons/hi2';
import { MdDone } from 'react-icons/md';
import { useStep } from 'usehooks-ts';

import { useSetPartialValuesCallback } from '@/lib/database/store';

import { iphone14ProMaxSize } from '../../constants/dev-mobile-size';

export default function Onboarding() {
    const [step, operations] = useStep(3);
    const { goToNextStep, goToPrevStep } = operations;

    const setIsOnboardingDone = useSetPartialValuesCallback<MouseEvent>(() => ({ showOnboarding: false }));

    return (
        <article className={`${iphone14ProMaxSize} absolute left-0 top-0 z-10 flex flex-col`}>
            {step === 1 ? (
                <>
                    <section className="p-8">
                        <h1 className="mb-2 text-4xl font-extralight">Should you</h1>
                        <h2 className="text-4xl">Quit your job?</h2>
                    </section>
                    <section className="relative size-full">
                        <Image priority={true} src="/onboarding-1.svg" alt="Hello onboarding" fill={true} />
                    </section>
                    <section className="mt-auto p-8">
                        <p className="text-3xl font-extralight">Damn hard to answer</p>
                        <p className="mb-6 text-3xl">But don&apos;t panic!</p>
                        <p className="mb-6 text-3xl font-light">We are here to help</p>
                        <Button
                            fullWidth={true}
                            size="lg"
                            variant="faded"
                            className="h-16 text-2xl font-light dark"
                            onClick={goToNextStep}
                        >
                            Get started <HiOutlineArrowLongRight size={40} />
                        </Button>
                    </section>
                </>
            ) : null}
            {step === 2 ? (
                <>
                    <section className="p-8">
                        <h1 className="mb-2 text-4xl font-extralight">How can you</h1>
                        <h2 className="text-4xl">Find an answer?</h2>
                    </section>
                    <section className="relative size-full">
                        <Image priority={true} src="/onboarding-2.svg" alt="Question onboarding" fill={true} />
                    </section>
                    <section className="mt-auto p-8">
                        <p className="text-3xl font-extralight">We will ask questions</p>
                        <p className="mb-6 text-3xl">That will help you decide</p>

                        <div className="flex items-center justify-between">
                            <Button
                                size="sm"
                                variant="bordered"
                                className="h-16 text-neutral-700"
                                onClick={goToPrevStep}
                            >
                                <HiOutlineArrowLongLeft size={40} />
                            </Button>
                            <Button
                                size="lg"
                                variant="faded"
                                className="h-16 dark"
                                onClick={goToNextStep}
                            >
                                <HiOutlineArrowLongRight size={40} />
                            </Button>
                        </div>
                    </section>
                </>
            ) : null}
            {step === 3 ? (
                <>
                    <section className="p-8">
                        <h1 className="mb-2 text-4xl font-extralight">Or you can</h1>
                        <h2 className="text-4xl">Spin the wheel</h2>
                    </section>
                    <section className="relative size-full">
                        <Image priority={true} src="/onboarding-3.svg" alt="Hello onboarding" fill={true} />
                    </section>
                    <section className="mt-auto p-8">
                        <p className="text-3xl font-extralight">And you&apos;ll get</p>
                        <p className="mb-6 text-3xl">A random answer</p>

                        <div className="flex items-center justify-between">
                            <Button
                                size="sm"
                                variant="bordered"
                                className="h-16 text-neutral-700"
                                onClick={goToPrevStep}
                            >
                                <HiOutlineArrowLongLeft size={40} />
                            </Button>
                            <Button
                                size="lg"
                                variant="faded"
                                className="h-16 text-2xl font-light dark"
                                onClick={setIsOnboardingDone}
                            >
                            Let&apos;s go <MdDone />
                            </Button>
                        </div>
                    </section>
                </>
            ) : null}
        </article>
    );
}
