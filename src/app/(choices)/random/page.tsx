'use client';

import { Button, Slider } from '@nextui-org/react';
import clsx from 'clsx';
import { useState } from 'react';
import { useInterval } from 'usehooks-ts';

interface Choice {
    name: string;
    value: number;
}

const defaultChoice: Choice = {
    name: 'No way, Jose',
    value: 0
};

const choices: (Choice & { rotationDelayClass: string })[] = [
    { ...defaultChoice, rotationDelayClass: 'animation-delay-[0s]' },
    { name: 'Not convinced', value: 25, rotationDelayClass: 'animation-delay-[2s]' },
    { name: 'Perhaps', value: 50, rotationDelayClass: 'animation-delay-[4s]' },
    { name: 'Probably', value: 75, rotationDelayClass: 'animation-delay-[6s]' },
    { name: 'Hell yeah', value: 100, rotationDelayClass: 'animation-delay-[8s]' }
];

const pickRandomChoice = (): Choice => {
    const randomChoiceNumber = Math.floor(Math.random() * choices.length);

    return choices[randomChoiceNumber];
};

const title = 'Should you change your job?';

export default function RandomChoicePage() {
    const [buttonClicked, setButtonClicked] = useState(false);
    const [choice, setChoice] = useState(defaultChoice);

    const [animatedTitle, setAnimatedTitle] = useState(title.split('').map((char) => ({
        char,
        isShowing: false
    })));

    const [updateInterval, setUpdateInterval] = useState<number | null>(50);

    const onTick = () => {
        const isEveryCharFilled = animatedTitle.every(({ isShowing }) => isShowing);
        if (isEveryCharFilled) {
            setUpdateInterval(() => null);
        }

        const updatedTitle = structuredClone(animatedTitle);
        for (const entry of updatedTitle) {
            if (!entry.isShowing) {
                entry.isShowing = true;
                break;
            }
        }

        setAnimatedTitle(() => updatedTitle);
    };

    useInterval(onTick, updateInterval);

    const onFindOut = () => {
        setChoice(pickRandomChoice());
        setButtonClicked(true);
    };

    return (
        <main className="flex flex-col items-center gap-12 p-8">
            <header className="flex w-full items-center justify-between">
                <h1 className="text-center text-4xl">
                    {animatedTitle.map(({ char, isShowing }, index) => (
                        <span
                            key={index}
                            className={clsx(
                                'font-light transition-[all] duration-500 ease-in',
                                { 'text-indigo-300': isShowing }
                            )}
                        >
                            {char}
                        </span>
                    ))}
                </h1>
            </header>
            <Button
                size="lg"
                radius="full"
                className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
                onClick={onFindOut}
            >
                Find out!
            </Button>

            <div className="relative mb-8 h-6 w-40 text-red-500">
                {choices.map(({ name, rotationDelayClass }, index) => (
                    <span key={index} className={`absolute inset-x-0 top-0 mx-auto w-40 animate-rotate overflow-hidden text-center opacity-0 ${rotationDelayClass}`}>
                        {name}
                    </span>
                ))}
            </div>

            {buttonClicked && choice ?
                <div className="flex w-full flex-col items-center gap-10">
                    <h2 className="text-2xl">{choice.name}</h2>
                    <Slider
                        aria-label="Result"
                        size="lg"
                        color="success"
                        startContent={<h3>Nope</h3>}
                        endContent={<h3>Yes</h3>}
                        className="max-w-md"
                        defaultValue={0}
                        value={choice.value}
                    />
                    <h4>Take a couple of seconds to reflect on how you feel about this answer</h4>
                </div> : null}
        </main>
    );
}
