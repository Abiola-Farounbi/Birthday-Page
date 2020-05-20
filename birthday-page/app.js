window.onload=function(){
    document.getElementById('audio').play()
}




var dispaly=document.getElementById('displayMessage');
document.querySelector('.banner').style.display='none'
dispaly.addEventListener('click' ,showMessage)
function showMessage(e){
    document.querySelector('.button').style.display='none';
    document.querySelector('.banner').style.display='block'


    e.preventDefault();
}