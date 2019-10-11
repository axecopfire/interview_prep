function createSpiral(N) {

	if(N < 1 || typeof N !== "number" ) return [];
	var mem = {
		input: N,
		target: N**2,
		dirArr: ['E', 'S', 'W', 'N'],
		dirCount: 0,
		counter: 1,
		output: [],
		vCheckIn: false,
		hCheckIn: false,
		vInEdge: 1,
		hInEdge: 0,
		vOutEdge: N - 1,
		hOutEdge: N - 1,
	};
	
	var h = 0,
		v = 0;
	
		for(var i = 0; i < N; i ++) {
			mem.output.push(new Array(N).fill(0));
		}
		
		run(h, v, mem);
		return mem.output;
	}
	
	function run(h, v, mem) {
		// console.log(h, mem.hEdge, mem.dirCount)
		// if on initial East change dir thats it
		if(h === mem.input - 1 && v === 0) {
			mem.dirCount = mem.dirCount === 3 ? 0 : mem.dirCount + 1;
			mem.hCheckIn = true;
		}
		// if on initial South change dir thats it
		else if(h === mem.input - 1 && v === mem.input - 1) {
			mem.dirCount = mem.dirCount === 3 ? 0 : mem.dirCount + 1;
			mem.vCheckIn = true;
			mem.vOutEdge--;
		}
		// check inner edges when supposed to
		else if(mem.hCheckIn && h === mem.hInEdge) {
			mem.dirCount = mem.dirCount === 3 ? 0 : mem.dirCount + 1;
			mem.hCheckIn = false;
			mem.hInEdge ++;
		}
		else if(mem.vCheckIn && v === mem.vInEdge) {
			mem.dirCount = mem.dirCount === 3 ? 0 : mem.dirCount + 1;
			mem.vCheckIn = false;
			mem.vInEdge++;
		}

		// Check outter edges when supposed to
		else if(h === mem.hOutEdge && !mem.hCheckIn) {
				mem.dirCount = mem.dirCount === 3 ? 0 : mem.dirCount + 1;
				mem.hOutEdge --;
				mem.hCheckIn = true;
		} 
		else if(v === mem.vOutEdge && !mem.vCheckIn) {
				mem.dirCount = mem.dirCount === 3 ? 0 : mem.dirCount + 1;
				mem.vOutEdge --;
				mem.vCheckIn = true;
		}

		
		mem.output[v][h] = mem.counter;
		mem.counter++;
		console.log(
			{
			// 	v: 
			// 	{v: v, bool: mem.vCheckIn, innerEdge: mem.vInEdge, outterEdge: mem.vOutEdge},
			// h: 
			// {h: h, bool: mem.hCheckIn, innerEdge: mem.hInEdge, outterEdge: mem.hOutEdge},
			output: {dir: mem.dirArr[mem.dirCount],}, output:mem.output})
		
		switch(mem.dirArr[mem.dirCount]) {
			case "E":
				h++;
				break;
			case "S":
				v++;
				break;
			case "W":
				h--;
				break;
			case "N":
				v--;
				break;
		}

		if(mem.counter === mem.target) {
			mem.output[v][h] = mem.counter;
			return;
		}
			
		run(h,v, mem);
}

console.log(createSpiral(4));


/*
	E: v, h++
	S: v++, h
	W: v, h--
	N: v--, h
*/
	
