
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

//snap effect
    ScrollTrigger.defaults({
        toggleActions: "restart none none none",
        scroller: ".scroll-to-next-part"
      });
//work scroll effect

let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".section2-0",
        toggleActions: "restart pause restart pause",
        start: "top center", 
        markers: true
      }
});

tl2.from('.work-section-title1',{ x: -200, opacity: 0, duration: 1.5 })
    .from('.work-detail1',{ x: -200, opacity: 0, duration: 1 },"<+=.5")
    .from('.work-title1',{ x: 200, opacity: 0, duration: 1 },"-=1")
    .from('.work-img1',{ x: 200, opacity: 0, duration: 1.5 },"<+=.3")


let tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".section2-1",
        toggleActions: "restart pause restart pause",
        start: "top center", 
        markers: true
      }
});

tl3.from('.work-section-title2',{ x: -200, opacity: 0, duration: 1.5 })
    .from('.work-detail2',{ x: -200, opacity: 0, duration: 1 },"<+=.5")
    .from('.work-title2',{ x: 200, opacity: 0, duration: 1 },"-=1")
    .from('.work-img2',{ x: 200, opacity: 0, duration: 1.5 },"<+=.3")

let tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".section2-2",
        toggleActions: "restart pause restart pause",
        start: "top center", 
        markers: true
      }
});

tl4.from('.work-section-title3',{ x: -200, opacity: 0, duration: 1.5 })
    .from('.work-detail3',{ x: -200, opacity: 0, duration: 1 },"<+=.5")
    .from('.work-title3',{ x: 200, opacity: 0, duration: 1 },"-=1")
    .from('.work-img3',{ x: 200, opacity: 0, duration: 1.5 },"<+=.3")

   

//contact title mouse effect
    let contactTitle = document.querySelector('.contact-title');
    // let cursorCircle = document.querySelector('.cursor');

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
