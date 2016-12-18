function Visitor(nbCell)
{
	this.actualNbCell = nbCell;
	this.path = [];

	this.run = function()
    {
    	this.visit(this.actualNbCell);
    	if(visitedCells == cellsArray.length) {
    		// end of generation
    		generated = true;
    		for (var i = 0; i < cellsArray.length; i++) {
    			cellsArray[i].visited = false;
    		}
    		this.makeOpen();
    	}
	}

    this.visit = function (nbCell)
    {
    	cellsArray[nbCell].markActive();

    	if(cellsArray[nbCell].visited == false) {
    		//mark the cell as visited
 			cellsArray[nbCell].markVisited();
 			this.path.push(nbCell);
    	}
 		
 		//pick a random unvisited near cell
 		var nextCell;
 		var arrayNear = cellsArray[nbCell].getNearUnvisitedCells();
 		if(arrayNear.length > 0) {
 			nextCell = random(arrayNear);
 			this.linkCells(cellsArray[nbCell],  nextCell);
 		} else {
 			// if there is no unvisited cell next we try with the last visited one
 			// we delete cells from the path as we go backward
 			nextCell = cellsArray[this.path.pop()];
 		}

 		this.actualNbCell = nextCell.nbCell; 		
    }

    this.linkCells = function (cellA, cellB) {
    	if(cellB) {
    		// used to link two cells
	    	if(cellB.nbCell == cellA.nbCell-1) {
	    		// B is on the Left
	    		cellA.openLeft = true;
	    		cellB.openRight = true;
	    	} else
	    	if(cellB.nbCell == cellA.nbCell+1) {
	    		// B is on the right
	    		cellA.openRight = true;
	    		cellB.openLeft = true;
	    	} else
	    	if(cellB.nbCell == cellA.nbCell-cols) {
	    		// B is on the top
	    		cellA.openTop = true;
	    		cellB.openBot = true;
	    	} else
	    	if(cellB.nbCell == cellA.nbCell+cols) {
	    		// B is on the bottom
	    		cellA.openBot = true;
	    		cellB.openTop = true;
	    	}
    	} else {
    		// used to make maze entrance
    		if(cellA.nbCell < cols) {
	    		// on the yop row
	    		cellA.openTop = true;
	    	} else
	    	if(cellA.nbCell%cols == cols-1) {
	    		// on the right cols
	    		cellA.openRight = true;
	    	} else
	    	if(cellA.nbCell > (rows-1)*cols) {
	    		// on the bot row
	    		cellA.openBot = true;
	    	} else
	    	if(cellA.nbCell%cols == 0) {
	    		// on the left col
	    		cellA.openLeft = true;
	    	}
    	}
    }

    this.makeOpen = function () {
    	var borders = [];
    	for (var i = 0; i < cellsArray.length; i++) {
    		if( i < cols ||
    			i%cols == cols-1 ||
    			i > (rows-1)*cols ||
    			i%cols == 0
    			) {

				borders.push(i);
    		}
		}

		entranceCell = borders.splice(floor(random(borders.length)), 1);
		exitCell = borders.splice(floor(random(borders.length)), 1);

		this.linkCells(cellsArray[entranceCell]);
		this.linkCells(cellsArray[exitCell]);
    }
}