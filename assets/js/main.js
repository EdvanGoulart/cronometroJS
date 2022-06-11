const watch = document.querySelector('.watch');
const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const zero = document.querySelector('.zero');

function getTimeFromSeconds(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });

}

let seconds = 0;
let timer = 0;

function startWatch(){
    timer = setInterval(function() {
        seconds++;
        watch.innerHTML = getTimeFromSeconds(seconds);
    }, 1000);
}



document.addEventListener('click',function(event) {
    const el = event.target; // O que eu clicar

    if(el.classList.contains('start')){ 
        watch.classList.remove('paused');
        clearInterval(timer); //Para ao chama-la, não criar vários intervalos de tempo.
        startWatch();
    }

    if(el.classList.contains('pause')){
        if(seconds != 0){
            clearInterval(timer);
            watch.classList.add('paused');
        }      
    }

    if(el.classList.contains('zero')){
        clearInterval(timer);
        watch.innerHTML = "00:00:00";
        watch.classList.remove('paused');
        seconds = 0; //Para zerar os segundos, se não toda vez que iniciar ela vai voltar de onde pausou.
    }
    
});
