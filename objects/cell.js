function Cell(x, y, nbCell)
{
	this.x = x*scl;
	this.y = y*scl;
	this.nbCell = nbCell;

	this.openTop = false;
	this.openRight = false;
	this.openBot = false;
	this.openLeft = false;

	this.visited = false;
	
	this.show = function()
    {
		stroke(255);
		
		push();
		translate(this.x, this.y);
		if(!this.openTop)
			line(0, 0, scl, 0); // top
		if(!this.openRight)
			line(scl,0, scl, scl); // right
		if(!this.openBot)
			line(0, scl, scl, scl); // bot
		if(!this.openLeft)
			line(0 ,0, 0 , scl); //left

		if(this.visited) {
			fill(100,0,200, 165);
	    	noStroke();
			rect(2, 2, scl-2, scl-2);

		}

		pop();
    }

    this.debug = function ()
    {
    	fill(255);
    	noStroke();
    	push();
		translate(this.x, this.y);
		text(this.nbCell, scl/2, scl/2);
		pop();
    }

    this.getNearCells = function ()
    {
    	var nearCells = [];
    	if(this.nbCell > cols-1) {
    		nearCells.push(cellsArray[this.nbCell - cols]);
    	}
    	if(this.nbCell%cols != cols-1) {
			nearCells.push(cellsArray[this.nbCell + 1]);
		}
		if(this.nbCell < (rows-1)*cols) {
			nearCells.push(cellsArray[this.nbCell + cols]);
		}
		if(this.nbCell%cols != 0) {
			nearCells.push(cellsArray[this.nbCell - 1]);
    	}

    	return nearCells;
    }

    this.getNearwalkableCells = function ()
    {
    	var nearCells = [];
    	if(this.nbCell > cols-1 && this.openTop) {
    		if(!cellsArray[this.nbCell - cols].visited)
    			nearCells.push(cellsArray[this.nbCell - cols]);
    	}
    	if(this.nbCell%cols != cols-1 && this.openRight) {
    		if(!cellsArray[this.nbCell + 1].visited)
				nearCells.push(cellsArray[this.nbCell + 1]);
		}
		if(this.nbCell < (rows-1)*cols && this.openBot) {
			if(!cellsArray[this.nbCell + cols].visited)
				nearCells.push(cellsArray[this.nbCell + cols]);
		}
		if(this.nbCell%cols != 0 && this.openLeft) {
			if(!cellsArray[this.nbCell - 1].visited)
				nearCells.push(cellsArray[this.nbCell - 1]);
    	}

    	return nearCells;
    }


    this.getNearUnvisitedCells = function ()
    {
    	var nearCells = [];
    	if(this.nbCell > cols-1) {
    		if(!cellsArray[this.nbCell - cols].visited)
    			nearCells.push(cellsArray[this.nbCell - cols]);
    	}
    	if(this.nbCell%cols != cols-1) {
    		if(!cellsArray[this.nbCell + 1].visited)
				nearCells.push(cellsArray[this.nbCell + 1]);
		}
		if(this.nbCell < (rows-1)*cols) {
			if(!cellsArray[this.nbCell + cols].visited)
				nearCells.push(cellsArray[this.nbCell + cols]);
		}
		if(this.nbCell%cols != 0) {
			if(!cellsArray[this.nbCell - 1].visited)
				nearCells.push(cellsArray[this.nbCell - 1]);
    	}

    	return nearCells;
    }

    this.markVisited = function () 
    {
    	this.visited = true;
    	visitedCells ++;
    }
	
	this.markActive = function () 
    {
    	fill(100,100,200, 165);
    	noStroke();
    	push();
		translate(this.x, this.y);
		rect(2, 2, scl-2, scl-2);
		pop();
    }
}