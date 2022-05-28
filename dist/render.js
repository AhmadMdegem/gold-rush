let re = true
let board

class Renderer{
    constructor(){

    }
    getScore() {
        $('.result').empty();
        const source = $('#result-template').html();
        const template = Handlebars.compile(source);
        let newHTML = template({ result: board.getScore() });
        $('.result').append(newHTML);
    }
    loadBoard() {
        if (re === true)
           board = new GoldRush()
        re = false
        $('.grid-container').empty();
        const source = $('#setSymbols-template').html();
        const template = Handlebars.compile(source);
        let newHTML = template({ board: board.getBoard() });
        $('.grid-container').append(newHTML);
        this.getScore()
    }
    
}


Handlebars.registerHelper('setSymbol', function (arg1, arg2, dsa) {
    if (arg1 === 'C')
        return `<div class="grid-item"><img src=${COIN} width=30px height=30px /></div>`
    else if (arg1 === 1)
        return `<div class="grid-item"><img src=${PLAYER1} width=30px height=30px /></div>`
    else if (arg1 === 2)
        return `<div class="grid-item"><img src=${PLAYER2} width=30px height=30px /></div>`
    else
        return `<div class="grid-item"><img src=${CIRCLE} width=10px height=10px /></div>`
})

Handlebars.registerHelper('playerScore', function (arg1, arg2, dsa) {
    let flag = 1
    let numPlayer
    let halfCoin = (board.getCoin() / 2)
    if (arg1[0].score > halfCoin) {
        re = true
        numPlayer = 1
        alert("Player 1 is the winner !!")
    }
    else if (arg1[1].score > halfCoin) {
        re = true
        numPlayer = 2
        alert("Player 2 is the winner !!")
    }
    if(re === true){
        $('.grid-container').empty();
        $('.grid-container').append(`<h1>The winner is player ${numPlayer} &#127881;</h1>`);
        return `<button id="re-start">Re Start Game</button>`
    }
    if (flag === 1) {
        return `<div class=score> 
        <div class=score1><img src=${PLAYER1} width=50px height=50px />Score ${arg1[0].score}</div>
        <div class=score1><img src=${PLAYER2} width=50px height=50px />Score ${arg1[1].score}</div>
        </div>`
    }
})