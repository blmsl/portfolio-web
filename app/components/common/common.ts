export function elementInViewport($, el):boolean {
  let viewportWidth = $(window).width(),
    viewportHeight = $(window).height(),
    minTop = $(document).scrollTop(),
    maxTop = minTop + viewportHeight,
    minLeft = $(document).scrollLeft(),
    maxLeft = minLeft + viewportWidth,
    elementOffset = el.offset();

  return ((elementOffset.top > minTop && elementOffset.top < maxTop) &&
  (elementOffset.left > minLeft && elementOffset.left < maxLeft));
}
