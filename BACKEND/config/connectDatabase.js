const mongoose = require('mongoose');

const connctDatabase = () => {
     mongoose.connect(process.env.DB_URL).then((con) => {
        
     })


};

module.exports = connctDatabase;
