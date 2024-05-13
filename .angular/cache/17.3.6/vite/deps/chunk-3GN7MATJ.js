// node_modules/@angular/cdk/fesm2022/coercion.mjs
function coerceBooleanProperty(value) {
  return value != null && `${value}` !== "false";
}
function coerceArray(value) {
  return Array.isArray(value) ? value : [value];
}

export {
  coerceBooleanProperty,
  coerceArray
};
//# sourceMappingURL=chunk-3GN7MATJ.js.map
