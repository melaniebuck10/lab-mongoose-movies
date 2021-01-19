const mongoose = require('mongoose');

const celebritySchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true,
    },
    occupation: {
        type: String,
        required: true,
        enum: ['actor', 'singer', 'comedian', 'unknown']
    },
    catchPhrase: {
        type: String,
        required: true,
    }
});

const CelebrityModel = mongoose.model('CelebrityModel', celebritySchema);



module.exports = CelebrityModel;