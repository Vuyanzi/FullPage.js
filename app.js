new fullpage ('#fullpage', {
    // scrolling
    autoScrolling: true,
    css3: true,
    scrollingSpeed: 700,
    autoScrolling: true,
    fitToSection: true,
    fitToSectionDelay: 1000,
    easing: 'easeInOutCubic',
    easingcss3: 'ease',
    // navigation
    navigation: true,
    navigationTooltips: ['Home', 'Articles', 'Volunteers', 'Social','Projects'],
    showActiveTooltip: true,
    sectionsColor: ['#E0EBE8', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
    menu: '#menu',
    //Accessibility
    keyboardScrolling: true,
    animateAnchor: true,
    recordHistory: true,

    // onLeave: (origin, destination, direction)=> {
    //     const section = destination.item;
    //     const title = section.querySelector("h1");
    //     const t1 = new TimelineMax({ delay: 0.5 });
    //     t1.fromto(title, 0.5, { y: "50", opacity:0 }, { y: 0, opacity:1 });
    // }
    // Do the same for the texts, I will use tweenmax and timelinemax, if only I could get the link to the cdn (me crying right now)
});