(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = navigationOffCanvas;
// import Hammer from 'hammerjs'

function navigationOffCanvas() {
  var d = document,
      w = window,
      panel = d.querySelector('.Panel'),
      panelBtn = d.querySelector('.Panel-button'),
      mq = w.matchMedia('(min-width: 64em)'),
      hamburger = d.querySelector('.hamburger');
  // hammerBody = new Hammer(d.body),
  // hammerPanel = new Hammer(panel)

  function closePanel(mq) {
    if (mq.matches) {
      panel.classList.remove('is-active');
      hamburger.classList.remove('is-active');
    }
  }

  function hammerTouches(e) {
    if (e.type == 'swipeleft') {
      panel.classList.remove('is-active');
      hamburger.classList.remove('is-active');
    } else if (e.type == 'swiperight') {
      panel.classList.add('is-active');
      hamburger.classList.add('is-active');
    }
  }

  panelBtn.addEventListener('click', function (e) {
    e.preventDefault();
    panel.classList.toggle('is-active');
    hamburger.classList.toggle('is-active');
  });

  mq.addListener(closePanel);
  closePanel(mq);

  // hammerPanel.on('swipeleft  swiperight', hammerTouches)
  // hammerBody.on('swipeleft  swiperight', hammerTouches)
}

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transparentHeader;
function transparentHeader() {
  var d = document,
      w = window,
      header = d.querySelector('.Header'),
      logo = d.querySelector('.Logo'),
      firstContent = d.querySelector('.u-firstContent'),
      firstContentHeight = w.getComputedStyle(firstContent, null).getPropertyValue('height').split('px')[0],
      headerHeight = w.getComputedStyle(header, null).getPropertyValue('height').split('px')[0];

  var scrollTopLimit = firstContentHeight - headerHeight;
  //console.log(firstContentHeight, headerHeight, scrollTopLimit)

  function headerScroll() {
    var scrollTop = w.pageYOffset || d.documentElement.scrollTop;

    if (scrollTop > scrollTopLimit) {
      //console.log('abajo', scrollTop)
      header.classList.add('is-active'), logo.classList.add('is-active');
    } else {
      //console.log('arriba', scrollTop)
      header.classList.remove('is-active'), logo.classList.remove('is-active');
    }
  }

  d.addEventListener('DOMContentLoaded', headerScroll);
  w.addEventListener('scroll', headerScroll, false);
}

},{}],3:[function(require,module,exports){
'use strict';

var _navigation_off_canvas = require('./components/navigation_off_canvas');

var _navigation_off_canvas2 = _interopRequireDefault(_navigation_off_canvas);

var _transparent_header = require('./components/transparent_header');

var _transparent_header2 = _interopRequireDefault(_transparent_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _navigation_off_canvas2.default)();
(0, _transparent_header2.default)();

},{"./components/navigation_off_canvas":1,"./components/transparent_header":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvY29tcG9uZW50cy9uYXZpZ2F0aW9uX29mZl9jYW52YXMuanMiLCJzcmMvanMvY29tcG9uZW50cy90cmFuc3BhcmVudF9oZWFkZXIuanMiLCJzcmMvanMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztrQkNFd0IsbUI7QUFGeEI7O0FBRWUsU0FBUyxtQkFBVCxHQUErQjtBQUM1QyxNQUFNLElBQUksUUFBVjtBQUFBLE1BQ0UsSUFBSSxNQUROO0FBQUEsTUFFRSxRQUFRLEVBQUUsYUFBRixDQUFnQixRQUFoQixDQUZWO0FBQUEsTUFHRSxXQUFXLEVBQUUsYUFBRixDQUFnQixlQUFoQixDQUhiO0FBQUEsTUFJRSxLQUFLLEVBQUUsVUFBRixDQUFhLG1CQUFiLENBSlA7QUFBQSxNQUtFLFlBQVksRUFBRSxhQUFGLENBQWdCLFlBQWhCLENBTGQ7QUFNRTtBQUNBOztBQUVGLFdBQVMsVUFBVCxDQUFvQixFQUFwQixFQUF3QjtBQUN0QixRQUFJLEdBQUcsT0FBUCxFQUFnQjtBQUNkLFlBQU0sU0FBTixDQUFnQixNQUFoQixDQUF1QixXQUF2QjtBQUNBLGdCQUFVLFNBQVYsQ0FBb0IsTUFBcEIsQ0FBMkIsV0FBM0I7QUFDRDtBQUNGOztBQUVELFdBQVMsYUFBVCxDQUF1QixDQUF2QixFQUEwQjtBQUN4QixRQUFJLEVBQUUsSUFBRixJQUFVLFdBQWQsRUFBMkI7QUFDekIsWUFBTSxTQUFOLENBQWdCLE1BQWhCLENBQXVCLFdBQXZCO0FBQ0EsZ0JBQVUsU0FBVixDQUFvQixNQUFwQixDQUEyQixXQUEzQjtBQUNELEtBSEQsTUFHTyxJQUFJLEVBQUUsSUFBRixJQUFVLFlBQWQsRUFBNEI7QUFDakMsWUFBTSxTQUFOLENBQWdCLEdBQWhCLENBQW9CLFdBQXBCO0FBQ0EsZ0JBQVUsU0FBVixDQUFvQixHQUFwQixDQUF3QixXQUF4QjtBQUNEO0FBQ0Y7O0FBRUQsV0FBUyxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxhQUFLO0FBQ3RDLE1BQUUsY0FBRjtBQUNBLFVBQU0sU0FBTixDQUFnQixNQUFoQixDQUF1QixXQUF2QjtBQUNBLGNBQVUsU0FBVixDQUFvQixNQUFwQixDQUEyQixXQUEzQjtBQUNELEdBSkQ7O0FBTUEsS0FBRyxXQUFILENBQWUsVUFBZjtBQUNBLGFBQVcsRUFBWDs7QUFFQTtBQUNBO0FBQ0Q7Ozs7Ozs7O2tCQ3hDdUIsaUI7QUFBVCxTQUFTLGlCQUFULEdBQTZCO0FBQzFDLE1BQU0sSUFBSSxRQUFWO0FBQUEsTUFDRSxJQUFJLE1BRE47QUFBQSxNQUVFLFNBQVMsRUFBRSxhQUFGLENBQWdCLFNBQWhCLENBRlg7QUFBQSxNQUdFLE9BQU8sRUFBRSxhQUFGLENBQWdCLE9BQWhCLENBSFQ7QUFBQSxNQUlFLGVBQWUsRUFBRSxhQUFGLENBQWdCLGlCQUFoQixDQUpqQjtBQUFBLE1BS0UscUJBQXFCLEVBQUUsZ0JBQUYsQ0FBbUIsWUFBbkIsRUFBaUMsSUFBakMsRUFBdUMsZ0JBQXZDLENBQXdELFFBQXhELEVBQWtFLEtBQWxFLENBQXdFLElBQXhFLEVBQThFLENBQTlFLENBTHZCO0FBQUEsTUFNRSxlQUFlLEVBQUUsZ0JBQUYsQ0FBbUIsTUFBbkIsRUFBMkIsSUFBM0IsRUFBaUMsZ0JBQWpDLENBQWtELFFBQWxELEVBQTRELEtBQTVELENBQWtFLElBQWxFLEVBQXdFLENBQXhFLENBTmpCOztBQVFBLE1BQUksaUJBQWlCLHFCQUFxQixZQUExQztBQUNBOztBQUVBLFdBQVMsWUFBVCxHQUF3QjtBQUN0QixRQUFJLFlBQVksRUFBRSxXQUFGLElBQWlCLEVBQUUsZUFBRixDQUFrQixTQUFuRDs7QUFFQSxRQUFJLFlBQVksY0FBaEIsRUFBZ0M7QUFDOUI7QUFDQSxhQUFPLFNBQVAsQ0FBaUIsR0FBakIsQ0FBcUIsV0FBckIsR0FDQSxLQUFLLFNBQUwsQ0FBZSxHQUFmLENBQW1CLFdBQW5CLENBREE7QUFFRCxLQUpELE1BSU87QUFDTDtBQUNBLGFBQU8sU0FBUCxDQUFpQixNQUFqQixDQUF3QixXQUF4QixHQUNBLEtBQUssU0FBTCxDQUFlLE1BQWYsQ0FBc0IsV0FBdEIsQ0FEQTtBQUVEO0FBQ0Y7O0FBRUQsSUFBRSxnQkFBRixDQUFtQixrQkFBbkIsRUFBdUMsWUFBdkM7QUFDQSxJQUFFLGdCQUFGLENBQW1CLFFBQW5CLEVBQTZCLFlBQTdCLEVBQTJDLEtBQTNDO0FBQ0Q7Ozs7O0FDNUJEOzs7O0FBQ0E7Ozs7OztBQUVBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLy8gaW1wb3J0IEhhbW1lciBmcm9tICdoYW1tZXJqcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmF2aWdhdGlvbk9mZkNhbnZhcygpIHtcbiAgY29uc3QgZCA9IGRvY3VtZW50LFxuICAgIHcgPSB3aW5kb3csXG4gICAgcGFuZWwgPSBkLnF1ZXJ5U2VsZWN0b3IoJy5QYW5lbCcpLFxuICAgIHBhbmVsQnRuID0gZC5xdWVyeVNlbGVjdG9yKCcuUGFuZWwtYnV0dG9uJyksXG4gICAgbXEgPSB3Lm1hdGNoTWVkaWEoJyhtaW4td2lkdGg6IDY0ZW0pJyksXG4gICAgaGFtYnVyZ2VyID0gZC5xdWVyeVNlbGVjdG9yKCcuaGFtYnVyZ2VyJylcbiAgICAvLyBoYW1tZXJCb2R5ID0gbmV3IEhhbW1lcihkLmJvZHkpLFxuICAgIC8vIGhhbW1lclBhbmVsID0gbmV3IEhhbW1lcihwYW5lbClcblxuICBmdW5jdGlvbiBjbG9zZVBhbmVsKG1xKSB7XG4gICAgaWYgKG1xLm1hdGNoZXMpIHtcbiAgICAgIHBhbmVsLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpXG4gICAgICBoYW1idXJnZXIuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJylcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoYW1tZXJUb3VjaGVzKGUpIHtcbiAgICBpZiAoZS50eXBlID09ICdzd2lwZWxlZnQnKSB7XG4gICAgICBwYW5lbC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKVxuICAgICAgaGFtYnVyZ2VyLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpXG4gICAgfSBlbHNlIGlmIChlLnR5cGUgPT0gJ3N3aXBlcmlnaHQnKSB7XG4gICAgICBwYW5lbC5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKVxuICAgICAgaGFtYnVyZ2VyLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpXG4gICAgfVxuICB9XG5cbiAgcGFuZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBwYW5lbC5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKVxuICAgIGhhbWJ1cmdlci5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKVxuICB9KVxuXG4gIG1xLmFkZExpc3RlbmVyKGNsb3NlUGFuZWwpXG4gIGNsb3NlUGFuZWwobXEpXG5cbiAgLy8gaGFtbWVyUGFuZWwub24oJ3N3aXBlbGVmdCAgc3dpcGVyaWdodCcsIGhhbW1lclRvdWNoZXMpXG4gIC8vIGhhbW1lckJvZHkub24oJ3N3aXBlbGVmdCAgc3dpcGVyaWdodCcsIGhhbW1lclRvdWNoZXMpXG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0cmFuc3BhcmVudEhlYWRlcigpIHtcbiAgY29uc3QgZCA9IGRvY3VtZW50LFxuICAgIHcgPSB3aW5kb3csXG4gICAgaGVhZGVyID0gZC5xdWVyeVNlbGVjdG9yKCcuSGVhZGVyJyksXG4gICAgbG9nbyA9IGQucXVlcnlTZWxlY3RvcignLkxvZ28nKSxcbiAgICBmaXJzdENvbnRlbnQgPSBkLnF1ZXJ5U2VsZWN0b3IoJy51LWZpcnN0Q29udGVudCcpLFxuICAgIGZpcnN0Q29udGVudEhlaWdodCA9IHcuZ2V0Q29tcHV0ZWRTdHlsZShmaXJzdENvbnRlbnQsIG51bGwpLmdldFByb3BlcnR5VmFsdWUoJ2hlaWdodCcpLnNwbGl0KCdweCcpWzBdLFxuICAgIGhlYWRlckhlaWdodCA9IHcuZ2V0Q29tcHV0ZWRTdHlsZShoZWFkZXIsIG51bGwpLmdldFByb3BlcnR5VmFsdWUoJ2hlaWdodCcpLnNwbGl0KCdweCcpWzBdXG5cbiAgbGV0IHNjcm9sbFRvcExpbWl0ID0gZmlyc3RDb250ZW50SGVpZ2h0IC0gaGVhZGVySGVpZ2h0XG4gIC8vY29uc29sZS5sb2coZmlyc3RDb250ZW50SGVpZ2h0LCBoZWFkZXJIZWlnaHQsIHNjcm9sbFRvcExpbWl0KVxuXG4gIGZ1bmN0aW9uIGhlYWRlclNjcm9sbCgpIHtcbiAgICBsZXQgc2Nyb2xsVG9wID0gdy5wYWdlWU9mZnNldCB8fCBkLmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3BcblxuICAgIGlmIChzY3JvbGxUb3AgPiBzY3JvbGxUb3BMaW1pdCkge1xuICAgICAgLy9jb25zb2xlLmxvZygnYWJham8nLCBzY3JvbGxUb3ApXG4gICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJyksXG4gICAgICBsb2dvLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vY29uc29sZS5sb2coJ2FycmliYScsIHNjcm9sbFRvcClcbiAgICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKSxcbiAgICAgIGxvZ28uY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJylcbiAgICB9XG4gIH1cblxuICBkLmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBoZWFkZXJTY3JvbGwpXG4gIHcuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGVhZGVyU2Nyb2xsLCBmYWxzZSlcbn1cbiIsImltcG9ydCBuYXZpZ2F0aW9uT2ZmQ2FudmFzIGZyb20gJy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uX29mZl9jYW52YXMnXG5pbXBvcnQgdHJhbnNwYXJlbnRIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL3RyYW5zcGFyZW50X2hlYWRlcidcblxubmF2aWdhdGlvbk9mZkNhbnZhcygpXG50cmFuc3BhcmVudEhlYWRlcigpXG4iXX0=
