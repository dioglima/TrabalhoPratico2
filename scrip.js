  const carro = document.querySelector('.carro');
const jogar = document.querySelector('.jogar')
var pista = 1;


const play = () =>{
    gameboard.style.visibility = 'visible';
}

jogar.addEventListener(onclick,play)


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

let even = document.addEventListener("keydown", direitaEsquerda);



function direitaEsquerda(even){
    if(even.key == 'ArrowRight'){
        movimentRight();
    }
    else if(even.key == 'ArrowLeft'){
        movimentLeft();
    }
}