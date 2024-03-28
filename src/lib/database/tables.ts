const storyMessages = {
    id: { type: 'string' },
    role: { type: 'string' },
    content: { type: 'string' },
    createdAt: { type: 'string' }
} as const;

const goodWorkJournalEntries = {
    id: { type: 'string' },
    score: { type: 'number' },
    learned: { type: 'string' },
    initiated: { type: 'string' },
    helped: { type: 'string' },
    createdAt: { type: 'string' }
} as const;

export const tablesSchema = {
    storyMessages,
    goodWorkJournalEntries
} as const;
