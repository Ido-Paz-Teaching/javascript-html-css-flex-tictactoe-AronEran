/*
enter code to handle:
1. User cell selection click
2. game status update messages
3. Start button click
*/



// 'player' valus are "x" or "o"
var player = "x";
// Count players moves in the game
var count =  0;
// Holds all buttons
var buttonArray = [];
// Holds marked ("x" or "o") and positions of buttons
const followUp = ["","","","","","","","",""];
// Holds temporary player mark
var temp;
// Footer - status messages
var state;
// At least 5 moves are needed for one of the players to win
const minMOVES = 5;
// Max players moves in the game
const maxMOVES = 9;

window.addEventListener('load',init);

function init()
{    
    const board = document.getElementById('board');
    buttonArray = board.getElementsByTagName('button');
    const start = document.querySelector("header button");
    state = document.getElementById("gameStatusTag");
    for(let i=0; i<buttonArray.length; i++)
    {
        buttonArray[i].innerText = "";
        buttonArray[i].removeEventListener("click", onButtonClick);
        buttonArray[i].addEventListener("click", onButtonClick);
    }
    start.removeEventListener("click", onStartClick);
    start.addEventListener("click", onStartClick);
    state.innerText = "Game on : x - play"
}

function onButtonClick(eventArg)
{
    let btn = eventArg.currentTarget;
    if(btn.innerText == "")
    {
        btn.innerText = player;
        temp = player;
        if(player == "x")
            player = "o";
        else
            player = "x"
        followUp[btn.id[1]] = temp;
        state.innerText = player + " - play";        
        count++;
        if(count >= minMOVES)
            if(hasWon(followUp))
            {
                state.innerHTML = `Game Over:  ${temp} wins<br>
                To restart - Press the start button `;
                for(let n in buttonArray)
                    buttonArray[n].disabled = true
            }
            else if(hasDraw(followUp))
            {
                state.innerText = "Game Over: It's a Draw";
                for(let n in buttonArray)
                    buttonArray[n].disabled = true
            }
    }
    else
        state.innerHTML = `${player} - play <br>Select only unmarked buttons`;
} 

function onStartClick(eventArg)
{
    count = 0;
    player = "x";
    state.innerText = "Game on : x - play"
    for(let n in buttonArray)
        buttonArray[n].innerText = "";
    for(let n in followUp)
        followUp[n] = "";

    for(let i=0; i<winOptions.length; i++) 
        for(let j=0; j<winOptions[i].length; j++)
            if(winOptions[i][j] == "o") 
                winOptions[i][j] = player;
    
    for(let n in buttonArray)
        buttonArray[n].disabled = false;
}   