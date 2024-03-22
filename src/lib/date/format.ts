export function dateToISOString(dateInput: Date | string | undefined): string {
    if (!dateInput) {
        return '';
    }

    return new Date(dateInput).toISOString();
}
