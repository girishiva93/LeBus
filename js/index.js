const tl = gsap.timeline();

var line1 = document.querySelector(".line1");
var line2 = document.querySelector(".line2");
var line3 = document.querySelector(".line3");

gsap.to(".container", 0, {css:{visibility:'visible'}});
tl.to(".black", 1.6, {height:0, stagger: .4}, 'Start');

tl.staggerFrom([line1, line2, line3], 1, {
    opacity: 0,
    y: 44,
    delay: .8
}, .15, 'Start')
.from(".company_name", 1 , {
    opacity: 0,
    y:44,
})