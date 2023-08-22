var animate = gsap.timeline();

animate.from("nav",{
    y:-200,
    opacity:0,
    duration:1,
})
.from(".left h1",{
    y:100,
    opacity:0,
    duration:0.5,
},'same')
.from(".left p",{
    y:100,
    opacity:0,
    duration:0.5,
})
.from(".btn",{
    y:100,
    opacity:0,
    duration:0.5,
})
.from("video",{
    y:100,
    opacity:0,
    duration:0.5,
},'same')