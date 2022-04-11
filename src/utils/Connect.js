const {MongoClient} = require('mongodb');

const uri = "mongodb+srv://root:root@cluster0.k8wt0.mongodb.net/Ekaly?retryWrites=true&w=majority";

function client() {
    return new MongoClient(uri);
}

module.exports = {client};

