var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  ErrorList: () => ErrorList,
  parseProccodeArgumentTypes: () => parseProccodeArgumentTypes,
  sanitize: () => sanitize
});
module.exports = __toCommonJS(index_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ErrorList,
  parseProccodeArgumentTypes,
  sanitize
});
