
export const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

export function capitalize(str: string): string {
    if (str.length === 0) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
};