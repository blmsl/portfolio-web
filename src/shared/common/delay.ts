export const delay = (duration: number) =>
  new Promise((resolve) => setTimeout(resolve, duration));

export const cancelableDelay = (duration: number, callback: Function) => setTimeout(callback, duration);
