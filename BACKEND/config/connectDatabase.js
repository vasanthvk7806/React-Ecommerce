const mongoose = require('mongoose');

const connctDatabase = () => {
     mongoose.connect(process.env.DB_URL).then((con) => {
        console.log('MongoDb Connected to host:'+con.connection.host)
     })


};

module.exports = connctDatabase;