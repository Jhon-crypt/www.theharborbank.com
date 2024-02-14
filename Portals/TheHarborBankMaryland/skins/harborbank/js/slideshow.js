var slideshowTimeout, slideIndex = 1, autoSlide = !0, mouseOverSlide = !1;
function changeSlides(e) {
    showSlides(slideIndex += e),
    event.preventDefault()
}
function changeSlide(e) {
    showSlides(slideIndex = e),
    event.preventDefault()
}
function showSlides(e) {
    var t, l = document.getElementsByClassName("slide-item"), s = document.getElementsByClassName("dot");
    for (slideIndex > l.length && (slideIndex = 1),
    e > l.length && (slideIndex = 1,
    e = 1),
    e < 1 && (slideIndex = l.length),
    t = 0; t < l.length; t++)
        l[t].style.display = "none",
        l[t].setAttribute("aria-hidden", "true");
    for (t = 0; t < s.length; t++)
        s[t].className = s[t].className.replace(" active", ""),
        s[t].setAttribute("aria-selected", "false");
    l[slideIndex - 1].style.display = "block",
    l[slideIndex - 1].setAttribute("aria-hidden", "false"),
    s[slideIndex - 1].className += " active",
    s[slideIndex - 1].setAttribute("aria-selected", "true")
}
function autoChangeSlides() {
    if (slideIndex++,
    autoSlide = !0) {
        var e;
        document.getElementById("slideshowAutoplayStatus").setAttribute("aria-label", "autoplay on for slideshow");
        var t = document.getElementsByClassName("slide-item")
          , l = document.getElementsByClassName("dot");
        for (e = 0; e < t.length; e++)
            t[e].style.display = "none",
            t[e].setAttribute("aria-hidden", "true");
        for (e = 0; e < l.length; e++)
            l[e].className = l[e].className.replace(" active", ""),
            l[e].setAttribute("aria-selected", "false");
        slideIndex > t.length && (slideIndex = 1),
        t[slideIndex - 1].style.display = "block",
        t[slideIndex - 1].setAttribute("aria-hidden", "false"),
        l[slideIndex - 1].className += " active",
        l[slideIndex - 1].setAttribute("aria-selected", "true"),
        slideshowTimeout = setTimeout(autoChangeSlides, 5e3)
    } else
        document.getElementById("slideshowAutoplayStatus").setAttribute("aria-label", "autoplay paused for slideshow")
}
showSlides(slideIndex),
autoSlide && (slideIndex = 0,
autoChangeSlides()),
document.body.addEventListener("keydown", function(e) {
    var t = e.keyCode;
    39 == t && changeSlides(1),
    37 == t && changeSlides(-1),
    32 == t && (!0 === autoSlide ? autoSlide = !1 : (autoSlide = !0,
    clearInterval(slideshowTimeout),
    autoChangeSlides()))
}),
document.getElementById("slideshow1").addEventListener("mouseenter", function() {
    mouseOverSlide || (autoSlide = !1,
    clearInterval(slideshowTimeout),
    document.getElementById("slideshowAutoplayStatus").setAttribute("aria-label", "autoplay paused for slideshow"),
    mouseOverSlide = !0)
}, !1),
document.getElementById("slideshow1").addEventListener("mouseleave", function() {
    mouseOverSlide && (mouseOverSlide = !1,
    document.getElementById("slideshowAutoplayStatus").setAttribute("aria-label", "autoplay on for slideshow"),
    clearInterval(slideshowTimeout),
    slideshowTimeout = setTimeout(autoChangeSlides, 5e3))
}, !1),
document.getElementById("slideshowAutoplayBtn").onclick = function(e) {
    e.preventDefault();
    var t = document.getElementById("slideshowAutoplayStatus");
    "autoplay paused for slideshow" === document.getElementById("slideshowAutoplayStatus").getAttribute("aria-label") ? (mouseOverSlide = !1,
    t.setAttribute("aria-label", "autoplay on for slideshow"),
    clearInterval(slideshowTimeout),
    autoChangeSlides()) : (autoSlide = !1,
    clearInterval(slideshowTimeout),
    t.setAttribute("aria-label", "autoplay paused for slideshow"),
    mouseOverSlide = !0)
};
