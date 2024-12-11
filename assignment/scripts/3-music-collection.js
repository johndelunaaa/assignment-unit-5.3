console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

let myCollection = [];

function addToCollection(collection, title, artist, yearPublished) {
  const album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
  };

collection.push(album);

return album;
}

console.log(addToCollection(myCollection, 'TNT', 'ACDC', 1975));
console.log(addToCollection(myCollection, 'All Shook Up', 'Elvis Presley', 1957));
console.log(addToCollection(myCollection, 'Boom Boom Pow', 'The Black Eyed Peas', 2009));
console.log(addToCollection(myCollection, 'Thrift Shop', 'Macklemore & Ryan Lewis', 2013));
console.log(addToCollection(myCollection, 'Gods Plan', 'Drake', 2019));
console.log(addToCollection(myCollection, 'Blinding Lights', 'The Weeknd', 2020));
console.log(addToCollection(myCollection, 'Heat Waves', 'Glass Animals', 2022));

console.log('My Collection:', myCollection);

function showCollection(collection) {
  console.log(`Collection contains ${collection.length} albums:`);
  for (let album of collection) {
    console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}`);
  }
}

showCollection(myCollection);

function findByArtist(collection, artist) {
  const results = [];
  for (let album of collection) {
    if (album.artist === artist) {
      results.push(album);
    }
  }
  return results;
}



// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
