const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const realTimeSchema = new Schema({
    hostname: String,
    body: Array,
    date: String,
});

module.exports = mongoose.model('realTimeSearch', realTimeSchema);

// const mongoClinet = require('mongodb').MongoClient;
// const assert = require('assert');
// const url = 'mongodb://localhost:27017/';

// const dbName = 'users';
// const collectionName = 'users';

// function connect() {
//     return new Promise(function(resolve, reject) {
//         let dbOption = { useUnifiedTopology: true };
//         mongoClinet.connect(url, dbOption, function(err, client) {
//             assert.equal(null, err);
//             console.log('Connected successfully to server');

//             const db = client.db(dbName);
//             const collection = db.collection(collectionName);
//             resolve({ client: client, collection: collection });
//         });
//     });
// }

// function find() {
//     connect().then(result => {
//         result.collection.find({}).toArray(function(err, docs) {
//             if (err) throw err;
//             result.client.close();
//             console.log(docs);
//             return docs;
//         });
//     });
// }

// function insert(obj) {
//     console.log(Array.isArray(obj));
//     connect().then(result => {
//         if (Array.isArray(obj) == false) {
//             result.collection.insertOne(obj, function(err, res) {
//                 if (err) throw err;
//                 result.client.close();
//                 return true;
//             });
//         } else if (Array.isArray(obj) == true) {
//             result.collection.insertMany(obj, function(err, res) {
//                 if (err) throw err;
//                 result.client.close();
//             });
//             console.log(obj);
//         }
//     });
// }

// function remove(obj) {
//     connect().then(result => {
//         result.collection.deleteOne(obj, function(err, res) {
//             if (err) throw err;
//             console.log(`remove ${obj} Success`);
//             result.client.close();
//         });
//     });
// }
// // function delete(obj) {
// //     pass
// // }

// // const removeDocument = function(db, callback) {
// //     // Get the documents collection
// //     const collection = db.collection('documents');
// //     // Delete document where a is 3
// //     collection.deleteOne({ a : 3 }, function(err, result) {
// //       assert.equal(err, null);
// //       assert.equal(1, result.result.n);
// //       console.log("Removed the document with the field a equal to 3");
// //       callback(result);
// //     });
// //   }
// // find();

// // insert({ name: 'b', age: 2 });
// // insert([{ name: 'aa', age: 2 }, { name: 'bb', age: 1 }]);
// remove({ name: 'bb', age: 1 });
// find();
