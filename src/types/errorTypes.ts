export type ErrorTypes = {
    info: (message: string) => void;
    warn: (message: string) => void;
    error: (message: string) => void;
}