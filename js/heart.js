var heart=document.querySelectorAll('#heart');

heart.forEach((element) => {
  element.addEventListener('click',(e)=>{
    console.log(e);
 
    element.parentNode.removeChild(element);
   
    
  })
})