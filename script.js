// const gameboard=((position, value)=>{
//     const board = new Array(9)
//     board[position]= value
// })

var board = new Array(9)

function gameboard(position,value){
    board[position]=value
}

const player = (name, marker)=>{
    return {name,marker}
}
function fillOutData(){
    const gameGrid = document.querySelector("gamegrid")
    board.forEach(element => {
        if (element == "O"){
            const grid1 = document.getElementById("b"+element)
            grid1.textContent=("X")
            console.log("hey1")
        }
        else {console.log("hey")}
    });
}

// Player Information



function playerInformation(){
     player1fname = document.getElementById("player1name").value
     player1marker = document.querySelector('input[name="p1marker"]:checked').value

     player2fname = document.getElementById("player2name").value
     player2marker = document.querySelector('input[name="p2marker"]:checked').value
        if (player1marker==player2marker){
            player1marker="x"
            player2marker="o"
        }
    console.log("Players added.")
    player1 = player(player1fname,player1marker)
    player2 = player(player2fname,player2marker) 
    document.querySelector(".playeroptions").style.visibility="hidden" 
    document.querySelector(".ingame").style.visibility="visible"
    markerRound()
    changeHeading()
    
}
var roundCount = 0
// Sets Tie
function tieCheck(){
    if (roundCount>9){
        document.getElementsByClassName("playerwon")[0].style.visibility = "visible"
        document.getElementById("winstatus").textContent="IT'S A TIE!"
    }
}
// determines which marker
function markerRound(){
    if  (roundCount % 2 == 0){
        currentMarker = player1.marker 
    }
    else{
        currentMarker = player2.marker
    }
    roundCount = roundCount + 1
    return currentMarker
}
// Changes game status heading
function changeHeading (){
    if(currentMarker == player1.marker){
        document.getElementById("gamestatus").textContent=("It's "+player2.name+"'s turn!")
    } else{
        document.getElementById("gamestatus").textContent=("It's "+player1.name+"'s turn!")
    }
}
// Changes won heading
function youWon (x){
        document.getElementsByClassName("playerwon")[0].style.visibility = "visible"
        document.getElementById("winstatus").textContent=(x + " won!")

}

// Checks Logic
const winningIndex =[
[0,1,2],[3,4,5],[6,7,8],
[0,3,6],[1,4,7],[2,5,8],
[0,4,8],[2,4,6]]

// checks winner manually (didn't know how to do this across winningIndex array)
function checkWinner(){
    if (board[0]=="x" && board[1]=="x" && board[2]=="x"){
        if (player1.marker == "x"){youWon(player1.name)}
        else {youWon(player2.name)}
    }
    else if (board[3]=="x" && board[4]=="x" && board[5]=="x"){
        if (player1.marker == "x"){youWon(player1.name)}
        else {youWon(player2.name)}
    }
    else if (board[6]=="x" && board[7]=="x" && board[8]=="x"){
        if (player1.marker == "x"){youWon(player1.name)}
        else {youWon(player2.name)}
    }
    else if (board[0]=="x" && board[3]=="x" && board[6]=="x"){
        if (player1.marker == "x"){youWon(player1.name)}
        else {youWon(player2.name)}
    }
    else if (board[1]=="x" && board[4]=="x" && board[7]=="x"){
        if (player1.marker == "x"){youWon(player1.name)}
        else {youWon(player2.name)}
    }
    else if (board[2]=="x" && board[5]=="x" && board[8]=="x"){
        if (player1.marker == "x"){youWon(player1.name)}
        else {youWon(player2.name)}
    }
    else if (board[0]=="x" && board[4]=="x" && board[8]=="x"){
        if (player1.marker == "x"){youWon(player1.name)}
        else {youWon(player2.name)}
    }
    else if (board[2]=="x" && board[4]=="x" && board[6]=="x"){
        if (player1.marker == "x"){youWon(player1.name)}
        else {youWon(player2.name)}
    }
    else if (board[0]=="o" && board[1]=="o" && board[2]=="o"){
        if (player1.marker == "o"){youWon(player1.name)}
        else {youWon(player2.name)}
    }
    else if (board[3]=="o" && board[4]=="o" && board[5]=="o"){
        if (player1.marker == "o"){youWon(player1.name)}
        else {youWon(player2.name)}
    }
    else if (board[6]=="o" && board[7]=="o" && board[8]=="o"){
        if (player1.marker == "o"){youWon(player1.name)}
        else {youWon(player2.name)}
    }
    else if (board[0]=="o" && board[3]=="o" && board[6]=="o"){
        if (player1.marker == "o"){youWon(player1.name)}
        else {youWon(player2.name)}
    }
    else if (board[1]=="o" && board[4]=="o" && board[7]=="o"){
        if (player1.marker == "o"){youWon(player1.name)}
        else {youWon(player2.name)}
    }
    else if (board[2]=="o" && board[5]=="o" && board[8]=="o"){
        if (player1.marker == "o"){youWon(player1.name)}
        else {youWon(player2.name)}
    }
    else if (board[0]=="o" && board[4]=="o" && board[8]=="o"){
        if (player1.marker == "o"){youWon(player1.name)}
        else {youWon(player2.name)}
    }
    else if (board[2]=="o" && board[4]=="o" && board[6]=="o"){
        if (player1.marker == "o"){youWon(player1.name)}
        else {youWon(player2.name)}
    }
    else {console.log("no winners")
        tieCheck()}
}


// // Select Location
b0 = document.getElementById("b0")
    b0.addEventListener("click",function(){
        markerRound()
        changeHeading()
        gameboard(0,currentMarker)
        b0.textContent=(currentMarker)
        checkWinner()
    },{once:true},false)
b1 = document.getElementById("b1")
    b1.addEventListener("click",function(){
        markerRound()
        changeHeading()
        gameboard(1,currentMarker)
        b1.textContent=(currentMarker)
        checkWinner()
    },{once:true},false)
b2 = document.getElementById("b2")
    b2.addEventListener("click",function(){
        markerRound()
        changeHeading()
        gameboard(2,currentMarker)
        b2.textContent=(currentMarker)
        checkWinner()
    },{once:true},false)
b3 = document.getElementById("b3")
    b3.addEventListener("click",function(){
        markerRound()
        changeHeading()
        gameboard(3,currentMarker)
        b3.textContent=(currentMarker)
        checkWinner()
    },{once:true},false)
b4 = document.getElementById("b4")
    b4.addEventListener("click",function(){
        markerRound()
        changeHeading()
        gameboard(4,currentMarker)
        b4.textContent=(currentMarker)
        checkWinner()
    },{once:true},false)
b5 = document.getElementById("b5")
    b5.addEventListener("click",function(){
        markerRound()
        changeHeading()
        gameboard(5,currentMarker)
        b5.textContent=(currentMarker)
        checkWinner()
    },{once:true},false)
b6 = document.getElementById("b6")
    b6.addEventListener("click",function(){
        markerRound()
        changeHeading()
        gameboard(6,currentMarker)
        b6.textContent=(currentMarker)
        checkWinner()
    },{once:true},false)
b7 = document.getElementById("b7")
    b7.addEventListener("click",function(){
        markerRound()
        changeHeading()
        gameboard(7,currentMarker)
        b7.textContent=(currentMarker)
        checkWinner()
    },{once:true},false)
b8 = document.getElementById("b8")
    b8.addEventListener("click",function(){
        markerRound()
        changeHeading()
        gameboard(8,currentMarker)
        b8.textContent=(currentMarker)
        checkWinner()
    },{once:true},false)


// function gameReset(){
//     board=[]
//     roundCount=0
//     document.querySelectorAll(".box").forEach(element => {
//         element.textContent=("")
//     });
//     document.getElementsByClassName("playerwon")[0].style.visibility = "hidden"
// }