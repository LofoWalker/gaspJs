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
x = 0;


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

    this.x++;
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
    
    document.write("<h1> Bienvenu sur mon GaspJS ! </h1>");
    document.write("<h3> Pour gagner, vous devez retourner toutes les cartes du plateau. </h3>");

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
    document.write("<p> Nombre de coup : " + x + "</p>");
    } else {
        document.write("<h1> Vous avez gagné en " + this.x + " coup !</h1>");
        setTimeout(newGame(), 10000);

    }
}