let big = document.querySelector('.big')
let main = document.querySelector('.hidden')

big.addEventListener('click', ()=>{
    if(main.classList.contains('shown')){
        main .classList.remove('shown')
        document.querySelector('.top').classList.remove('topA')
        document.querySelector('.middle').classList.remove('middleA')
        document.querySelector('.bottom').classList.remove('bottomA')
     
     
    
    }else{
        main.classList.add('shown')
        document.querySelector('.top').classList.add('topA')
        document.querySelector('.middle').classList.add('middleA')
        document.querySelector('.bottom').classList.add('bottomA')
    }


   

})






