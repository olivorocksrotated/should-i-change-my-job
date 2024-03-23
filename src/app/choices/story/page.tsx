'use client';

import { Button, Card, CardBody, Textarea } from '@nextui-org/react';
import { useChat } from 'ai/react';
import { useEffect } from 'react';
import { IoSend } from 'react-icons/io5';
import { useDebounceCallback } from 'usehooks-ts';

import { useLoadInitialMessages, useUpdateStory } from './hooks';

export default function StoryPage() {
    const { messages, input, setMessages, handleInputChange, handleSubmit } = useChat({ api: '/api/ai' });

    useLoadInitialMessages(setMessages);
    const updateStoredMessages = useDebounceCallback(useUpdateStory(), 1000);

    useEffect(() => {
        updateStoredMessages(messages);
    }, [messages, updateStoredMessages]);

    return (
        <article className="flex flex-1 flex-col justify-between overflow-hidden">
            <ul className="max-h-full overflow-y-scroll px-4 pt-2">
                {messages.map((m, index) => (
                    <li key={index} className={`mb-4 ${m.role === 'user' ? 'pl-6' : 'pr-6'}`}>
                        <Card className={m.role === 'user' ? 'light' : 'dark'}>
                            <CardBody>
                                <p>{m.content}</p>
                            </CardBody>
                        </Card>
                    </li>
                ))}
            </ul>
            <form
                onSubmit={handleSubmit}
                className="fixed inset-x-0 bottom-0 z-10 flex items-center justify-between gap-4 bg-neutral-200 px-3 py-2 lg:static"
            >
                <Textarea
                    type="text"
                    size="sm"
                    label="Your answer"
                    minRows={1}
                    maxRows={3}
                    value={input}
                    onChange={handleInputChange}
                />
                <Button
                    type="submit"
                    color="primary"
                    variant="solid"
                    size="lg"
                    isIconOnly
                    className="mb-auto h-14 w-16"
                >
                    <IoSend size={20} />
                </Button>
            </form>
        </article>
    );
}
