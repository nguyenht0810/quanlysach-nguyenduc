const mongoose = require('mongoose');

const borrowingSchema = new mongoose.Schema({
    MaDocGia: {
        type: String,
        required: true
    },
    MaSach: {
        type: String,
        required: true
    },
    NgayMuon: {
        type: Date,
        required: true
    },
    NgayTra: {
        type: Date,
        required: true
    }
});

const Borrowing = mongoose.model('Borrowing', borrowingSchema);

module.exports = Borrowing;
