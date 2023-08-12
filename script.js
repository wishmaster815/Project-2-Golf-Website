var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x -10+"px";
    crsr.style.top = dets.y -10+"px";
    blur.style.left = dets.x -150 +"px";
    blur.style.top = dets.y -150 +"px";
})


// GSAP ANIMATIONS SCROLLTRIGGER plugin
gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"100px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers: true,
        start:"top -10%",
        end:"top -11%",
        scrub:0.86
    }
})

// GSAP MAKING BLACK TRANSITION UPON MOVING DOWNWARDS 
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -30%",
        end:"top -100%",
        scrub:2
    }
})