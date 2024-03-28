'use client';

import { Button, Slider, Textarea } from '@nextui-org/react';
import { Controller, useForm } from 'react-hook-form';

import { createId } from '@/lib/database/id';
import { useAddRowCallback } from '@/lib/database/store';
import { dateToISOString } from '@/lib/date/format';
import { GoodWorkJournalEntry } from '@/lib/good-work-journal/types';

const dayMoods = [
    { value: 0, label: 'Horrible' },
    { value: 25, label: 'Bad' },
    { value: 50, label: 'Average' },
    { value: 75, label: 'Good' },
    { value: 100, label: 'Amazing!' }
];

export default function JournalPage() {
    const { register, handleSubmit, control, formState: { isSubmitting } } = useForm<GoodWorkJournalEntry>();
    const addJournalEntry = useAddRowCallback(
        'goodWorkJournalEntries',
        (newEntry: GoodWorkJournalEntry) => ({
            ...newEntry,
            id: createId(),
            createdAt: dateToISOString(new Date())
        })
    );

    return (
        <article className="h-full p-4">
            <form
                onSubmit={handleSubmit(addJournalEntry)}
                className="flex h-full flex-col justify-between"
            >
                <div>
                    <Controller
                        name="score"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                            <Slider
                                label="How was your day at work?"
                                color="foreground"
                                size="sm"
                                className="mb-20 w-full"
                                step={25}
                                defaultValue={50}
                                showSteps={true}
                                showOutline={true}
                                hideValue={true}
                                marks={dayMoods}
                                {...field}
                            />
                        )}
                    />
                    <Textarea
                        type="text"
                        size="sm"
                        className="mb-4"
                        label="What did you learn at work today?"
                        placeholder="Learned how to make a pivot table in a spreadsheet"
                        minRows={1}
                        maxRows={3}
                        isRequired
                        {...register('learned', { required: true })}
                    />
                    <Textarea
                        type="text"
                        size="sm"
                        className="mb-4"
                        label="What did you initiate at work today?"
                        placeholder="Left the break room cleaner than I found it"
                        minRows={1}
                        maxRows={3}
                        isRequired
                        {...register('initiated', { required: true })}
                    />
                    <Textarea
                        type="text"
                        size="sm"
                        label="Who did you help at work today?"
                        placeholder="Helped John in the front office -- put paper in the copier"
                        minRows={1}
                        maxRows={3}
                        isRequired
                        {...register('helped', { required: true })}
                    />
                </div>

                <Button
                    type="submit"
                    color="primary"
                    variant="solid"
                    isLoading={isSubmitting}
                    disabled={isSubmitting}
                >
                    Save
                </Button>
            </form>
        </article>
    );
}
