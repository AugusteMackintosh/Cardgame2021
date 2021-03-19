function pageLoad() {
    let colours = ['red', 'black', 'yellow'];
    let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // declaring two arrays that will make up deck object
    let player1 = [];
    let player2 = [];
    let winner = " ";
    let winningArray=[];
    let num;
    let colour;
    // I declared winner in advance so that I could change the value within the function
    let deck = new Array();
    for (let i = 0; i < colours.length; i++) {
        for (let j = 0; j < values.length; j++) {
            let card = {Suit: colours[i], Value: values[j]};
            deck.push(card);
        }
// an object wasn't being declared
    }
    console.log(deck);

// needed starting values for i and j
    cardShuffle(deck);
    for (let i = 0; i < deck.length; i++) {
        document.getElementById("deck").innerHTML += " " + deck[i].Suit + " " + deck[i].Value + " ,";
    }
// use get element by id to display cards in html
    cardPicker1(deck, player1, player2);
    console.log(player1.length);
    console.log(player2.length);
    winnerFunction(player1, player2,winner,winningArray,num,colour);


}

function winnerFunction(array1, array2,winningArray,winner,num, colour) {
    let score1 = 0;
    let score2 = 0;
    let temp;
    // I am comparing values within the two objects and adding the value to the object with the greater value.
    // The one with the lower value has the object value removed
    for (let i = 0; i < array1.length; i++) {
        if ((array1[i].Suit) === (array2[i].Suit)) {
            if ((array1[i].Value) > (array2[i].Value)) {
                score1++;
                temp = array2[i];
                array1.push(temp);
                delete array2[i];
            } else if ((array2[i].Value) > (array1[i].Value)) {
                score2++;
                temp = array1[i];
                array2.push(temp);
                delete array1[i];
            } else {
                delete array1[i];
                delete array2[i];
            }

        } else {
            // If the value is the same within the objects, the suit component of the object is checked
            if (array1[i].Suit === 'red' || array2[i].Suit === 'black') {
                score1++;
            } else if (array2[i].Suit === 'red' || array1[i].Suit === 'black') {
                score2++;

            } else if (array1[i].Suit === 'yellow' || array2[i].Suit === 'red') {
                score1++;
            } else if (array1[i].Suit === 'red' || array2[i].Suit === 'yellow') {
                score2++;
            } else if (array1[i].Suit === 'black' || array2[i].Suit === 'yellow') {
                score1++;
            } else if (array1[i].Suit === 'yellow' || array2[i].Suit === 'black') {
                score2++;
            }
        }
        let a1=prompt("Player 1 ,do you want to continue for another round? please type yes or no");
        let a2=prompt("Player 2 ,do you want to continue for another round? please type yes or no");
        if (a1=="yes" && a2=="yes"){
            cardShuffle(array1);
            cardShuffle(array2);
            if (score1>score2){
                window.alert("winner of this round is player 1, their score was:"+score1);
                winner ="player1";
            } else if (score2>score1){
                window.alert("winner of this round is player 2, their score was:"+score2);
                winner ="player2";
            }
            continue
        } else {
            break
        }

    }console.log(array1.length);
    console.log(array2.length);



    if (score1 > score2) {
        window.alert("winner is player1, their score was:" + score1);
        winner = "player1";
        console.log(winner);
        console.log(array1);
        winningArray=array1;
        console.log(winningArray);

    } else if (score2 > score1) {
        window.alert("winner is player2, their score was:" + score2);
        winner = "player2";
        console.log(winner);
        console.log(array2);
        winningArray = array2;


    } else {
        window.alert("it's a draw");
    }
    let fontCase = "white";
    let tableString = "<div>",
        body = document.getElementsByTagName('body')[0],
        div = document.createElement('div');
    for( let i = 0; i<winningArray.length;i++){
        let cardString="<table>",
        body = document.getElementsByTagName('body')[0],
        div = document.createElement('id');
        colour=winningArray[i].Suit;
        num= winningArray[i].Value;
        cardString += "<col>" +num +"</table>";
        div.style.backgroundColor=colour;
        if (colour==="black"){
            div.style.color=fontCase;
        }
        div.innerHTML = cardString;
        body.appendChild(div);
    }
    tableString += "</div>";
    div.innerHTML = tableString;
    body.appendChild(div);

}

function cardShuffle(array) {
    // generate random number so that I can shuffle the deck
    for (let i = 0; i < array.length; i++) {
        let j = Math.floor(Math.random() * i);
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        // needed starting values for i and j
    }

}


function cardPicker1(array, p1array, p2array) {
    // cutting deck object in half an copying values to the player1 and 2 arrays
    let midpoint = (array.length / 2);
    let end = array.length;
    for (let i = 0; i < midpoint; i++) {
        p1array.push(array[i])
    }
    for (let j = midpoint; j < end; j++) {
        p2array.push(array[j]);
    }

}
