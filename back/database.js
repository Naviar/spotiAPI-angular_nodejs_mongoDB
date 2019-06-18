const mongoose = require('mongoose');
const URI = 'mongodb://localhost/spoti';
mongoose.connect(URI)
    .then(db => console.log('db is connected'))
    .catch(err => console.log(err));

module.exports = mongoose;