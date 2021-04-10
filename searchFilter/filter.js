let indicator=document.querySelector(".indicator").children;
let main =document.querySelector(".card__wrapper").children;


for(let i=0;i<indicator.length;i++){
  indicator[i].addEventListener('click',function(){

    for(let j=0;j<indicator.length;j++){
      indicator[j].classList.remove('active');
    }

    this.classList.add('active');
    const displayItems=this.getAttribute('data-filter');
    
    for(let k=0;k<main.length;k++){

      main[k].style.transform='scale(0)';
      main[k].style.display='none';
      /*setTimeout(()=>{
        main[k].style.display='none';
      },500);*/


      if((main[k].getAttribute('data-category')== displayItems) || (displayItems== 'all')){
        console.log(main[k]);
        main[k].style.transform='scale(1)';
        main[k].style.display='block';
       /* setTimeout(()=>{
          main[k].style.display='block';
        },200);*/
        
      }
    }
  })
}





