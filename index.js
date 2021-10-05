const tl = gsap.timeline({ default: { ease: Power1.easeOut } })

tl.to('.scan-bar', { translateX: '310px', duration: 1 })
    .to('.scan-bar', { translateX: '0px', duration: 1 })
    .to('.scan-bar', { translateX: '310px', duration: 1 })
    .from('.overlay', { opacity: 0, duration: 1 }, '-=1')
    .from('.result', { translateY: '600px', duration: 1 }, '-=1.4')
    .to('.result', { translateY: '600px', duration: 1, delay: 0.5 })
    .to('.overlay', { opacity: 0, duration: 1 }, '-=1')
    .to('.scan-bar', { translateX: '0px', duration: 1 }, '-=1')

    