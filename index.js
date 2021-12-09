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

    // var myAnimation = new hoverEffect({
    //     parent: document.querySelector('.work-img1'),
    //     intensity: 0.3,
    //     image1: '/img/test1.jpg',
    //     image2: './img/shopline.png',
    //     displacementImage: './img/switch1.png'
    // });
    // var myAnimation = new hoverEffect({
    //     parent: document.querySelector('.work-img2'),
    //     intensity: 0.3,
    //     image1: './img/here.jpg',
    //     image2: './img/here2.jpg',
    //     displacementImage: 'https://assets.codepen.io/2621168/dis.png'
    // });
    // var myAnimation = new hoverEffect({
    //     parent: document.querySelector('.work-img3'),
    //     intensity: 0.3,
    //     image1: './img/texture.jpg',
    //     image2: './img/blog2.jpg',
    //     displacementImage: 'https://assets.codepen.io/2621168/dis.png'
    // });

    let img1 = document.querySelector('.work-img1');
    let img2 = document.querySelector('.work-img2');
    let img3 = document.querySelector('.work-img3');
    let cursorCircle = document.querySelector('.cursor');

    let cursor = {
        x: 0,
        y: 0
    }
    let cursor2 = {
        x: 0,
        y: 0
    }
    let cursor3 = {
        x: 0,
        y: 0
    }

    document.addEventListener('mousemove', (e) => {
        cursor.x = -e.clientX * .1;
        cursor.y = -e.clientY * .1;
        //img is on the left side, let the mouse reference point shift to right side

        // img1.style.transform = `translate(${cursor.x}px, ${cursor.y}px)`;
        // img2.style.transform = `translate(${cursor.x}px, ${cursor.y}px)`;
        // img3.style.transform = `translate(${cursor.x}px, ${cursor.y}px)`;
        // cursorCircle.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
    })
