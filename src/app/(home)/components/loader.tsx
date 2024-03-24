'use client';

import { useLottie } from 'lottie-react';
import { useState } from 'react';
import { useInterval } from 'usehooks-ts';

import { findRandom } from '@/lib/array/find-random';

import animationData from '../../../../public/loader-animation.json';
import { iphone14ProMaxSize } from '../../constants/dev-mobile-size';

const options = ['Loading AI', 'Reading your mind', 'Starting engine'];
export default function Loader() {
    const { View } = useLottie({ animationData, loop: true });
    const [text, setText] = useState(options[0]);
    useInterval(() => setText(findRandom(options)), 1500);

    return (
        <article className={`${iphone14ProMaxSize} absolute left-0 top-0 z-20 flex flex-col bg-white`}>
            <section className="p-8">
                <h1 className="mb-2 text-4xl font-extralight">Should you</h1>
                <h2 className="text-4xl">Quit your job?</h2>
            </section>
            <section>{View}</section>
            <section className="p-8 text-center">
                <p className="text-3xl font-extralight">{text}...</p>
            </section>
        </article>
    );
}
