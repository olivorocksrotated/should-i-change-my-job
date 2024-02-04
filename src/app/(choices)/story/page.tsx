'use client';

import { Button, Slider, Textarea } from '@nextui-org/react';

export default function StoryPage() {
    return (
        <article>
            <div className="mb-4">
                <Textarea
                    label="What's going on at work?"
                    placeholder="Write as much or as little as you want"
                    className="w-full"
                    variant="bordered"
                />
            </div>

            <div className="mb-4">
                <Textarea
                    label="What's great at work?"
                    className="w-full"
                    variant="bordered"
                />
            </div>

            <div className="mb-4">
                <Textarea
                    label="What sucks at work?"
                    className="w-full"
                    variant="bordered"
                />
            </div>

            <div className="mb-4 text-center">
                <Button
                    size="lg"
                    radius="full"
                    className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
                >
                    Use magic AI to get your answer
                </Button>
            </div>

            <div className="flex justify-center">
                <Slider
                    aria-label="Result"
                    size="lg"
                    color="success"
                    startContent={<h3>Nope</h3>}
                    endContent={<h3>Yes</h3>}
                    className="max-w-md"
                    defaultValue={0}
                    value={0}
                />
            </div>

        </article>
    );
}
