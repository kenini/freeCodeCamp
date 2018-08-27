
/*Basic Algorithm Scripting: Mutations
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".*/

function mutation(arr) {
  var arr2;
  var arr1;
  arr1 = arr[0].toLowerCase();
  arr2 = arr[1].toLowerCase();
  var stringArr1 = arr1.split('');
  var stringArr2 = arr2.split('');
  var i = 0;
  var testIncludes;
    
  do {
    testIncludes = stringArr1.includes(stringArr2[i])
    i++;
    if (testIncludes === false) 
    {
      return false;
    elseif (testIncludes === true)
      return true;      
    }
    } while (i < stringArr2.length)
       
  return testIncludes;
}
