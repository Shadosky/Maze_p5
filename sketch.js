var scl = 40;
var rows, cols;
var cellsArray = [];
var visitor, solver;

var generated  = false;
var solved = false;

var trueSize = 800;
var margin = 10;
var canSize = trueSize+2*margin;

var visitedCells = 0;
var startcell = 0;
var entranceCell, exitCell;

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

	startcell = floor(random(cellsArray.length));
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

    if(!generated) {
    	visitor.run();
    } else if (!solved) {
    	if(typeof solver == 'undefined') {
    		solver = new Solver(entranceCell);
    	} else {
    		solver.run();
    	}
    }

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
