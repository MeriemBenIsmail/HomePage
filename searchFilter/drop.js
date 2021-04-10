var drop=document.querySelector('.dropdown');
var dropList=document.querySelector('.dropdown-list ul');
var dropListItem=document.querySelectorAll('.dropdown-list ul li');

drop.addEventListener('click',(e)=>{
  dropList.classList.toggle('active');

});

dropListItem.forEach(item =>{
  item.addEventListener('click',function(){
    let text=this.textContent;
    document.querySelector('.default-option').textContent=text;
  })
})


