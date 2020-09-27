const nav = document.querySelector('.navbar');
window.onscroll = function() {
    var top = window.scrollY;
    if(top>=70){
        nav.classList.add('active');
    }
    else{
        nav.classList.remove('active');
    }
}