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
    }

    let current = linkedList.head

    while (current) {
      if (current.data.key === key) {
        current.data = {key:key, value:value}
        return
      }

      if (current.getNextNode() === null) {
        const newTail = new Node({key:key, value:value})
        current.setNextNode(newTail)
        return
      }

      current = current.getNextNode()
    }

  }
}

const collision = new HashMap(5);
// console.log(collision.hash('One'));
// console.log(collision.hash('Two'));
// console.log(collision.hash('Sixteen'));
// console.log(collision.hash('Seventeen'));
// console.log(collision.hash('Twenty'));

collision.assign('Two', 'First')
collision.assign('Sixteen', 'First')
collision.assign('One', 'First')
collision.assign('Twenty', 'First')
collision.assign('Seventeen', 'First')
collision.hashmap.forEach((item) => {
  console.log(item.head);
});

collision.assign('deer', 'Second')
collision.hashmap.forEach((item) => {
  console.log(item.head);
});

// console.log(collision.hashmap[2].head.data);
// collision.assign('deer', 'house')
// console.log(collision.hashmap[2].head.data);
// collision.assign('deer', 'garden')
// console.log(collision.hashmap[2].head.data);

// const linkedList = collision.hashmap[1]
// if (!linkedList.head) {
//   console.log(linkedList);
//   linkedList.addToHead({'deer', 'forest'})
//   console.log(linkedList);
// }


module.exports = HashMap;
