function Visitor(nbCell)
{
	this.actualCell = nbCell;
	this.path = [];

	this.run = function()
    {
 
    	this.visit(this.actualCell);
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

 		this.actualCell = nextCell.nbCell; 		
    }

    this.linkCells = function (cellA, cellB) {
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

    }
}