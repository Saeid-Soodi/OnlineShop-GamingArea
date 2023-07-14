let SlideIndex =1;
let remainingTime=70000;
//counter down for bargain
function setTime(){
    if(remainingTime==0) return;
    let h=Math.floor(remainingTime/3600);
    let m = Math.floor((remainingTime%3600)/60);
    let s = (remainingTime%3600)%60;
    document.querySelector('#hour').innerHTML=h;
    document.querySelector('#min').innerHTML=m;
    document.querySelector('#sec').innerHTML=s;
}
setInterval(() => {
    remainingTime-=1;
    setTime();
}, 1000);

// Slicer function and it's timer.

function SetSlide(input , index){
    SlideIndex = index;
    let item = document.querySelector('#'+input);
    let Slides = [...document.querySelector('.slides').children];
   Slides.forEach((element)=>{
    element.classList.remove('active');
   })
    item.classList.add('active');
}
setInterval(() => {
    SlideIndex+=1;
    if(SlideIndex>4){
        SlideIndex=1;
    }
    SetSlide('s'+SlideIndex,SlideIndex);
}, 4500);