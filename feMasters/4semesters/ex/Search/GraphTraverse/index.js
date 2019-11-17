// Bad practice to transform the input data by adding the visited data. However I'm currently lazy
  // Another idea would be to create an array of visited ids and chreate a check to loop through to see if they're there
  // Another idea could be to make a bloom filter or some type of hash table to make that check quicker
const { getUser, getMe } = require('./Data_Methods');
const list = require('./data');

const findMostCommonTitle = (myId, list, degreesOfSeparation) => {
  /**
   * @type {Array} mostTitles
   * @example 
   * [{
   *    title: "Engineer",
   *    count: 3
   *  }, {
   *    title: "Designer",
   *    count: 2
   * }]
   */
  let mostTitles = [];
  let init = getUser(myId);
  init.deg = 0;
  let queue = []
  queue.push(init);

  while(queue.length) {
    let currEmp = queue.shift();
    
    if(currEmp.visited) {
      continue;
    }
    currEmp.visited = 1;
    processEmployee(currEmp, mostTitles);
    if(currEmp.deg < degreesOfSeparation) {
      updateQueueWConns(queue, currEmp);
    };
  }
  return findGreatest(mostTitles);
}

function updateQueueWConns(queue, currEmp) {
  let connections = [...new Set(currEmp.connections)];

  for(var i = 0; i < connections.length; i++) {
    let con = getUser(connections[i]);
    if(con.visited) {  continue; }
    con.deg = currEmp.deg + 1;
    queue.push(con);
  }
  return queue;
}

function processEmployee(currEmp, mostTitles) {
  for(var i = 0; i < mostTitles.length; i++) {
    if(mostTitles[i].title === currEmp.title) {
      mostTitles[i].count ++;
      return;
    }
  }
  let title = {
    title: currEmp.title,
    count: 1
  };
  mostTitles.push(title);
}

function findGreatest (mostTitles) {
  let i = 0;
  let highest = {
    count: 0,
    title: ""
  }
  while(i < mostTitles.length) {
    // console.log(mostTitles[i])
    if(mostTitles[i].count > highest.count) {
      highest.count = mostTitles[i].count;
      highest.title = mostTitles[i].title;
    }
    i++;
  }
  if(highest.count === 0) {
    return "error: could not find any titles";
  }
  return `title: ${highest.title} count : ${highest.count}`;
}

// TESTS
const test1 = findMostCommonTitle("30", list, 2);
const test2 = findMostCommonTitle("11", list, 3);
const test3 = findMostCommonTitle("306", list, 4);
const test4 = findMostCommonTitle("1", list, 7);

// console.log(test1, "should be Librarian");
// console.log(test2, "should be Graphic Designer");
console.log(test3, "should be Environmental Tech");
// console.log(test4, "should be Geological Engineer");

