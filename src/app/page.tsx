import { GoodWorkJournalEntry } from '@/lib/good-work-journal-entry/types';

export default function Home() {
    const dailyEntries: GoodWorkJournalEntry[] = [];

    return (
        <main className="min-h-screen">
            {dailyEntries.length > 0 ?
                <ul>
                    <li>Last entry</li>
                    <li>Last entry</li>
                    <li>Last entry</li>
                    <li>Last entry</li>
                </ul> : null}

            <button type="button">Add new entry</button>
        </main>
    );
}
