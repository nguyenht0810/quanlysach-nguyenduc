const mongoose = require('mongoose');

const publisherSchema = new mongoose.Schema({
    MaNXB: {
        type: String,
        required: true,
        unique: true
    },
    TenNXB: {
        type: String,
        required: true
    },
    DiaChi: {
        type: String,
        required: true
    }
});

const Publisher = mongoose.model('Publisher', publisherSchema);

module.exports = Publisher;
