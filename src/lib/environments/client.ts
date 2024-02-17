export function isClient(): boolean {
    return typeof window !== 'undefined';
}

export function isIndexedDBAvailable(): boolean {
    return isClient() && !!window?.indexedDB;
}
