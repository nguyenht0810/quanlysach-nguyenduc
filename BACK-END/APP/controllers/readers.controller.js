const Reader = require('../models/reader.model');

exports.addReader = async (req, res) => {
    try {
        const newReader = new Reader(req.body);
        const savedReader = await newReader.save();
        res.status(201).json(savedReader);
    } catch (error) {
        res.status(400).json(error);
    }
};

// Sửa thông tin độc giả
exports.updateReader = async (req, res) => {
    try {
        const updatedReader = await Reader.findOneAndUpdate(
            { MaDocGia: req.params.id },
            req.body,
            { new: true }
        );
        if (!updatedReader) {
            return res.status(404).json({ message: 'Reader not found' });
        }
        res.json(updatedReader);
    } catch (error) {
        res.status(400).json(error);
    }
};

// Xóa độc giả
exports.deleteReader = async (req, res) => {
    try {
        const deletedReader = await Reader.findOneAndDelete({ MaDocGia: req.params.id });
        if (!deletedReader) {
            return res.status(404).json({ message: 'Reader not found' });
        }
        res.json({ message: 'Reader deleted successfully' });
    } catch (error) {
        res.status(400).json(error);
    }
};

// Tìm kiếm độc giả
exports.searchReader = async (req, res) => {
    try {
        const readers = await Reader.find({ Ten: { $regex: req.query.keyword, $options: 'i' } });
        res.json(readers);
    } catch (error) {
        res.status(400).json(error);
    }
};

// Lấy tất cả độc giả
exports.getAllReaders = async (req, res) => {
    try {
        const readers = await Reader.find();
        res.status(200).json(readers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Lấy độc giả theo MaDocGia
exports.getReaderByMaDocGia = async (req, res) => {
    try {
        const reader = await Reader.findOne({ MaDocGia: req.params.maDocGia });
        if (!reader) {
            return res.status(404).json({ message: 'Reader not found' });
        }
        res.status(200).json(reader);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
