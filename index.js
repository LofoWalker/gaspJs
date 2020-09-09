class Case {
    constructor(x, y, flip) {
        this.x = x;
        this.y = y;
        this.flip = flip;
    }
}

class Board {
    cases;

    constructor() {
        this.cases = new Array(4);
        for(var i = 0; i < 4; i++){
            this.cases[i] = new Array(4);
            for(var j = 0; j < 4; j++){
                    this.cases[i][j] = new Case(i, j, false);
            }
        }
    }
}

board = new Board();


function flip(x, y) {

    if (board.cases[x][y + 1] != null)
        board.cases[x][y + 1].flip = !board.cases[x][y + 1].flip;

    if (board.cases[x][y - 1] != null)
        board.cases[x][y - 1].flip = !board.cases[x][y - 1].flip;
    
    if (board.cases[x + 1] != null && board.cases[x + 1][y + 1] != null)
        board.cases[x + 1][y + 1].flip = !board.cases[x + 1][y + 1].flip;

    if (board.cases[x + 1] != null && board.cases[x + 1][y - 1] != null)
        board.cases[x + 1][y - 1].flip = !board.cases[x + 1][y - 1].flip;

    if (board.cases[x - 1] != null && board.cases[x - 1][y + 1] != null)
        board.cases[x - 1][y + 1].flip = !board.cases[x - 1][y + 1].flip;

    if (board.cases[x - 1] != null && board.cases[x - 1][y - 1] != null)
        board.cases[x - 1][y - 1].flip = !board.cases[x - 1][y - 1].flip;

    if (board.cases[x + 1] != null && board.cases[x + 1][y] != null)
        board.cases[x + 1][y].flip = !board.cases[x + 1][y].flip;

    if (board.cases[x - 1] != null && board.cases[x - 1][y] != null)
        board.cases[x - 1][y].flip = !board.cases[x - 1][y].flip;

    displayBoard();
}

function newGame() {
    
    displayBoard();
    this.board = new Board();
}

function checkVictory() {

    for(var i = 0; i < 4; i++){
        for(var j = 0; j < 4; j++){
                if(!board.cases[i][j].flip) 
                    return false;
        }
    }
    return true;
}

function displayBoard() {
    document = new Document;
    document.open();
    
    if (!checkVictory()) {
    document.write("<table>");

    for (i=0;i<4; i++)
	{
        document.write("<tr>");
        for (j=0; j<4; j++) {
            if (this.board.cases[i][j].flip)
                image = "img/face.png'"
            else
                image = "img/dos.jpg'"

                document.write("<td id='"+i+"/"+j+"'onclick='flip(" + i + "," + j + ")'> <img src='" + image + " height='264px' width='200px'></td>");
        }
		document.write("</tr>");
    }
    document.write("</table>");
    } else {
        document.write("<h1> YOU WIN ! </h1>");
        setTimeout(newGame(), 10000);

    }
}