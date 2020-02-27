// prevents error 2307: Cannot find module when importing image files
// https://github.com/Microsoft/TypeScript-React-Starter/issues/12
declare module '*.svg';
