export class ErrorList extends Error {
  constructor(public errors: Error[]) {
    const message = errors.map(err => err.stack).join('\n  ')
    super('Multiple errors:\n  ' + message)
    this.name = 'ErrorList'
  }
}

export function sanitize(val: unknown): string {
  if (typeof val === 'object' || typeof val === 'string') {
    return JSON.stringify(val)
  } else {
    return String(val)
  }
}

/**
 * Parse proccode to extract argument types in order
 * Returns array of argument types ('any' for %s, 'bool' for %b)
 * Example: "aaa %s bbb %b ccc" returns ['any', 'bool']
 * Note: Escaped sequences like %%s or %%b are not treated as parameters
 */
export function parseProccodeArgumentTypes(proccode: string): ('any' | 'bool')[] {
  const types: ('any' | 'bool')[] = []
  // Use negative lookbehind to match %s or %b but not %%s or %%b
  const paramRegex = /(?<!%)%([sb])/g
  let match: RegExpExecArray | null

  while ((match = paramRegex.exec(proccode)) !== null) {
    const paramType = match[1] === 'b' ? 'bool' : 'any'
    types.push(paramType)
  }

  return types
}
