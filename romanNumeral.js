function translateRomanNumeral (romanNumeral) {
  let count = 0;
  for (let i = 0 ; i < romanNumeral.length ; i++){
    if(DIGIT_VALUES[romanNumeral[i]]){
      if(DIGIT_VALUES[romanNumeral[i+1]] > DIGIT_VALUES[romanNumeral[i]]){
        count -= DIGIT_VALUES[romanNumeral[i]];
      } else {
        count += DIGIT_VALUES[romanNumeral[i]];
      }
    }
  }
  return count;
}

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};
