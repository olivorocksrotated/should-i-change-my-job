import { goodWorkJournalEntries } from '../good-work-journal/schema';
import { storyMessages } from '../story/schema';

export const tablesSchema = {
    storyMessages,
    goodWorkJournalEntries
} as const;
