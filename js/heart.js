var like=document.querySelectorAll('.like');
var likeNotif=document.querySelector('.like__notif');

like.forEach((element) => {
  element.addEventListener('click',()=>{
    element.classList.toggle('heart');
    likeNotif.style.display='block';
  })
})



