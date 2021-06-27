var tl = gsap.timeline({});

tl.to('.screen__item-1', {
        delay: .5,
        duration: .8,
        width: 0,
        ease: Circ.easeOut
    })

    .to('.screen__item-2', {
        duration: .8,
        width: 0,
        ease: Circ.easeOut
    }, "-=.5")

    .to('.screen__item-3', {
        duration: .8,
        width: 0,
        ease: Circ.easeOut
    }, "-=.5")

    .from('.header > img', {
        duration: .3,
        x: -20,
        opacity: 0
    })

    .from('.header__links a', {
        duration: .3,
        x: -20,
        opacity: 0,
        stagger: .1
    })

    .from('.header__tools img', {
        duration: .3,
        x: -20,
        opacity: 0,
        stagger: .2
    })

    .from('hr', {
        duration: .5,
        width: 0
    })

    .from('.intro > img', {
        duration: .3,
        width: 0
    })

    .from('.intro__img-column', {
        duration: .3,
        width: 0
    }, "-=.3")

    .from('h1', {
        duration: .3,
        x: -50,
        opacity: 0,
        ease: Circ.easeOut
    }, "-=.3")

    .from('.intro__text p', {
        duration: .3,
        x: -20,
        opacity: 0
    })

    .from('.intro__text a', {
        duration: .3,
        x: -20,
        opacity: 0
    }, "-=.3")