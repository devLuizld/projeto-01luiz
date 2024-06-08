let count = 1; /*  slide */
document.getElementById("radio1").cheked = true;

setInterval( function(){
nextImage();
},2000)

function nextImage() {
    count++;
    if (count>3) {
        count = 1;

    

    }

    document.getElementById("radio"+count).checked = true;
}/*  fechamento slide */

var menuItem = document.querySelectorAll('.item-menu')
/* selecionar e ficar no menu o que foi selecioinado */ 
function selectLink(){
menuItem.forEach((item)=> 
item.classList.remove('ativo')
)
this.classList.add('ativo')

}

menuItem.forEach((item)=> 
    item.addEventListener('click', selectLink)
)
/*fechamento */

/* expandir o menu */

var btnExp = document.querySelector('#btn-exp')
var menuSide = document.querySelector('.menu-lateral')

btnExp.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')


})



