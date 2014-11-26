/*
* musical-squares.js
*
* author: bencentra
*/

document.addEventListener("DOMContentLoaded", function() {
  var squares = new MusicalSquares("mycanvas");
}, true);

/*
* MusicalSquares
*/

function MusicalSquares(canvasId) {
  // Instance vars
  this.canvas = document.getElementById(canvasId);
  this.context = this.canvas.getContext("2d");
  this.squareSize = 0;
  this.borderSize = 0;
  this.squares = [];
  // Initialize MusicalSquares
  this.init();
  // Start drawing
  this.draw();
}

MusicalSquares.prototype = {
  init: function() {
    if (this.squares.length > 0) {
      console.error("MusicalSquares already initiated!");
      return;
    }
    var x, y, xPos, yPos, square;
    var SQUARES_X = 8;
    var SQUARES_Y = 6;
    this.borderSize = 5;
    this.squareSize = (this.canvas.height / SQUARES_Y) - this.borderSize;
    for (y = 0; y < SQUARES_Y; y++) {
      this.squares[y] = [];
      for (x = 0; x < SQUARES_X; x++) {
        xPos = (this.canvas.width / SQUARES_X) * x;
        yPos = (this.canvas.height/ SQUARES_Y) * y;
        square = new NoteSquare(xPos, yPos, this.squareSize, this.borderSize);
        this.squares[y][x] = square;
      }
    }
    console.log(this.squares);
  },
  draw: function() {
    for (var i = 0; i < this.squares.length; i++) {
      for (var j = 0; j < this.squares[i].length; j++) {
        this.squares[i][j].draw(this.canvas, this.context);
      }
    }
    window.requestAnimationFrame(this.draw);
  }
};

/*
* NoteSquare
*/

function NoteSquare(xPos, yPos, size, border) {
  // Instance vars
  this.xPos = xPos;
  this.yPos = yPos;
  this.size = size;
  this.border = border;
  this.color = "#222";
  this.bgColor = "#fff";
  this.note = 440;
  // Initialize the NoteSquare
  this.init();
}

NoteSquare.prototype = {
  init: function() {

  },
  draw: function(c, ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.xPos, this.yPos, this.size, this.size);
  }
};


