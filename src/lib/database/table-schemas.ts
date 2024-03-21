import { createId } from './id';

const userTableSchema = {
    id: { type: 'string', default: createId() }
} as const;

const storyMessagesSchema = {
    id: { type: 'string' },
    role: { type: 'string' },
    content: { type: 'string' },
    createdAt: { type: 'string' }
} as const;

export const tablesSchema = {
    user: userTableSchema,
    storyMessages: storyMessagesSchema
} as const;
