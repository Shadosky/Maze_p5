function Solver(entrance)
{
	this.actualNbCell = entrance;
	this.path = [];

	this.run = function()
    {
    	this.visit(this.actualNbCell);
    	if(this.actualNbCell == exitCell) {
    		cellsArray[this.actualNbCell].markVisited();
    		console.log('done');
    		solved = true;
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
 		var arrayNear = cellsArray[nbCell].getNearwalkableCells();
 		if(arrayNear.length > 0) {
 			nextCell = random(arrayNear);
 		} else {
 			// if there is no walkeble cell next we try with the last visited one
 			// we delete cells from the path as we go backward
 			nextCell = cellsArray[this.path.pop()];
 		}

 		this.actualNbCell = nextCell.nbCell; 		
    }
}