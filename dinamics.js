var buttonChange=document.querySelector('.change__button');
var color=document.querySelector('.color');
buttonChange.addEventListener('click', changeBackground);
var bodyMain=document.getElementById('body');

function changeBackground(){
        
        var colores =['#F2F7FF', '#F8E796', '#C98B70', '#635270', '#363863', 'rgb(230,72,72)', 'rgb(158,210,198)', 'rgb(166,108,255)', '#31087B'];
        var i,j,pickColor;
        for (i = colores.length; i; i--) {
        j = Math.floor(Math.random() * i);
        pickColor = colores[i - 1];
        colores[i - 1] = colores[j];
        colores[j] = pickColor;
     
        
    }

    bodyMain.style.backgroundColor=pickColor;
    color.textContent=pickColor; 

}


changeBackground();