function communElements(arr1, arr2) {
  let count = {};
  let sum = 0;
  for (i = 0; i < arr1.length; i++) {
    if (!count[arr1[i]]) {
      count[arr1[i]] = 1;
    } else {
      count[arr1[i]]++;
    }
  }
  for (i = 0; i < arr2.length; i++) {
    if (!count[arr2[i]]) {
      count[arr2[i]] = 1;
    } else {
      count[arr2[i]]++;
    }
  }
  for (let key in count) {
    if (count[key] >= 2) {
      sum += parseInt(key);
    }
  }
  return sum;
}

communElements([3, 2, 10], [2, 3, 4]);
