const render = new Renderer()
$("#start").on("click", function () {
    render.loadBoard()
})
$(".result").on("click","#re-start", function () {
    render.loadBoard()
})
$(document).keypress(function (e) {
    switch (e.which) {
        case 119:
            board.movePlayer(1, "up")
            render.loadBoard();
            break;
        case 115:
            board.movePlayer(1, "down")
            render.loadBoard();
            break;
        case 97:
            board.movePlayer(1, "left")
            render.loadBoard();
            break;
        case 100:
            board.movePlayer(1, "right")
            render.loadBoard();
            break;
        default:
            changed = false
            break;
    }
})
$(document).keydown(function (e) {
    switch (e.which) {
        case 38:
            board.movePlayer(2, "up")
            render.loadBoard();
            break;
        case 40:
            board.movePlayer(2, "down")
            render.loadBoard();
            break;
        case 37:
            board.movePlayer(2, "left")
            render.loadBoard();
            break;
        case 39:
            board.movePlayer(2, "right")
            render.loadBoard();
            break;
        default:
            changed = false
            break;
    }
})
