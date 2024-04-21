const Borrowing = require('../models/borrowing.model');

exports.addBorrowing = async (req, res) => {
    try {
        const newBorrowing = new Borrowing(req.body);
        const savedBorrowing = await newBorrowing.save();
        res.status(201).json(savedBorrowing);
    } catch (error) {
        res.status(400).json(error);
    }
};

// Sửa thông tin mượn sách
exports.updateBorrowing = async (req, res) => {
    try {
        const updatedBorrowing = await Borrowing.findOneAndUpdate(
            { MaDocGia: req.params.id },
            req.body,
            { new: true }
        );
        if (!updatedBorrowing) {
            return res.status(404).json({ message: 'Borrowing record not found' });
        }
        res.json(updatedBorrowing);
    } catch (error) {
        res.status(400).json(error);
    }
};


// Xóa thông tin mượn sách dựa trên MaDocGia và MaSach
exports.deleteBorrowing = async (req, res) => {
    try {
        const deletedBorrowing = await Borrowing.findOneAndDelete({ MaDocGia: req.params.maDocGia, MaSach: req.params.maSach });
        if (!deletedBorrowing) {
            return res.status(404).json({ message: 'Borrowing record not found' });
        }
        res.json({ message: 'Borrowing record deleted successfully' });
    } catch (error) {
        res.status(400).json(error);
    }
};



// Tìm kiếm thông tin mượn sách
exports.searchBorrowing = async (req, res) => {
    try {
        const borrowings = await Borrowing.find({ MaDocGia: req.query.MaDocGia });
        res.json(borrowings);
    } catch (error) {
        res.status(400).json(error);
    }
};

// Lấy tất cả thông tin mượn sách
exports.getAllBorrowings = async (req, res) => {
    try {
        const borrowings = await Borrowing.find();
        res.status(200).json(borrowings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Lấy thông tin mượn sách theo MaDocGia và MaSach
exports.getBorrowingByMaDocGiaAndMaSach = async (req, res) => {
    try {
        const borrowing = await Borrowing.findOne({ MaDocGia: req.params.maDocGia, MaSach: req.params.maSach });
        if (!borrowing) {
            return res.status(404).json({ message: 'Borrowing not found' });
        }
        res.status(200).json(borrowing);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};