let indicator=document.querySelector(".indicator").children;
let main =document.querySelector(".card__wrapper").children;


for(let i=0;i<indicator.length;i++){
  indicator[i].addEventListener('click',function(){

    this.classList.add('active');
    const displayItems=this.getAttribute('data-filter');
    
    for(let k=0;k<main.length;k++){
      main[k].classList.toggle('nonactiveCard');

      if((main[k].getAttribute('data-category')==displayItems) /*||displayItems== 'all')*/){
        main[k].classList.remove('nonactiveCard');
        main[k].classList.toggle('activeCard');
      }
    }
  })
}





