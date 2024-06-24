
export const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

export function capitalize(str: string): string {
    if (str.length === 0) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
};

export function formatTimeForDisplay(timeStr: string) {
    const parts = timeStr.split(':');
    const newTimeString = parts[0] + ':' + parts[1];
    return newTimeString;
}

export function formatDateForDisplay(date: string) {
    return new Date(date).toDateString();
}