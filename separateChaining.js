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

  retrieve(key) {
    const arrayIndex = this.hash(key)
    let current = this.hashmap[arrayIndex].head

    while (current) {
      if (current.data.key === key) {
        return current.data.value
      }
      current = current.getNextNode()
    }
    return null
  }

  remove(key) {
    const arrayIndex = this.hash(key)
    console.log(`The index is ${arrayIndex}`);
    let list = this.hashmap[arrayIndex]
    console.log(`The list is ${this.hashmap}`);
    console.log(`The list head is ${list.head}`);

    list.removeByData(key)

  }
}

module.exports = HashMap;
