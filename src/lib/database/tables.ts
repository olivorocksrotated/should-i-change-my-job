const storyMessages = {
    id: { type: 'string' },
    role: { type: 'string' },
    content: { type: 'string' },
    createdAt: { type: 'string' }
} as const;

export const tablesSchema = { storyMessages } as const;
