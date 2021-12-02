//Cells winning (horizontally || Vertically || diagonally) options:
///////////////['0','1','2','3','4','5','6','7','8'];
var Horizontally1 = ['x','x','x',"","","","","",""];
var Horizontally2 = ["","","",'x','x','x',"","",""];
var Horizontally3 = ["","","","","","",'x','x','x'];
//
var Vertically1 = ['x',"","",'x',"","",'x',"",""];
var Vertically2 = ["",'x',"","",'x',"","",'x',""];
var Vertically3 = ["","",'x',"","",'x',"","",'x'];
//
var Diagonally1 = ['x',"","","",'x',"","","",'x'];
var Diagonally2 = ["","",'x',"",'x',"",'x',"",""];
//
winOptions = [Horizontally1,Horizontally2,Horizontally3,Vertically1,Vertically2,      Vertically3,Diagonally1,Diagonally2];

//recieve a string array parameter and return true
//if the game is a draw or false if not.
function hasDraw(selectionArray) {
    if(areAllButtonsMarked(selectionArray) && count == maxMOVES)
        return true
    return false;
}

function areAllButtonsMarked(selectionArray)
{
    for(n in selectionArray)
        if(selectionArray[n] == "")
            return false;
    return true;
}

//recieve a string array parameter and return true 
//if someone won the game or false if not.
function hasWon(selectionArray) {
    if(sequenceCheck(selectionArray))
        return true;
    else
        {
            winningCellsFlipp();
            return false;
        }
}

// Change the Horizontally ,Vertically and Diagonally arrays to hold "x" or "0"
function winningCellsFlipp()
{   
    for(let i=0; i<winOptions.length; i++) 
        for(let j=0; j<winOptions[i].length; j++)
            if(winOptions[i][j] == temp) 
                winOptions[i][j] = player; 
            else if(winOptions[i][j] == player)  
                winOptions[i][j] = temp;
}

// Check 'selectionArray' for winning sequence
function sequenceCheck (selectionArray)
{   
    for(let i=0; i<winOptions.length; i++) 
        for(let j=0,match=0; j<winOptions[i].length; j++)
            if(winOptions[i][j] == temp)
                if(selectionArray[j] == temp)
                {
                    match++;
                    if(match == 3)
                        return true;
                }
    return false;
}

//Please , don't modify the following code
if (typeof module !== "undefined") {
    module.exports = {
        hasDraw,
        hasWon
    }
}