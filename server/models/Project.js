const mongoose = require('mongoose');

const PRojectSchema = new mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    status: {
        type: String
    },
});

module.exports = mongoose.model('PRoject', PRojectSchema);