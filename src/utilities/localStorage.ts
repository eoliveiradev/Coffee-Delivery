export const getLS = (LS: string) => JSON.parse(localStorage.getItem(LS) as string) ?? [];
export const setLS = (LSName: string, newLS: any) => localStorage.setItem(LSName, JSON.stringify(newLS));