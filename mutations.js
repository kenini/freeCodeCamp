function mutation(arr) {
var arr2;
var arr1;
arr1 = arr[0].toLowerCase();
arr2 = arr[1].toLowerCase();
var stringArr1 = arr1.split('');
var stringArr2 = arr2.split('');
var i = 0;
var testIncludes;
do { testIncludes = stringArr1.includes(stringArr2[i])
i++;
if (testIncludes === false)
return false;
elseif (testIncludes === true)
return true;
}
} while (i < stringArr2.length);
return testIncludes;
}
