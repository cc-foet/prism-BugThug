const playerOneBtn = document.querySelector("#player1btn");
const playerTwoBtn = document.querySelector("#player2btn");
const resetBtn = document.querySelector("#reset");
const playerOneScore = document.querySelector("#playerOneScore");
const playerTwoScore = document.querySelector("#playerTwoScore");
const input = document.querySelector("#maxScore");
playerOneScore.value = "0";
playerTwoScore.value = "0";
let scoreOfOne = 0;
let scoreOfTwo = 0;
let winner = false ;

function scoreIncreaserbtn1(){
    scoreOfOne = parseInt(playerOneScore.value);
    if(playerOneScore.value < input.value && winner === false ){
        scoreOfOne += 1 ;
    }
    playerOneScore.value = `${scoreOfOne}`;
    playerOneScore.innerText = `${playerOneScore.value}`;
}
function scoreIncreaserbtn2(){
    scoreOfTwo = parseInt(playerTwoScore.value);
    if(playerTwoScore.value < input.value && winner === false ){
        scoreOfTwo += 1 ;
    }
    playerTwoScore.value = `${scoreOfTwo}`;
    playerTwoScore.innerText = `${playerTwoScore.value}`;
}


playerOneBtn.addEventListener('click', scoreIncreaserbtn1);
playerTwoBtn.addEventListener('click', scoreIncreaserbtn2);

function reset() {
    scoreOfOne = 0;
    scoreOfTwo = 0;
    input.value = "";
}

playerOneBtn.addEventListener('click' , function(e){
        console.log("btn 1 clicked")
        if(playerOneScore.value == input.value){
            if(playerOneScore.value < playerTwoScore.value){
                playerOneScore.style.color = "red";
                playerTwoScore.style.color = "green";
            }
            else {
                    playerOneScore.style.color = "green";
                    playerTwoScore.style.color = "red" ;
            }
        }
        if(playerOneScore.value === input.value){
            playerOneBtn.classList.add("disabled");
            playerTwoBtn.classList.add("disabled");
            winner = true ;
        }
})
playerTwoBtn.addEventListener('click' , function(e){
    console.log("btn 2 clicked");
    if(playerTwoScore.value == input.value ){
        if(playerOneScore.value < playerTwoScore.value){
            playerOneScore.style.color = "red";
            playerTwoScore.style.color = "green";
        }
        else {
                playerOneScore.style.color = "green";
                playerTwoScore.style.color = "red" ;
        }
    }
    if(playerTwoScore.value === input.value){
        playerOneBtn.classList.add("disabled");
        playerTwoBtn.classList.add("disabled");
        winner = true ;
    }
})

resetBtn.addEventListener('click' , function(e){

    if(`${playerOneScore.value}` > `${playerTwoScore.value}`){
        console.log("Player One Wins")
        alert("Player One Wins")
    }
    else{
        console.log("Player two Wins")
        alert("Player two Wins")

    }
    
    console.log("btn reset clicked");
    playerOneScore.value = "0";
    playerTwoScore.value = "0";
    input.value = "";
    playerOneScore.innerText = `${playerOneScore.value}`;
    playerTwoScore.innerText = `${playerTwoScore.value}`;
    playerOneScore.style.color = "black";
    playerTwoScore.style.color = "black";
    playerOneBtn.classList.remove("disabled");
    playerTwoBtn.classList.remove("disabled");
    winner = false ;

})






