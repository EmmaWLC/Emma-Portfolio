
// home title animation
    let textWrapper = document.querySelector('.title-1')
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    // searches for non-space characters (\S). The 'g' at the end means to find all instances.

    let textWrapper2 = document.querySelector('.title-2')
    textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    let textWrapper3 = document.querySelector('.title-3')
    textWrapper3.innerHTML = textWrapper3.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    let tl = gsap.timeline();

    tl.to('.title-1 .letter', {opacity: 1, y: '0', clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', stagger: '.03'})
    tl.to('.title-2 .letter', {opacity: 1, y: '0', clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',stagger: '.03'}, "-=.7")
    tl.to('.title-3 .letter', {opacity: 1, y: '0', clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',stagger: '.03'}, "-=.7")
    tl.from('p', {opacity: 0, y: '-50px'}, "-=.7")

//work scroll effect
gsap.registerPlugin(ScrollTrigger);
const wt =document.querySelector('.work-section-title');
gsap.to(wt, {
    scrollTrigger: {
        trigger:wt,
        toggleActions: "play none none none"
    },
    x: 400,
    duration: 1
});


//contact title mouse effect
    let contactTitle = document.querySelector('.contact-title');
    let cursorCircle = document.querySelector('.cursor');

    let cursor = {
        x: 0,
        y: 0
    }

    document.addEventListener('mousemove', (e) => {
        cursor.x = -(e.clientX- window.innerWidth / 2) * .05 ;
        cursor.y = -e.clientY * .05;
       
        contactTitle.style.transform = `translate(${cursor.x}px, ${cursor.y}px)`;
        // cursorCircle.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
    })
