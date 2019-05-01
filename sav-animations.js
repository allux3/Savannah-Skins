var zeb = Snap("#Zebra");
var original_d = [];
var elements = ["",Snap("#Z1"), Snap("#Z2"), Snap("#Z3"), Snap("#Z4"), Snap("#Z5"), Snap("#Z6"), Snap("#Z7"), Snap("#Z8"), Snap("#Z9"), Snap("#Z10"), Snap("#Z11"), Snap("#Z12"), Snap("#Z13"), Snap("#Z14"), Snap("#Z15"), Snap("#Z16"), Snap("#Z17")];
var cElements = ["",Snap("#C1"), Snap("#C2"), Snap("#C3"), Snap("#C4"), Snap("#C5"), Snap("#Z6"), Snap("#C7"), Snap("#C8"), Snap("#C9"), Snap("#C10"), Snap("#C11"), Snap("#C12"), Snap("#C13"), Snap("#C14"), Snap("#C15"), Snap("#C16"), Snap("#Z17")];

var animating = true;
var animating2 = true;

var path_original = document.getElementById("Z1").getAttribute("d");
var dd = [path_original];

function getOriginalPaths(animal){
     //Gets all original paths from Zebra SVG
    var path;
    var len = document.getElementById(animal).childElementCount;
     for(var i=1; i<=parseInt(len)-1; i++){
        path = document.getElementById(animal[0]+String(i)).getAttribute("d");
        original_d[i] = path;
        }
    return original_d;
};

function animateZebra(original_paths){
    function animationOn(){
        if(animating) {
            //document.getElementById("Zebra").setAttribute("filter", "url(#f1)");
            elements[1].animate({ 
                d: "M606.24,630.74l-7.46-7c-5.24,12.67-6.25,20.27-17,37.09-5.93,9.24-7.69,35-8.2,37.07-.16.64,17.13-11.61,17.13-11.61,1.6-5.95-.08-16.71,3.17-25.46C597.8,650.13,605.34,639.09,606.24,630.74Z", transform: 'translate(0 -0.23)', opacity: '0.7'
                }, 500, mina.easein, animationOff);
            
            elements[2].animate({ 
                d: "M566.45,593.27c-.9,11.42-2.66,25.19-8.05,36.91-5.56,12.08-1.37,29.83.82,42.94.31,1.85,1.51,4.17,3.32,3.69a3.06,3.06,0,0,0,1.77-1.9c.08-.17.15-.34.22-.51,5.84-14.34-.85-24.68,4.16-39.33,3.5-10.25,10.07-22.33,12-28Z" , transform: 'translate(0 -0.23)', opacity: '0.7'
                }, 500, mina.easein, animationOff);
            
            elements[3].animate({ 
                d: "M530.31,623.71c1.8-18.14,11.13-40.89,11.77-53.92l-27.93-25.72c7.61,27.73,6,74.21,2.72,102.92-2.8,24.25,9.11,65.19,6.74,84.45l7.42-5.1C540.06,700.28,526,666.66,530.31,623.71Z", transform: 'translate(0 -0.23)', opacity: '0.7'
                }, 500, mina.easein, animationOff);
                
            elements[4].animate({
                d: "M489,521.37c-4.75-3.7-10-9.92-14.33-14v14.19c0,13.38,0,18.46,0,37.53,0,16.09,19.71,78.68,1.46,193.71a69.43,69.43,0,0,0-.85,10l17.43-11.93c3.21-12.32,3.68-18.39,7.81-40.82,9.76-53.1-10.69-99.15-15.14-138.51C482.58,546.65,489.32,522.92,489,521.37Z", transform: 'translate(0 -0.23)', opacity: '0.7'
                }, 500, mina.easein, animationOff);
                
            elements[5].animate({
                d: "M466.89,607c8.26-27.05-4.44-48.16-14-90-6.42-28.1-15.58-37.69-16.52-45.88l-42.62-40.19c19.52,20.91,28.36,64.88,28.36,64.88,8.3,37,26.76,27.7,24.12,87.87-2.06,46.81,12.73,85.91,11.41,96.59-.15,1.21.29,1.52.9.26C468.42,660.1,459.28,632,466.89,607Z", transform: 'translate(0 -0.23)', opacity: '0.7'}, 500, mina.easein, animationOff);
   
            elements[6].animate({
                d: "M420.47,800.06l24-16s-10-95.11-2.92-125.11c7.56-31.87-17.75-59.34-21.61-50.11s22.18,89.41,2,113.9C405.54,742.73,420.47,800.06,420.47,800.06Z" , transform: 'translate(0 -0.23)', opacity: '0.7'}, 500, mina.easein, animationOff);
      
             elements[7].animate({
                d: "M379.84,514c0-.19,0-.37-.06-.55C378,498,359.05,483.73,357.23,468.35c-1.15-9.65-6.84-28.12-9.61-37.44-7.19-24.17-9.77-33.76-20.82-54-2.29,1.41-12.79,5.93-13.36,8.43-.64,2.82,13.89,25,27.75,78.48,3.33,12.87,25.07,40.59,33.33,51,1.16,1.47,3.34,2.92,4.69,1.62A3.06,3.06,0,0,0,379.84,514Z", transform: 'translate(0 -0.23)', opacity: '0.7'}, 500, mina.easein, animationOff);
                    
             elements[8].animate({
                d: "M273.14,407.09s55.34,60.11,68,127.71c8.52,45.33,41.75,68.6,48.15,109.37,6.5,41.42-1.51,41.82-16.17,98.9-19.22,74.8,12.53,13.82,13.09,7.9.79-8.25-2.06-44,13.75-77.31,17.72-37.39,1.32-107.87-16.32-122.15-39.12-31.67-61.46-73-66.36-109.14-3-22.31-25.55-45.23-25.55-45.23Z", transform: 'translate(0 -0.23)', opacity: '0.7'}, 500, mina.easein, animationOff);
            
            elements[9].animate({
                d: "M357.51,701.34s-24.36,76.07-18.74,112.79-5.2,44-5.2,44l23.94-16s-3.78-27.74,2.47-70S365.75,681.43,357.51,701.34Z" , transform: 'translate(0 -0.23)', opacity: '0.7'}, 500, mina.easein, animationOff);
                
            elements[10].animate({
                d: "M224.8,741.7C208.2,766,192.3,793.9,180,821c-10,14-20,68.7-20,108.8c0,20.2,0,43.3,0,43.3l130.9-87.4c0,0,4.8-51.5,25.5-94.1c16.2-33.3,27.2-59,34.2-105.4c2.6-13.2-0.8-48.6-6-61.4c-14.7-36.7-43.4-105.4-47.3-110.9c-17.2-24.3,31.7,80.3,19,177.9c-7,54-54.5,145.3-67.3,151c-7.8,3.5,0-57,30-126s9.4-90-10-122s-45.1-88.6-54-88c-8.8-9.2,6,40.1,35,143C261.4,679.8,225.6,740.6,224.8,741.7z", transform: 'translate(0 -0.23)', opacity: '0.7'}, 500, mina.easein, animationOff);
                
            elements[11].animate({
                d: "M232.52,429.25l29.88-16.12s18.6,36,15.27,77.27,23,50.94,27,78.94c3.87,27.12,11,68.36,1.07,88.78-.61,1.26-1,.95-.9-.26C306.16,647.17,307.69,594,284,546c-12.86-26-30.13-44.33-37-63.74C239.54,461.44,242.62,440.07,232.52,429.25Z" , transform: 'translate(0 -0.23)', opacity: '0.7'}, 500, mina.easein, animationOff);
                
            elements[12].animate({
                d: "M145.6,475.6c0,0-4.5,37.4,18,78c22.5,40.5,30.5,81,27,120c-13.5,39-26,68.7-45.4,153c-13.6,59.5-12,86.9-10.1,97.5c0.3,1.4,2.2,1.3,6.4,0c6.1-26.6,22.4-137.4,47.4-163.7c28.5-30,71.8-102.9,56.6-119.7c-33.9-37.6-67.2-83.3-60.6-119.2c4.1-22.1-12.6-57.5-12.6-57.5L145.6,475.6z" , transform: 'translate(0 -0.23)', opacity: '0.7'}, 500, mina.easein, animationOff);
                
            elements[13].animate({
                d: "M108.3,731.9c-13.6,45.3-20,174.5-13.7,196.5c3.3,11.9-18.2,56-19.6,75.8c-0.4,6.1-0.4,27.7-0.4,27.7l44.2-29.8c1.4-2.3,1.6-4.2,0.7-5.2c-4.6-23.1-21.8-102,1.7-139.5C137,768.5,171,647,163,616.3c-2.5-9.5-5.2-19.7-18.3-46.1c-8.2-16.5-7,5.4-7,5.5c0.4,16.5-1.2,30-1.8,46.5c-0.7,8.5-2.1,37.4-6.9,45.3C125.7,679.8,111.2,704.6,108.3,731.9z", transform: 'translate(0 -0.23)', opacity: '0.8'}, 500, mina.easein, animationOff);
                
            elements[14].animate({
                d: "M70.2,516.08S86.12,587,81.63,626s10,83.84,10,83.84,13.62-23.26,3.12-90.76,24.5-128.72,24.5-128.72Z" , transform: 'translate(0 -0.23)', opacity: '0.7'}, 500, mina.easein, animationOff);
                
            elements[15].animate({
                d: "M40.2,1051.4c-0.3,0.9-4.6,0.9-1.8,0c-4.1-25.9-21.4-88.7-6.8-137.8c26.5-45.5,16.8-195,7.7-226.5c-9.2-31.5-12-147.1-12-147.1L52,524.5c0,0,10.5,35,14.2,124.6c0,0-14.6,230-10.1,273C54.1,970.7,34.8,1036.2,40.2,1051.4z" , transform: 'translate(0 -0.23)', opacity: '0.8'}, 500, mina.easein, animationOff);
             
            elements[16].animate({
                d: "M16.35,685.89C12.67,668.78,0,603,0,603v92.67s12.32,42.09,10.19,92.64,3.23,80.4-4.74,98.4C2,894.49.81,911.61.74,924.67c-.08,15,.23,29.4.23,29.4s13.41-8.82,19.18-85.52,12.5-84.94,7.11-129.4C27.25,739.15,16.52,686.67,16.35,685.89Z", transform: 'translate(0 -0.23)', opacity: '0.7'}, 500, mina.easein, animationOff);
            
            elements[17].animate({
                d: "M13.9,1047.72c-1.57,8.27-8.79,25.62-8.43,27.73a.91.91,0,0,0,1.4.61l11.65-7.78a.9.9,0,0,0,.38-.95c-.66-3,2.06-15,3.58-30.09,1.45-14.38-8.55-31-11.26-38.38a.91.91,0,0,0-1.76.33C9.7,1011.14,17.45,1029,13.9,1047.72Z"  , transform: 'translate(0 -0.23)', opacity: '0.7'}, 500, mina.easein, animationOff);                              
        
            };
        };


        function animationOff() {
            
            elements[1].animate({
               d: original_paths[1] , transform: 'translate(0 -0.23)', opacity: '1'
               }, 500, mina.easeinout, animationOn);
              
            elements[2].animate({
               d: original_paths[2], transform: 'translate(0 -0.23)', opacity: '1'
               }, 500, mina.easeinout, animationOn);

            elements[3].animate({
               d: original_paths[3] , transform: 'translate(0 -0.23)', opacity: '1'
               }, 500, mina.easeinout, animationOn);
            
            elements[4].animate({
               d: original_paths[4] , transform: 'translate(0 -0.23)', opacity: '1'
               }, 500, mina.easeinout, animationOn);
              
            elements[5].animate({
               d: original_paths[5] , transform: 'translate(0 -0.23)', opacity: '1'
               }, 500, mina.easeinout, animationOn);
            
            elements[6].animate({
               d: original_paths[6] , transform: 'translate(0 -0.23)', opacity: '1'
               }, 500, mina.easeinout, animationOn);
              
            elements[7].animate({
               d: original_paths[7] , transform: 'translate(0 -0.23)', opacity: '1'
               }, 500, mina.easeinout, animationOn);
            
            elements[8].animate({
               d: original_paths[8] , transform: 'translate(0 -0.23)', opacity: '1'
               }, 500, mina.easeinout, animationOn);
            
            elements[9].animate({
               d: original_paths[9] , transform: 'translate(0 -0.23)', opacity: '1'
               }, 500, mina.easeinout, animationOn);
              
            elements[10].animate({
               d: original_paths[10] , transform: 'translate(0 -0.23)', opacity: '1'
               }, 500, mina.easeinout, animationOn);
            
            elements[11].animate({
               d: original_paths[11] , transform: 'translate(0 -0.23)', opacity: '1'
               }, 500, mina.easeinout, animationOn);
            
            elements[12].animate({
               d: original_paths[12] , transform: 'translate(0 -0.23)', opacity: '1'
               }, 500, mina.easeinout, animationOn);
            
            elements[13].animate({
               d: original_paths[13] , transform: 'translate(0 -0.23)', opacity: '1'
               }, 500, mina.easeinout, animationOn);
              
            elements[14].animate({
               d: original_paths[14] , transform: 'translate(0 -0.23)', opacity: '1'
               }, 500, mina.easeinout, animationOn);
            
            elements[15].animate({
                   d: original_paths[15] , transform: 'translate(0 -0.23)', opacity: '1'
               }, 500, mina.easeinout, animationOn);
             
            elements[16].animate({
               d: original_paths[16] , transform: 'translate(0 -0.23)', opacity: '1'
               }, 500, mina.easeinout, animationOn);
             
            elements[17].animate({
               d: original_paths[17] , transform: 'translate(0 -0.23)', opacity: '1'
               }, 500, mina.easeinout, animationOn);
        };
  
        zeb.hover(function() { animating=true;
                              var z = document.getElementById("Zebra");
                              //z.setAttribute("filter", "url(#f2)");
                              z.style.cursor = "pointer";
                              animationOn() }, function() { animating=false
                                                            //document.getElementById("Zebra").removeAttribute("filter");
                                                          });
    

};


function animCheetah(){
    var cDots = document.querySelectorAll(".cDot");
    console.log(cDots);
        for (var i = 0; i < 120; i++) {
                var c = cDots[i];
                console.log(c);
                c.keyframes = [{
                    opacity: 0.3,
                    transform: "translate3d(" + 1 * i + "px, 0px, 0px)"
                  }, {
                    opacity: 1,
                    transform: "translate3d(" + 2 * i + "px, "+ 30 * i + "px, 0px)"
                  }];

            c.animProps = {
            duration: 100 + 20 * i,
            easing: "ease-out",
            iterations: 1
          }

          var animationPlayer = c.animate(c.keyframes, c.animProps);
        }
        
    };

function animOryx(){
    document.getElementById("Oryx").style.cursor = "pointer";
    
    TweenMax.staggerFrom(".OWhite", 1, {scale:0.5, opacity:0, delay:0.3, ease:Elastic.easeOut}, 0.3);
    TweenMax.staggerFrom(".OBrown", 1, { y:10, opacity:1, delay:1, ease:Elastic.easeOut}, 0.3);
        
};

//transform: rotate3d(1, 30, 1, 25deg);

document.addEventListener("DOMContentLoaded", function(event) {
    var origin_paths = getOriginalPaths("Zebra");
    var oryx = document.getElementById("Oryx");
    animateZebra(origin_paths); 
    var cheetah = document.getElementById("Cheetah");
    var turtoise = document.getElementById("Turtoise");
    cheetah.addEventListener("mouseenter", animCheetah);
    oryx.addEventListener("mouseenter", animOryx);
    turtoise.addEventListener("mouseover", event =>{
        
        turtoise.style.cursor = "pointer";
        if(event.target.parentNode.classList.contains('TPiece')){
            var parent = event.target.parentNode; 
            //parent.setAttribute("filter", "url(#f1)");
            parent.style.cursor = "pointer";
            var child = parent.childNodes; 
            child[0].setAttribute("class", "A");
            //child[0].setAttribute("filter", "url(#f1)");
            child[1].setAttribute("class", "B");
            //child[1].setAttribute("filter", "url(#f1)");
            child[2].setAttribute("class", "C");
            //child[2].setAttribute("filter", "url(#f1)");
            child[3].setAttribute("class", "D");
            //child[3].setAttribute("filter", "url(#f1)");
            child[4].setAttribute("class", "E");
            //child[4].setAttribute("filter", "url(#f1)");
            child[5].setAttribute("class", "F");
            //child[5].setAttribute("filter", "url(#f1)");
            child[6].setAttribute("class", "G");
            //child[6].setAttribute("filter", "url(#f1)");
            parent.addEventListener("mouseout", event =>{
                child[0].setAttribute("class", "G");
                //child[0].removeAttribute("filter");
                child[1].setAttribute("class", "F");
                //child[1].removeAttribute("filter");
                child[2].setAttribute("class", "E");
                //child[2].removeAttribute("filter");
                child[3].setAttribute("class", "D");
                //child[3].removeAttribute("filter");
                child[4].setAttribute("class", "C");
                //child[4].removeAttribute("filter");
                child[5].setAttribute("class", "B");
                //child[5].removeAttribute("filter");
                child[6].setAttribute("class", "A"); 
                //child[6].removeAttribute("filter");
                 });
            }
        //turtoise.removeAttribute("filter");
        });
});

    

        
        

