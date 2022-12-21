function dot_product(vector1, vector2) {
  let result = 0;
  for (let i = 0; i < 3; i++) {
    result += vector1[i] * vector2[i];
  }
  return result;
}

console.log(dot_product([1, 2, 3], [4, 5, 6]));
