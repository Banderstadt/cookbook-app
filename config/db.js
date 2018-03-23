let mongoose = require('mongoose');
let db = mongoose.connect('mongodb://localhost:27017/cookbook');

//On Connection
mongoose.connection.on('connected', () => {
    console.log('Connected to database ');
});

//On Error
mongoose.connection.on('error', (err) => {
    console.log('Database error: '+err);
});
