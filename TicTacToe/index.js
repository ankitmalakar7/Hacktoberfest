console.log("Welcome to Tic Tac Toe");
let turn = "X";
let gameOver = false;


//Function to change the turn
const changeTurn = ()=>{
    return turn === "X" ? "0" : "X"
}

//Function to check win
const checkWin = () => {
    let boxtext = document.getElementsByClassName("boxtext");
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) &&(boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[1]].innerText !== "") )
        {
            document.querySelector(".info").innerHTML = boxtext[e[0]].innerText + "  Won"
            gameOver = true;
        }
    })
}


//Game Logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener("click", ()=> {
        if(boxtext.innerHTML === "")
        {
            boxtext.innerHTML = turn;
            turn = changeTurn();
            checkWin();
            if(!gameOver){
                document.querySelector(".info").innerHTML = "Turn for " + turn;
            }    
        }
    })
})

//Add on event listener for reset

reset.addEventListener("click",() =>{
    let boxtext = document.getElementsByClassName("boxtext");
    Array.from(boxtext).forEach((element) =>{
        element.innerHTML = "";
    })
    turn = "X"
    gameOver = false
    document.querySelector(".info").innerHTML = "Turn for " + turn;
})

