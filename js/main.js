document.body.classList.add(localStorage.getItem('pageColor') || 'red');

$(document).ready(function () {
    'use strict';
    $("html").niceScroll();

    $('.carousel').carousel({
        interval: 4000
    });
});


/* Start Change Options */
var gear = document.getElementById('gear'),
    nav = document.getElementById('nav');
gear.addEventListener('click', function () {
    'use strict';
    nav.style.display === "none" ? nav.style.display = "block" : nav.style.display = "none";
}, false);

var elements = document.querySelectorAll("#nav ul li"),
    classesList = [],
    i;
for (i = 0; i < elements.length; i = i + 1) {
    classesList.push(elements[i].getAttribute('data-color'));
    elements[i].addEventListener('click', function () {
        'use strict';
        document.body.setAttribute('class', this.getAttribute('data-color'));
        localStorage.setItem('pageColor', this.getAttribute('data-color'));
    }, false);

}
/* End Change Options */

/* Start Scroll Top */
var scroll = document.getElementById("scrollTop");
window.onscroll = function () {
    'use strict';
    this.pageYOffset >= 900 ? scroll.style.display = "block" : scroll.style.display = "none";
}
scroll.addEventListener('click', function () {
    'use strict';
    window.scrollTo(0, 0);

}, false);
/* End Scrool Top */