const shark = document.getElementById('shark');
const rock = document.getElementById('rock');
const score = document.getElementById('score');

function jump(){
    shark.classList.add('jump-animation');
    setTimeout(()=>{
        shark.classList.remove('jump-animation');
    }, 500);
}

document.addEventListener('keypress', ()=>{
    if(!shark.classList.contains('jump-animation')){
        jump();
    }
});

setInterval(()=>{
score.innerText++

    const sharkTop =  parseInt(window.getComputedStyle(shark).getPropertyValue('top'));
    const rockLeft =  parseInt(window.getComputedStyle(rock).getPropertyValue('left'));

    if (rockLeft < 0){
        rock.style.display = 'none';
    } else{
        rock.style.display = '';
    }
    
    if(rockLeft < 50 && rockLeft > 0 && sharkTop > 150){
        alert("You got a score of:"+ score.innerText + "\n\n Plag again?")
        location.reload();
    }

},100)