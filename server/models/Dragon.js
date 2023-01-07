const mongoose = require('mongoose');

const DragonSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    family: {
        type: String,
    },
    fish: {
        type: String,
    },
    wood: {
        type: String,
    },
    iron: {
        type: String,
    },
    gatheringTime: {
        type: String,
    },
    // 
});

module.exports = mongoose.model('Dragon', DragonSchema);