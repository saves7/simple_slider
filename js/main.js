window.onload = function () {

    let btn_next = document.querySelector('input[name=next]');
    let btn_prev = document.querySelector('input[name=prev]');

    btn_next.onclick = function (){
        alert('кнопка next')
    }
    btn_prev.onclick = function (){
        alert('кнопка prev')
    }

}