new fullpage ('#fullpage', {
    autoScrolling: true,
    navigation: true,
    // onLeave: (origin, destination, direction)=> {
    //     const section = destination.item;
    //     const title = section.querySelector("h1");
    //     const t1 = new TimelineMax({ delay: 0.5 });
    //     t1.fromto(title, 0.5, { y: "50", opacity:0 }, { y: 0, opacity:1 });
    // }
    // Do the same for the texts, I will use tweenmax and timelinemax, if only I could get the link to the cdn (me crying right now)
});