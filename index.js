
let bool=false
let player={
    name: "Ansh",
    chips: 200
}

let sum = 0 
let alive= false
let mess= ""
let messageEl= document.getElementById("message-el")
let card=[]
let getel= document.getElementById("card-el")
let getsum =   document.getElementById("sum-el")


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name +": $"+player.chips



function startGame()
{
    alive= true
    let card1=randomcard()
    let card2= randomcard()
     card=[card1, card2]
     sum =card1+card2
    renderGame()
}
function renderGame()
{
    getel.textContent= "CARDS: "
  getsum.textContent = "SUM: "+ sum
   for(let i = 0;i<card.length;i++){
    getel.textContent += card[i] +" "}
if(sum===21)
{
    
    mess="Blackjack!"
    bool=true}

    else if(sum<21)
    mess="Do you want to draw a card"
    else
   { 
       mess="game over"
    alive = false}

    messageEl.textContent = mess
}

function newcard() 
{ 
    if(alive=== true&&bool===false)
   { let card3 = randomcard()
    card.push(card3)
    
    sum += card3
    renderGame()}
    
}
function randomcard()
{
    var a =  Math.floor(Math.random()*13)+1
    if(a===1)
     return(11)
    else if(a>=11&&a<=13)
     return(10)
     else
     return(a)

    
}