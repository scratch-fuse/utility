declare class ErrorList extends Error {
    errors: Error[];
    constructor(errors: Error[]);
}
declare function sanitize(val: unknown): string;
/**
 * Parse proccode to extract argument types in order
 * Returns array of argument types ('any' for %s, 'bool' for %b)
 * Example: "aaa %s bbb %b ccc" returns ['any', 'bool']
 * Note: Escaped sequences like %%s or %%b are not treated as parameters
 */
declare function parseProccodeArgumentTypes(proccode: string): ('any' | 'bool')[];

export { ErrorList, parseProccodeArgumentTypes, sanitize };
