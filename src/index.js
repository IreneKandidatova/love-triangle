/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var TrCount = 0;
  preferences.unshift(0);
  var i = 1;
    while (i < preferences.length - 2) {
    var first = i;
    var second = preferences[i];
    var third = preferences[first];
    if (first !=second){
      var third = preferences[second];
      if (second != third){
        var fourth = preferences[third];
                if (fourth == first) { 
                  ++TrCount;
                  preferences[i] = 0;
                  }}
    i++;            
     }
      return TrCount}
