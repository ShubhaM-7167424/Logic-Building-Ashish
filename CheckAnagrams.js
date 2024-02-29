function areAnagrams(s1, s2) {
  let charsInS1 = {};
  let charsInS2 = {};

  if(s1.length !== s2.length){
      return false;
  }

  for (let char of s1) {
    if (!charsInS1[char]) {
      charsInS1[char] = 0;
    }
    charsInS1[char] += 1;
  }

  for (let char of s2) {
    if (!charsInS2[char]) {
      charsInS2[char] = 0;
    }
    charsInS2[char] += 1;
  }

  for (let key in charsInS1) {
    console.log(key, charsInS1[key]);
    console.log(key, charsInS2[key]);

    if (charsInS1[key] !== charsInS2[key]) {
      return false;
    }
  }

  return true;
}

console.log(areAnagrams("cat", "act"));
console.log(areAnagrams("below", "elbow"));
console.log(areAnagrams("night", "thing"));
console.log(areAnagrams("heart", "earth"));
console.log(areAnagrams("pools", "spool"));
console.log(areAnagrams("shubham", "saurabh"));
