class HashMap {
  constructor(size = 0) {
    this.hashmap = new Array(size)
      .fill(null);
  }

  hash(key) {
    let hashCode = 0
    let hashCode2 = 0
    for (let i = 0; i < key.length; i++) {
      hashCode += key.charCodeAt(i)
      hashCode2 += hashCode2 + key.charCodeAt(i)
      // console.log(key.charCodeAt(i))
      // console.log(`Hash code 1 = ${hashCode}`)
      // console.log(`Hash code 2 = ${hashCode2}`)
    }

    hashCode = hashCode % this.hashmap.length
    // console.log(`Hash code 1 = ${hashCode}`)
    hashCode2 = hashCode2 % this.hashmap.length
    // console.log(`Hash code 2 = ${hashCode2}`)

    return hashCode
  }

}

const hashMap = new HashMap(3)
console.log(hashMap.hash('id'))

module.exports = HashMap;
