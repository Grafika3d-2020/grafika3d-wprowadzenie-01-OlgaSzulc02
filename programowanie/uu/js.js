const eldiv=document.querySelector('.car')

document.addEventListener('mousemove', function(e){
    console.log(e.clientX)
    console.log(e.clientY)
    eldiv.style.top=e.clientY + 'px';
    eldiv.style.left=e.clientX + 'px';
    if(e.clientX<900){
        if(e.clientX>300){
           e.stopPropagation(e.clientX);
        }
    }
})
