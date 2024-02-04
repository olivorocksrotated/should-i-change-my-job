'use client';

import { Button, Slider, Textarea } from '@nextui-org/react';
import { useForm } from 'react-hook-form';

interface Story {
    summary: string;
    great: string;
    sucks: string;
}

export default function StoryPage() {
    const { register, handleSubmit, formState: { errors } } = useForm<Story>();
    const onSubmit = (data: any) => console.log({ data, errors });

    return (
        <article>
            <form className="mb-4" onSubmit={handleSubmit(onSubmit)}>
                <Textarea
                    isRequired
                    label="What's going on at work?"
                    placeholder="Write as much or as little as you want"
                    className="mb-4 w-full"
                    variant="bordered"
                    {...register('summary', { required: true })}
                />
                <Textarea
                    label="What's great at work?"
                    className="mb-4 w-full"
                    variant="bordered"
                    {...register('great')}
                />
                <Textarea
                    label="What sucks at work?"
                    className="mb-4 w-full"
                    variant="bordered"
                    {...register('sucks')}
                />
                <div className="text-center">
                    <Button
                        type="submit"
                        size="lg"
                        radius="full"
                        className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
                    >
                        Use magic AI to get your answer
                    </Button>
                </div>
            </form>

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
