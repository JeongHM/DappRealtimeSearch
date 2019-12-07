const mongoClinet = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017/';

const dbName = 'users';
const collectionName = 'users';

function connect() {
    return new Promise(function(resolve, reject) {
        let dbOption = { useUnifiedTopology: true };
        mongoClinet.connect(url, dbOption, function(err, client) {
            assert.equal(null, err);
            console.log('Connected successfully to server');

            const db = client.db(dbName);
            const collection = db.collection(collectionName);
            resolve({ client: client, collection: collection });
        });
    });
}

function find() {
    connect().then(result => {
        result.collection.find({}).toArray(function(err, docs) {
            if (err) throw err;
            result.client.close();
            console.log(docs);
            return docs;
        });
    });
}

function insert(obj) {
    connect().then(result => {
        result.collection.insertOne(obj, function(err, res) {
            if (err) throw err;
            result.client.close();
            return true;
        });
    });
}

// find();

// insert({ name: 'hae', age: 21 });
// find();
