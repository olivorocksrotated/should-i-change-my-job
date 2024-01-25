'use client';

import { useQuery } from '@tanstack/react-query';

import { QueryKey } from './state-manager/query-key';

export default function JournalEntries() {
    const { data } = useQuery({ queryKey: [QueryKey.JournalEntries], queryFn: () => [] });

    return <div>{data}</div>;
}
