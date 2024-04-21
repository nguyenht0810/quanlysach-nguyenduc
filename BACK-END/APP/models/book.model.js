const mongoose = require('mongoose');

// Định nghĩa schema cho sách
const bookSchema = new mongoose.Schema({
    MaSach: {
        type: String,
        required: true,
        unique: true
    },
    TenSach: {
        type: String,
        required: true
    },
    DonGia: {
        type: Number,
        required: true
    },
    SoQuyen: {
        type: Number,
        required: true
    },
    NamXuatBan: {
        type: Number,
        required: true
    },
    MaNXB: {
        type: String,
        required: true
    },
    NguonGoc: {
        type: String,
        required: true
    },
    TacGia: {
        type: String,
        required: true
    }
});

// Tạo model từ schema
const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
