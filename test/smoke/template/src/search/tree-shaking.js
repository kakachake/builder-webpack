export function a() {
  // 有副作用无法被tree shaking
  // eslint-disable-next-line no-console
  console.log("This is func a");
  return "This is func a";
}

export function b() {
  return "This is func b";
}
