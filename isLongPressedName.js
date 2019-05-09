function isLongPressedName (name, typed) {
  let nameInd = 0;
  let typedInd = 0;
  while (nameInd < name.length) {
    if (name[nameInd] === typed[typedInd]) {
      nameInd++;
      typedInd++;
    } else {
      if (name[nameInd - 1] === typed[typedInd]) {
        typedInd++;
      } else {
        return false;
      }
    }
  }
  return true;
}

isLongPressedName('alex', 'aaleex');

/*
https://leetcode.com/problems/long-pressed-name/submissions/
*/
