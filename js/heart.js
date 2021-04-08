var like=document.querySelectorAll('.like');

like.forEach((element) => {
  element.addEventListener('click',()=>{
    element.classList.toggle('heart');
  })
})