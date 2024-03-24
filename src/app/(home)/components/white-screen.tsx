'use client';

import { useState } from 'react';
import { useTimeout } from 'usehooks-ts';

import { iphone14ProMaxSize } from '@/app/constants/dev-mobile-size';

export default function WhiteScreen() {
    const [isShowing, setIsShowing] = useState(true);
    useTimeout(() => setIsShowing(false), 100);

    return isShowing ? (
        <article className={`${iphone14ProMaxSize} absolute left-0 top-0 z-20 bg-white`}></article>
    ) : null;
}
