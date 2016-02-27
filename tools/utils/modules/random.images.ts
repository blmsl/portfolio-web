'use strict';
let imageIds = (process.env.INSTAGRAM_IMAGE_IDS || '').split(',');

export function getIds():Array<string> {
  var reducedImageIds = [],
    imageIdsCopy = imageIds.slice(0);
  if (imageIds.length > 199) {
    while (reducedImageIds.length < 200) {
      reducedImageIds.push(
        imageIdsCopy.splice(Math.floor(Math.random() * (imageIdsCopy.length)), 1)[0]);
    }
  }
  return reducedImageIds;
}
