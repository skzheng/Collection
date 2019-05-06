function canVisitAllRooms(rooms) {
  let keys = new Set([0]);
  function traverse(rooms, i) {
    rooms[i].forEach(item => {
      if (!keys.has(item)) {
        keys.add(item);
      traverse(rooms, item);
      }
    })
  }
  traverse(rooms, 0);
  return keys.size === rooms.length;
}

// canVisitAllRooms([[1],[2],[3],[]]);
// canVisitAllRooms([[1,3],[3,0,1],[2],[0]])

/*
https://leetcode.com/problems/keys-and-rooms/

We have a list of rooms, we start at 0
Inside rooms[i] is a list of keys to rooms 
We can traverse through the rooms, and keep a master list of keys
*/
