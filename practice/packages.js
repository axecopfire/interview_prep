// IMPORT LIBRARY PACKAGES NEEDED BY YOUR PROGRAM
// SOME FUNCTIONALITY WITHIN A PACKAGE MAY BE RESTRICTED
// DEFINE ANY FUNCTION NEEDED
// FUNCTION SIGNATURE BEGINS, THIS FUNCTION IS REQUIRED
function IDsOfPackages(truckSpace, packagesSpace)
{
		var packages = packagesSpace;
    var space = truckSpace - 30;
    var matches = [];
    // loop through packages and get two largest permutations
		var optimal = [];
    for(var i = packages.length - 1; i >= 0; i--) {
			// permutations
			for(var j = i - 1; j >= 0; j --) {
				if(packages[i] + packages[j] === space) {
					var temp = [i, j];
					optimal.push({
						ipos: i, count: packages[i], 
						jpos: j, count: packages[j]});
                matches.push(temp);
            }
        }
        
		}
		
    for(var k = 0; k < matches.length; k ++) {
			var lOp = optimal[0] > optimal[1] ? optimal[0] : optimal[1];
			console.log(lOp);
        if(matches[k][0] > lOp || matches[k][1] > lOp) {
            optimal = matches[k];
        }
    }
    return optimal;
}
// FUNCTION SIGNATURE ENDS

/*
NOTES:

*/



// console.log(IDsOfPackages(110, [20, 70, 90, 30, 60, 110]));
console.log(IDsOfPackages(250, [100,180,40,120,10]));