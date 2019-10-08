function createSpiral(N) {
	function createSpiral(N) {
		var dir = 0,
			vBool = false,
			hBool = false,
			vEdge = N,
			hEdge = N,
			h = 0,
			v = 0,
			counter = 1,
			output = [];
			while(!vBool && !hBool) {
				
					if(hEdge) {
						
					}
	
					// Edge Checks
					if(h === hEdge - 1) {
						h--;
						hEdge--;
					} else if (h === 0) {
						h ++;
						hEdge--;
					} else if (v === vEdge - 1) {
						v--;
						vEdge--;
					} else if (v === 0) {
						v++;
						vEdge--;
					}
					
					
					// East
					if(dir === 0 && h < hEdge) {
						output[v][h] = counter;
						counter++;
						h++;
					}
					
					
				} 
	}
	// create a "map" of N arrays
	// add N place holders in each array
	// determine the edges
		// loop through the first array and add i
		// once you reach the length
			// go to the second array and add i + 1
			// continue until you've reached N array
			// then loop back until you've reached the beginning of that array
			// then go up an array and go as far as possible
	// decrement a position from the edges
	
	// pivot
	/*
	// once I reach an edge I want to switch increment vs decrement
	for i < vEdge; i ++; (vertical)
		for j < hEdge; j ++ (horizontal)
		[1,2,3] (arr[j]) until hEdge
		pivot
			need to traverse using i
			j needs to start minusing
		
		90deg pivot (edge arr[N])
		[,,4]
		[,,5]
		90deg pivot
		[7,6,5]
		90deg pivot
		[8,,4]
		90deg
		[8,9,4]
		done
	
	*/
	
	
	
	}