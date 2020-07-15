const LinkedList = require('./LinkedList');
const Node = require('./Node');
// const HashMap = require('./HashMap');

class HashMap {
  constructor(size = 0) {
    this.hashmap = new Array(size)
      .fill(null).map(() => new LinkedList())
  }

  hash(key) {
    let hashCode = 0;
    for (let i = 0; i < key.length; i++) {
      hashCode += hashCode + key.charCodeAt(i)
    }
    return hashCode % this.hashmap.length
  }

  assign(key, value) {
    const arrayIndex = this.hash(key)
    const linkedList = this.hashmap[arrayIndex]

    if (!linkedList.head) {
      linkedList.addToHead({key:key, value:value})
      return;
    } else {
      linkedList.addToTail({key:key, value:value})
    }

  }
}

const collision = new HashMap(3);
collision.assign('deer', 'forest')
console.log(collision.hashmap);
console.log(collision.hashmap[2]);
collision.assign('clock', 'house')
console.log(collision.hashmap);
console.log(collision.hashmap[2].head);

// const linkedList = collision.hashmap[1]
// if (!linkedList.head) {
//   console.log(linkedList);
//   linkedList.addToHead({'deer', 'forest'})
//   console.log(linkedList);
// }


module.exports = HashMap;
