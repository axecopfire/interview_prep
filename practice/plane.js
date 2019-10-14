// IMPORT LIBRARY PACKAGES NEEDED BY YOUR PROGRAM
// SOME FUNCTIONALITY WITHIN A PACKAGE MAY BE RESTRICTED
// DEFINE ANY FUNCTION NEEDED
// FUNCTION SIGNATURE BEGINS, THIS FUNCTION IS REQUIRED
function optimalUtilization(maxTravelDist, forwardRouteList, returnRouteList)
{
    var optimal = {pair: [], count: 0 };
    for(var i = forwardRouteList.length - 1; i >= 0; i--) {
        for(var j = returnRouteList.length - 1; j >= 0; j--) {
					var currTest = forwardRouteList[i][1] + 
					returnRouteList[j][1];
            if(currTest <=maxTravelDist) {
							// If this is a new optimal pair
							if(currTest > optimal.count) {
								optimal.count = currTest;
								optimal.pair = [];
								optimal.pair.push([
									forwardRouteList[i][0], 
									returnRouteList[j][0] ]);
								continue;
							}
							// if pair equals previous pairs
							if(currTest === optimal.count) {
								optimal.pair.push([
									forwardRouteList[i][0], 
									 returnRouteList[j][0] ]);
							}
               
            }
        }
    }
    return optimal.pair;
}
// FUNCTION SIGNATURE ENDS

console.log(optimalUtilization(20, [[1,8], [2,7], [3,14]], [[1, 5], [2,10], [3,14]]));