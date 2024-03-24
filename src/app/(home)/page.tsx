'use client';

import { AnimatePresence } from 'framer-motion';

import { useValues } from '@/lib/database/store';

import Choices from './components/choices';
import Loader from './components/loader';
import Onboarding from './components/onboarding';
import WhiteScreen from './components/white-screen';
import { useFirstAppRunLoader } from './hooks';

export default function HomePage() {
    const appSettings = useValues();
    const { isFirstAppRunLoading } = useFirstAppRunLoader();

    return (
        <main className="relative">
            <AnimatePresence>
                <WhiteScreen key="white-screen" />
                {isFirstAppRunLoading ? <Loader key="loader" /> : null}
                {appSettings?.showOnboarding ? <Onboarding key="onboarding" /> : <Choices key="choices" />}
            </AnimatePresence>
        </main>
    );
}
