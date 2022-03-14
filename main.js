// const tl = gsap.timeline({defaults: {duration: 0.8, ease: "power1.out"}})

// tl.fromTo('header', {y:-120}, {y:0})
// tl.fromTo('nav', {y:-120}, {y:0 , delay:0.1})
// tl.fromTo('.centerText', {x:-1220}, {x:0})
// tl.fromTo('.imgPath', {x:1600}, {x:0}, "<")
// tl.fromTo('.btnScrollDown1', {opacity:0}, {opacity:1, delay:0.3})


ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2500,
    delay: 500
});

ScrollReveal().reveal('.centerText', {delay: 500, orgin: 'top'});
ScrollReveal().reveal('.imgPath', {delay: 800, orgin: 'bottom'});
ScrollReveal().reveal('.frontText2', {delay: 500, orgin: 'bottom'});
ScrollReveal().reveal('.boxPath', {delay: 800, orgin: 'bottom'});
ScrollReveal().reveal('.nameTeam', {delay: 500, orgin: 'bottom'});
ScrollReveal().reveal('.circleImg', {delay: 800, orgin: 'bottom'});
ScrollReveal().reveal('.boxPathPageThree', {delay: 500, orgin: 'bottom'});
ScrollReveal().reveal('.text3', {delay: 800, orgin: 'bottom'});
ScrollReveal().reveal('.photoBox00', {delay: 700, orgin: 'bottom'});