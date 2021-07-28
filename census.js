const HashMap = require('./SeparateChaining')
const birdCensus = new HashMap(16)

birdCensus.assign('mandarin duck', 'Central Park Pond')
birdCensus.assign('monk parakeet', 'Brooklyn College')
birdCensus.assign('horned owl', 'Pelham Bay Park')


console.log(birdCensus.hashmap);

birdCensus.remove('horned owl')

// console.log(birdCensus.hashmap);
