export const delay = (duration: number) =>
  new Promise((resolve) => {
    return setTimeout(resolve, duration);
  });

export const cancelableDelay = (duration: number, callback: Function) => {
  return setTimeout(callback, duration);
};
