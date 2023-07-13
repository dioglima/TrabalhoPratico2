const carro = document.querySelector('.carro');
const jogar = document.querySelector('.jogar');
const pedra = document.querySelector('.pedra');
const gasolina = document.querySelector('.gasolina');
var pista = 1;
var contador = 0;
let pontos = 100;





function iniciarJogo(){
    const gameboard = document.querySelector('.game-board');
    gameboard.style.visibility = 'visible';
    movimentoObstaculo();
    pontos = 100;
    
}

const play = () =>{
    iniciarJogo();
   
}

jogar.addEventListener('click',play);


const loop = setInterval(()=>{
    const pedraPosition = pedra.offsetTop;
    const gasolinaPosition = gasolina.offsetTop
    console.log(pedra.offsetTop);
    
  
        if(pedraPosition >= 600  && pista == 4 ){
            retirarPontuacao();
            
            
        }

        if(gasolinaPosition >= 600 && pista == 2){
            adicionarPontuacao();
        }

        if(pontos == 0 ){
            pararJogo();
        }
        
        

    
},10);


function adicionarPontuacao() {
    pontos = pontos + 10;
    document.getElementById('pontos').innerText = 'Pontuação: ' + pontos;
    
   
  }

  function retirarPontuacao() {
    pontos = pontos - 5;
    document.getElementById('pontos').innerText = 'Pontuação: ' + pontos;
    
   
  }


const movimentRight = () =>{
    
    switch(pista){
        case 1:
            carro.classList.add('carro-movimento-1to2');
            setTimeout(() =>{
                carro.classList.remove('carro-movimento-1to2');
            },500)
            carro.style.left = '25%';
            pista = 2;
            break
        case 2:
            carro.classList.add('carro-movimento-2to3');
            setTimeout(() =>{
                carro.classList.remove('carro-movimento-2to3');
            },500)
            carro.style.left = '50%';
            pista = 3; 
            break 
        case 3:
            carro.classList.add('carro-movimento-3to4');
            setTimeout(() =>{
                carro.classList.remove('carro-movimento-3to4');
            },500)
            carro.style.left = '75%';
            pista = 4; 
            break 
    }

}


const movimentLeft = () =>{
    
    switch(pista){
        case 4:   
            carro.classList.add('carro-movimento-4to3');
            setTimeout(() =>{
                carro.classList.remove('carro-movimento-4to3');
            },500)
            carro.style.left = '50%';
            pista = 3;
            break
        case 2:
            carro.classList.add('carro-movimento-2to1');
            setTimeout(() =>{
                carro.classList.remove('carro-movimento-2to1');
            },500)
            carro.style.left = '0%';
            pista = 1; 
            break 
        case 3:
            carro.classList.add('carro-movimento-3to2');
            setTimeout(() =>{
                carro.classList.remove('carro-movimento-3to2');
            },500)
            carro.style.left = '25%';
            pista = 2; 
            break 
    }

}

function movimentoObstaculo(){
    pedra.style.animation = 'gasolina 9500ms infinite';
    gasolina.style.animation = 'gasolina 4000ms infinite';
}

function pararJogo(){
    pedra.style.animation = 'none';
    gasolina.style.animation = 'none';
    restart = document.getElementById('restart-btn');
    gameOver = document.getElementById('game-over');
    
    restart.style.visibility = 'visible';
    gameOver.style.visibility = 'visible';
}




let even = document.addEventListener("keydown", direitaEsquerda);



function direitaEsquerda(even){
    adicionarPontuacao()
    if(even.key == 'ArrowRight'){
        movimentRight();
    }
    else if(even.key == 'ArrowLeft'){
        movimentLeft();
    }
}


