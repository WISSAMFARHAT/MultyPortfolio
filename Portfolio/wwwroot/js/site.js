var exports = {};
"use strict";
exports.__esModule = true;
exports.scrollToSection = void 0;
window.onscroll = function (event) {
    var doc = document.documentElement;
    var scrollTop = doc.scrollTop;
    if (scrollTop > 55) {
        document.querySelector("html").classList.add("_scroll");
    }
    else {
        document.querySelector("html").classList.remove("_scroll");
    }
};
function scrollToSection(id) {
    var element = document.getElementById(id);
    element.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'start'
    });
}
exports.scrollToSection = scrollToSection;


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsTUFBTSxDQUFDLFFBQVEsR0FBRyxVQUFVLEtBQUs7SUFDN0IsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQztJQUNuQyxJQUFJLFNBQVMsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDO0lBRTlCLElBQUksU0FBUyxHQUFHLEVBQUUsRUFBRTtRQUNoQixRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7S0FFM0Q7U0FBTTtRQUNILFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUM5RDtBQUNMLENBQUMsQ0FBQTtBQUdELFNBQWdCLGVBQWUsQ0FBQyxFQUFFO0lBQzlCLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDMUMsT0FBTyxDQUFDLGNBQWMsQ0FBQztRQUNuQixLQUFLLEVBQUUsT0FBTztRQUNkLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLE1BQU0sRUFBRSxPQUFPO0tBQ2xCLENBQUMsQ0FBQztBQUNQLENBQUM7QUFQRCwwQ0FPQyIsImZpbGUiOiJzaXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbndpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgdmFyIGRvYyA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuICAgIHZhciBzY3JvbGxUb3AgPSBkb2Muc2Nyb2xsVG9wO1xyXG5cclxuICAgIGlmIChzY3JvbGxUb3AgPiA1NSkge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJodG1sXCIpLmNsYXNzTGlzdC5hZGQoXCJfc2Nyb2xsXCIpO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImh0bWxcIikuY2xhc3NMaXN0LnJlbW92ZShcIl9zY3JvbGxcIik7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2Nyb2xsVG9TZWN0aW9uKGlkKSB7XHJcbiAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuICAgIGVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoe1xyXG4gICAgICAgIGJsb2NrOiAnc3RhcnQnLFxyXG4gICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcclxuICAgICAgICBpbmxpbmU6ICdzdGFydCdcclxuICAgIH0pO1xyXG59XHJcblxyXG4iXX0=

var exports = {};
var fadersleft = document.querySelectorAll(".fade-left");
var fadersright = document.querySelectorAll(".fade-right");
var faderin = document.querySelectorAll(".fadein");
var appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -80px 0px"
};
var appearScroll = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (!entry.isIntersecting) {
            return;
        }
        else {
            entry.target.classList.add("_appear");
            appearScroll.unobserve(entry.target);
        }
    });
}, appearOptions);
if (fadersleft) {
    fadersleft.forEach(function (fader) {
        appearScroll.observe(fader);
    });
}
if (fadersright) {
    fadersright.forEach(function (fader) {
        appearScroll.observe(fader);
    });
}
if (faderin) {
    faderin.forEach(function (fader) {
        appearScroll.observe(fader);
    });
}


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuaW1hdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDM0QsSUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQzdELElBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUVyRCxJQUFNLGFBQWEsR0FBRztJQUNsQixTQUFTLEVBQUUsQ0FBQztJQUNaLFVBQVUsRUFBRSxtQkFBbUI7Q0FDbEMsQ0FBQTtBQUVELElBQU0sWUFBWSxHQUFHLElBQUksb0JBQW9CLENBQUMsVUFBVSxPQUFPO0lBQzNELE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQSxLQUFLO1FBRWpCLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFO1lBQ3ZCLE9BQU87U0FDVjthQUFNO1lBQ0gsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3RDLFlBQVksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3hDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLEVBQ0csYUFBYSxDQUNoQixDQUFDO0FBRUYsSUFBSSxVQUFVLEVBQUU7SUFDWixVQUFVLENBQUMsT0FBTyxDQUFDLFVBQUEsS0FBSztRQUNwQixZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUMsQ0FBQyxDQUFBO0NBQ0w7QUFFRCxJQUFJLFdBQVcsRUFBRTtJQUNiLFdBQVcsQ0FBQyxPQUFPLENBQUMsVUFBQSxLQUFLO1FBQ3JCLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQyxDQUFDLENBQUE7Q0FDTDtBQUVELElBQUksT0FBTyxFQUFFO0lBQ1QsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFBLEtBQUs7UUFDakIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDLENBQUMsQ0FBQTtDQUNMIiwiZmlsZSI6ImFuaW1hdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZhZGVyc2xlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZhZGUtbGVmdFwiKTtcclxuY29uc3QgZmFkZXJzcmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZhZGUtcmlnaHRcIik7XHJcbmNvbnN0IGZhZGVyaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZhZGVpblwiKTtcclxuXHJcbmNvbnN0IGFwcGVhck9wdGlvbnMgPSB7XHJcbiAgICB0aHJlc2hvbGQ6IDAsXHJcbiAgICByb290TWFyZ2luOiBcIjBweCAwcHggLTgwcHggMHB4XCJcclxufVxyXG5cclxuY29uc3QgYXBwZWFyU2Nyb2xsID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChlbnRyaWVzKSB7XHJcbiAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xyXG5cclxuICAgICAgICBpZiAoIWVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LmFkZChcIl9hcHBlYXJcIik7XHJcbiAgICAgICAgICAgIGFwcGVhclNjcm9sbC51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSxcclxuICAgIGFwcGVhck9wdGlvbnNcclxuKTtcclxuXHJcbmlmIChmYWRlcnNsZWZ0KSB7XHJcbiAgICBmYWRlcnNsZWZ0LmZvckVhY2goZmFkZXIgPT4ge1xyXG4gICAgICAgIGFwcGVhclNjcm9sbC5vYnNlcnZlKGZhZGVyKTtcclxuICAgIH0pXHJcbn1cclxuICBcclxuaWYgKGZhZGVyc3JpZ2h0KSB7XHJcbiAgICBmYWRlcnNyaWdodC5mb3JFYWNoKGZhZGVyID0+IHtcclxuICAgICAgICBhcHBlYXJTY3JvbGwub2JzZXJ2ZShmYWRlcik7XHJcbiAgICB9KVxyXG59XHJcblxyXG5pZiAoZmFkZXJpbikge1xyXG4gICAgZmFkZXJpbi5mb3JFYWNoKGZhZGVyID0+IHtcclxuICAgICAgICBhcHBlYXJTY3JvbGwub2JzZXJ2ZShmYWRlcik7XHJcbiAgICB9KVxyXG59XHJcblxyXG5cclxuIl19
