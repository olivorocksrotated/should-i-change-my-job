import {
    dehydrate,
    HydrationBoundary,
    QueryClient
} from '@tanstack/react-query';

import JournalEntries from './journal-entries';
import { QueryKey } from './state-manager/query-key';

export default async function JournalEntriesPage() {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: [QueryKey.JournalEntries],
        queryFn: () => []
    });

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <JournalEntries />
        </HydrationBoundary>
    );
}
