document.addEventListener('scroll', function(e) {
    let lastScrollPos = window.scrollY;
    //console.log(lastScrollPos);
});

/* let firstView = document.querySelector('.megaContainer');;
let height = firstView.clientHeight;

let style = getComputedStyle(firstView);
let marginTop = parseInt(style.marginTop);
let marginBottom = parseInt(style.marginBottom);

let totalHeight = marginTop + marginBottom + height;
 */
elmnt = document.getElementById("kontakt");

function scrollTo(element, to, duration) {
    if (duration <= 0) return;
    var difference = to - element.scrollTop;
    var perTick = difference / duration * 10;

    setTimeout(function() {
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop === to) return;
        scrollTo(element, to, duration - 10);
    }, 10);
}

function scrollFunction() {
    let lastScrollPos = window.scrollY;
    if (lastScrollPos > 100) {
        scrollTo(document.body, elmnt.offsetTop, 600);
    }
    console.log(lastScrollPos);
}




window.onscroll = scrollFunction;