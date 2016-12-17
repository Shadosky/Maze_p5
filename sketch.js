var scl = 40;
var rows, cols;
var cellsArray = [];
var visitor;

var trueSize = 800;
var margin = 10;
var canSize = trueSize+2*margin;

var visitedCells = 0;
var startcell = 0;

var inception = 0;
var debugMode = false;

function setup() {
    createCanvas(canSize, canSize);
	frameRate(10);
	rows = floor(trueSize/scl);
	cols = floor(trueSize/scl);
	
	var nbCell = 0;
	for(var y = 0; y < rows; y++) {
		for(var x = 0; x < cols; x++) {
			cellsArray.push(new Cell(x, y, nbCell));
			nbCell++;
		}
	}

	visitor = new Visitor(startcell);
}

function draw() {
	push();
    background(51);
    translate(margin,margin);
    for(var nbCell = 0; nbCell < cellsArray.length; nbCell++) {
    	cellsArray[nbCell].show();
    	if(debugMode)
    		cellsArray[nbCell].debug();
    }

    if(visitedCells < cellsArray.length)
    	visitor.run();

    if(debugMode) {
    	// test
	    var cellToTest = null;
	    if(cellToTest != null) {
	    	cellsArray[cellToTest].debug();
		    cellsArray[cellToTest].markVisited();
		    cellsArray[cellToTest+1].markVisited();
		    var near = cellsArray[cellToTest].getNearUnvisitedCells();

		    for(var i = 0; i < near.length; i++) {
		    	near[i].debug();
		    }
	    }
    }
    

    pop();

}
