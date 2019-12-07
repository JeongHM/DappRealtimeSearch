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

function findCollection() {
    connect().then(result => {
        let client = result.client;
        let collection = result.collection;

        collection.find({}).toArray(function(err, docs) {
            if (err) throw err;
            client.close();
            console.log(docs);
            return docs;
        });
    });
}
findCollection();
