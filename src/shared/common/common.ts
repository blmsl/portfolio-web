'use strict';
export function elementInViewport(jQuery:JQuery, el:Object) {
  return (($, element) => {
    let viewportWidth = $(window).width();
    let viewportHeight = $(window).height();
    let minTop = $(document).scrollTop();
    let maxTop = minTop + viewportHeight;
    let minLeft = $(document).scrollLeft();
    let maxLeft = minLeft + viewportWidth;
    let elementOffset = element.offset();

    return ((elementOffset.top > minTop && elementOffset.top < maxTop) &&
    (elementOffset.left > minLeft && elementOffset.left < maxLeft));
  })(jQuery, el);
}
