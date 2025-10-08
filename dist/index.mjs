// src/index.ts
var ErrorList = class extends Error {
  constructor(errors) {
    const message = errors.map((err) => err.stack).join("\n  ");
    super("Multiple errors:\n  " + message);
    this.errors = errors;
    this.name = "ErrorList";
  }
};
function sanitize(val) {
  if (typeof val === "object" || typeof val === "string") {
    return JSON.stringify(val);
  } else {
    return String(val);
  }
}
function parseProccodeArgumentTypes(proccode) {
  const types = [];
  const paramRegex = /(?<!%)%([sb])/g;
  let match;
  while ((match = paramRegex.exec(proccode)) !== null) {
    const paramType = match[1] === "b" ? "bool" : "any";
    types.push(paramType);
  }
  return types;
}
export {
  ErrorList,
  parseProccodeArgumentTypes,
  sanitize
};
