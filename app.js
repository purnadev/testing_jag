document.getElementById('one').style.color='var(--red)';
document.getElementById('two').style.color='var(--primary-green)';
document.getElementById('three').style.color='var(--blue)';
document.getElementById('four').style.color='var(--orange)';
document.getElementById('five').style.color='var(--primary-bagni)';
document.getElementById('six').style.color='var(--primary-pink)';
let ttl = gsap.timeline();
let ttl2 = gsap.timeline();
ttl
.from('#coll_logo', {
    opacity: 0,
    y: 25,
    duration:2

})
.from('#coll_text', {
    
    opacity:0,
    onStart: function () {
        $('#coll_text').textillate({
            in: {
                effect: 'fadeInUp' 
            }
            
        });
    }
    
    
})
.from('#pre_text',{
opacity:0,
    onStart: function () {
        $('#pre_text').textillate({
            in: {
                effect: 'fadeInUp' 
            }
            
        });
    },
    delay:3.2
})
.from('#jag_dp',{
opacity:0,
    y:20,
    delay:0.5,
    duration:2
})


// right
ttl2
.from('#one',{
    onStart:function(){
        $('#one').textillate({
            in: {
                effect: 'fadeInUp', 
                callback:function(){
                    $('#one').textillate('out')
                }
            },
            out:{
                effect:'fadeOutUp'
            }
            
        });
    }
})
.from('#two',{
    opacity:0,
    delay:2,
    onStart:function(){
        $('#two').textillate({
            in: {
                effect: 'fadeInUp', 
                callback:function(){
                    $('#two').textillate('out')
                }
            },
            out:{
                effect:'fadeOutUp'
            }
            
        });
    }
})
.from('#three',{
    opacity:0,
    delay:2,
    onStart:function(){
        $('#three').textillate({
            in: {
                effect: 'fadeInUp', 
                callback:function(){
                    $('#three').textillate('out')
                }
            },
            out:{
                effect:'fadeOutUp'
            }
            
        });
    }
}).from('#four',{
    opacity:0,
    delay:2,
    onStart:function(){
        $('#four').textillate({
            in: {
                effect: 'fadeInUp', 
                callback:function(){
                    $('#four').textillate('out')
                }
            },
            out:{
                effect:'fadeOutUp'
            }
            
        });
    }
}).from('#five',{
    opacity:0,
    delay:2,
    onStart:function(){
        $('#five').textillate({
            in: {
                effect: 'fadeInUp', 
                callback:function(){
                    $('#five').textillate('out')
                }
            },
            out:{
                effect:'fadeOutUp'
            }
            
        });
    }
}).from('#six',{
    opacity:0,
    
    delay:2,
    onStart:function(){
        $('#six').textillate({
            in: {
                effect: 'fadeInUp'
                
            },
            out:{
                effect:'fadeOutUp'
            }
            
        });
    }
}).to('#loader',{
   opacity:0,
   duration:1.5,
   delay:1
}).from('#main',{
    opacity:0,
    display:"none",
    duration:0.7
}).from('#month',{
     opacity:0,
   y:20,
    duration:0.5
}).from('#date_d',{
    opacity:0,
     onStart: function () {
        $('#date_d').textillate({
            in: {
                effect: 'fadeInLeft' 
            }
            
        });
    },
    duration:0.5

}).from('#gcect_text',{
    opacity:0,
    x:-20,
    duration:1
}).from('#gcect_ev',{
    opacity:0,
    
    x:-20

    
}).from('#jam_rr',{
    opacity:0,
    
    x:20

    
})





document.getElementById('menubar').addEventListener('mouseover',()=>{
    document.getElementById('m').style.transition = "all 0.6 ease-in";
    document.getElementById('m').style.color ="rgba(0, 0, 0, 0.5)";
    
})
document.getElementById('menubar').addEventListener('mouseout',()=>{
    document.getElementById('m').style.transition = "all 0.6 ease-in";

    document.getElementById('m').style.color ="rgba(0, 0, 0, 0.7)";
})


// let ttl3 = gsap.timeline();
// ttl3.from('#imggs1',{
    
//     opacity:0,
//     x:20,
//     duration:2


    
// }).from('#imggs2',{
    
//     x:20,
//     duration:2


    
// })