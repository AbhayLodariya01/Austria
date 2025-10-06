gsap.from(".item1 img,.item2 img,.item3 img,.item4", {
    opacity: 0, //from 0 to 1  
    duration: 2, //Time 
    y: 30, //y axis thi
    delay: 1,
    stagger: 1,  // stagger means :if you use so many similar tags more than one Time that can help to run one after anothers  ex:h1 tags is used in 3 times that run one after another
})
gsap.from(".searchcontainer,.labels ,.inputs,.labelfordate,.labelforday ,.rightside button,.totalbalcon,.vatcon,.finaltotal", {
    opacity: 0, //from 0 to 1  
    duration:0.7, //Time 
    y: 30, //y axis thi
    delay: 2,
    stagger:0.5,  // stagger means :if you use so many similar tags more than one Time that can help to run one after anothers  ex:h1 tags is used in 3 times that run one after another
})
gsap.from(".mainImg img", {
    opacity: 0, //from 0 to 1  
    duration: 5, //Time 
    delay: 1,
    z: 100,
})
gsap.from(".line", {
    height: 0,
    duration:7,
    delay: 1,
})
gsap.from("h2, h5", {
    opacity: 0,
    y:30,
    duration:1,
    delay: 1,
    stagger: 0.2
})
gsap.from(".rightline", {
    width: 0,
    duration:5.5,
    delay: 1,
})