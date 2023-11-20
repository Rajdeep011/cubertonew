Shery.mouseFollower();
const box = document.querySelector(".boxp1");
const box2 = document.querySelector(".boxp2");
const box3 = document.querySelector(".boxp3");
const box4 = document.querySelector(".boxp4");

const boxp1 = document.querySelector(".box1");
const boxp2 = document.querySelector(".box2");
const boxp3 = document.querySelector(".box3");
const boxp4 = document.querySelector(".box4");

const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});

gsap.from("#nleft>img", {
  stagger: .1,
  y: 10,
  duration: 4,
  ease: Power2,
  opacity: 0
});
gsap.from("#nright>h3", {
  stagger: .1,
  y: 10,
  duration: 4,
  ease: Power2,
  opacity: 0
});

gsap.from("#nright>i", {
  stagger: .1,
  y: 10,
  duration: 4,
  ease: Power2,
  opacity: 0
});

gsap.from("#page1>h2", {
    stagger: .1,
    y: 50,
    duration: 2,
    ease: Power2,
    opacity: 0
});

gsap.from("#page1>h1", {
  stagger: .1,
  y: 50,
  duration: 2,
  ease: Power2,
  opacity: 0
});


gsap.from(".imgntext img", {
  y: "70",
  opacity: 0,
  duration: 2,
  ease: Expo,
});



gsap.to("#boxin>#pair1>.boxp1" , {
  scrollTrigger:{
    trigger:`#boxin>#pair1>.boxp1`,
    start:`top bottom`,
    end:`bottom top`,
    scroller:`#main`,
    scrub: 0.2,
},
  y: -130,
  stagger: .9,
  opacity: 1,
  ease: Power4,
  duration: 3
});

gsap.to("#boxin>#pair1>.boxp2" , {
  scrollTrigger:{
    trigger:`#boxin>#pair1>.boxp2`,
    start:`top bottom`,
    end:`bottom top`,
    scroller:`#main`,
    scrub: 0.2,
},
  y: -130,
  stagger: .9,
  opacity: 1,
  ease: Power4,
  duration: 3
});

gsap.to("#boxin>#pair1>.boxp3" , {
  scrollTrigger:{
    trigger:`#boxin>#pair1>.boxp3`,
    start:`top bottom`,
    end:`bottom top`,
    scroller:`#main`,
    scrub: 0.2,
},
  y: -130,
  stagger: .9,
  opacity: 1,
  ease: Power4,
  duration: 3
});

gsap.to("#boxin>#pair1>.boxp4" , {
  scrollTrigger:{
    trigger:`#boxin>#pair1>.boxp4`,
    start:`top bottom`,
    end:`bottom top`,
    scroller:`#main`,
    scrub: 0.2,
},
  y: -130,
  stagger: .9,
  opacity: 1,
  ease: Power4,
  duration: 3
});

  gsap.to("#boxin>#pair2>.box1" , {
    scrollTrigger:{
      trigger:`#boxin>#pair2>.box1`,
      start:`top bottom`,
      end:`bottom top`,
      scroller:`#main`,
      scrub: 0.8,
  },
    y: -130,
    stagger: .9,
    opacity: 1,
    ease: Power4,
    duration: 3
  });

  gsap.to("#boxin>#pair2>.box2" , {
    scrollTrigger:{
      trigger:`#boxin>#pair2>.box2`,
      start:`top bottom`,
      end:`bottom top`,
      scroller:`#main`,
      scrub: 0.8,
  },
    y: -130,
    stagger: .9,
    opacity: 1,
    ease: Power4,
    duration: 3
  });

  gsap.to("#boxin>#pair2>.box3" , {
    scrollTrigger:{
      trigger:`#boxin>#pair2>.box3`,
      start:`top bottom`,
      end:`bottom top`,
      scroller:`#main`,
      scrub: 0.8,
  },
    y: -130,
    stagger: .9,
    opacity: 1,
    ease: Power4,
    duration: 3
  });

  gsap.to("#boxin>#pair2>.box4" , {
    scrollTrigger:{
      trigger:`#boxin>#pair2>.box4`,
      start:`top bottom`,
      end:`bottom top`,
      scroller:`#main`,
      scrub: 0.8,
  },
    y: -130,
    stagger: .9,
    opacity: 1,
    ease: Power4,
    duration: 3
  });

  gsap.to("#text5>h1",{
    scrollTrigger:{
        trigger:`#text5>h1`,
        start:`top bottom`,
        end:`bottom top`,
        scroller:`#main`,
        scrub: 0.7,
    },
    y: -135,
    stagger: .5,
    opacity: 1,
    color:`#fff`,
  });

  gsap.to("#text5>h2",{
    scrollTrigger:{
        trigger:`#text5>h1`,
        start:`top bottom`,
        end:`bottom top`,
        scroller:`#main`,
        scrub: 0.7,
    },
    y: -135,
    stagger: .5,
    opacity: 1,
    color:`#fff`,
  });

  gsap.to("#imgdiv>.love",{
    scrollTrigger:{
        trigger:`#imgdiv>.love`,
        start:`top bottom`,
        end:`bottom top`,
        scroller:`#main`,
        scrub: 0.7,
    },
    y: -100,
    stagger:.5,
    opacity: 1,
    color:`#fff`,
    duration: 1,
  });


// Shery.imageEffect(".style video" , {
//     style: 5,
//     debug: true,
// });

// Shery.imageEffect(".pain video" , {
//   style: 5,
//   debug: true,
// });

function queen(){
  box.addEventListener("mouseover", (e)=>{
    const boxvideo = document.querySelector(".boxp1video");
    boxvideo.play();
})

box.addEventListener("mouseout", (e)=>{
  const boxvideo = document.querySelector(".boxp1video");
  boxvideo.pause();
})

box2.addEventListener("mouseover", (e)=>{
  const boxvideo = document.querySelector(".boxp2video");
  boxvideo.play();
})

box2.addEventListener("mouseout", (e)=>{
const boxvideo = document.querySelector(".boxp2video");
boxvideo.pause();
})

box3.addEventListener("mouseover", (e)=>{
  const boxvideo = document.querySelector(".boxp3video");
  boxvideo.play();
})

box3.addEventListener("mouseout", (e)=>{
const boxvideo = document.querySelector(".boxp3video");
boxvideo.pause();
})

box4.addEventListener("mouseover", (e)=>{
  const boxvideo = document.querySelector(".boxp4video");
  boxvideo.play();
})

box4.addEventListener("mouseout", (e)=>{
  const boxvideo = document.querySelector(".boxp4video");
  boxvideo.pause();
})
}
queen();



function king(){
  boxp1.addEventListener("mouseover", (e)=>{
    const boxvideo = document.querySelector(".box1video");
    boxvideo.play();
  })
  
  boxp1.addEventListener("mouseout", (e)=>{
  const boxvideo = document.querySelector(".box1video");
  boxvideo.pause();
  })
  
  boxp2.addEventListener("mouseover", (e)=>{
  const boxvideo = document.querySelector(".box2video");
  boxvideo.play();
  })
  
  boxp2.addEventListener("mouseout", (e)=>{
  const boxvideo = document.querySelector(".box2video");
  boxvideo.pause();
  })
  
  boxp3.addEventListener("mouseover", (e)=>{
  const boxvideo = document.querySelector(".box3video");
  boxvideo.play();
  })
  
  boxp3.addEventListener("mouseout", (e)=>{
  const boxvideo = document.querySelector(".box3video");
  boxvideo.pause();
  })
  
  boxp4.addEventListener("mouseover", (e)=>{
  const boxvideo = document.querySelector(".box4video");
  boxvideo.play();
  })
  
  boxp4.addEventListener("mouseout", (e)=>{
  const boxvideo = document.querySelector(".box4video");
  boxvideo.pause();
  })
}
king();



gsap.from("#text5 h1", {
  y: "70",
  opacity: 0,
  duration: 2,
  ease: Expo,
});

gsap.from("", {
  y: "70",
  opacity: 0,
  duration: 2,
  ease: Expo,
});

gsap.from("", {
  y: "70",
  opacity: 0,
  duration: 2,
  ease: Expo,
});

Shery.imageEffect("", {
  style: 3,
  config: {"uFrequencyX":{"value":13.22,"range":[0,100]},"uFrequencyY":{"value":7.44,"range":[0,100]},"uFrequencyZ":{"value":35.54,"range":[0,100]},"geoVertex":{"range":[1,64],"value":15.06},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7142885797941747},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.6,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}

});




