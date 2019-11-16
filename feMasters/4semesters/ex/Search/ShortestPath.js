// Crappy implementation...works for most checks
// checkNeighbors should return a testable data structure instead of firing so many side effects
// rows and columns are mixed up, and how to do directionality in array of arrays
//

/**
 * @param {Array} pos [row, col]
 * @param {Object} dir {north, east, south, west}
 * @param {Number} distance integer of distance from origin
 * @param {Number} type integer from maze (0 = open, 1 = wall, 2 = dest, 3 = visited)
 * 
 * @property {Number} distance
 */
function Node (pos, type) {
  this.distance = 0;
  this.row = pos[0];
  this.col = pos[1];
  this.north = false;
  this.east = false;
  this.south =false;
  this.west = false;
  this.type = type ? type : false;
}

function mapOppDir(dir) {
  if(dir === "north") return "south";
  if(dir === "east") return "west";
  if(dir === "south") return "north";
  if(dir === "west") return "east";
}

/**
 * 
 * @param {Array} start row is pos 0, col is pos 1 
 * @param {Array} dest row is pos 0, col is pos 1 
 * @property {Number} distanceCounter
 */
function Graph (start, dest) {
  this.origin = start;
  this.distanceCounter = 0;
  this.dest = dest;
  this.shortestPath = null;
  this.last = null;
}

function findShortestPathLength(maze, start, end) {
  const origin = new Node (start, 2);
  const dest = new Node (end, 2);
  const graph = new Graph (origin, dest);

  let queue = [graph.origin];

  while(queue.length) {
    let curr = queue.shift();
    curr.type = 4;
    graph.last = curr;

    let result = checkNeighbors(maze, curr, graph, queue);
    if(result) return result;
  }  

  return "oops " + graph.last.distance;
}

function checkNeighbors (maze, curr, graph, queue) {
  const dirs = [
    {
      dir: "north",
      pos: [curr.row - 1, curr.col],
    },
    {
      dir: "east",
      pos: [curr.row, curr.col + 1],
    },
    {
      dir: "south",
      pos: [curr.row + 1, curr.col],
    },
    {
      dir: "east",
      pos: [curr.row, curr.col - 1],
    }
  ];
    
  
  // Peak ahead at each next neighbor
  for(var i = 0; i < 3; i++) {
    let nextDir = dirs[i];
    
    // Checking graph if visited
    if(curr[nextDir.dir]) {
      continue;
    }
    
    // Checking Map
    let nextType;
    const row = nextDir.pos[0];
    const col = nextDir.pos[1];
    
    try {
      nextType = maze[row][col];
      nextType = nextType === undefined ? undefined : nextType;
    } catch (err) {
      nextType = -1;
    }
    
    // check if wall or off map
    if(nextType === 1 || nextType === -1 || nextType === undefined) {
      curr[nextDir.dir] = nextType;
      continue;
    }
    
    // pos, type, dir, distance
    // Updating Nodes
    const next = new Node(nextDir.pos, nextType, nextDir.dir, graph.distanceCounter);
    next[mapOppDir(nextDir.dir)] = curr;
    next.distance = curr.distance + 1;
    curr[nextDir.dir] = next;
    
    // Destination found
    if(next.row === graph.dest.row && next.col === graph.dest.col) {
      return next.distance;
    }
    queue.push(next);
  }
  return false;
}


const twoxtwo = [
  [2,0],
  [0,2]
];

const threexthree = [
  [2, 0, 0],
  [0, 0, 0],
  [0, 0, 2]
]

const fourxfour = [
  [2, 0, 0, 0],
  [0, 1, 1, 0],
  [0, 1, 0, 2],
  [0, 1, 0, 0]
];

const sixBySix = [
  [0, 0, 0, 0, 0, 0],
  [0, 2, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 2, 0, 0, 0]
];

const eightByEight = [
  [0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 1, 0, 1, 1, 0],
  [0, 0, 0, 2, 0, 0, 1, 0],
  [0, 2, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 1, 2]
];

// console.log(findShortestPathLength(twoxtwo, [0,0], [1,1]) + " Should = 2")
console.log(findShortestPathLength(threexthree, [0,0], [2,2]) + " Should = 4");
// console.log(findShortestPathLength(fourxfour, [0, 0], [3, 3])+ " Should = 6");
// console.log(findShortestPathLength(sixBySix, [1, 1], [2, 5]) + " Should = 7")
// console.log(findShortestPathLength(eightByEight, [7, 1], [7, 7]) + " Should = 16")
