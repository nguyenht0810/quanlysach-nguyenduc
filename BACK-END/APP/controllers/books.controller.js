const Book = require('../models/book.model');

exports.addBook = async (req, res) => {
    try {
        const newBook = new Book(req.body);
        await newBook.save();
        res.status(201).json(newBook);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Sửa thông tin sách
exports.updateBook = async (req, res) => {
    try {
        const updatedBook = await Book.findOneAndUpdate(
            { MaSach: req.params.id },
            req.body,
            { new: true }
        );
        if (!updatedBook) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.json(updatedBook);
    } catch (error) {
        res.status(400).json(error);
    }
};

// Xóa sách
exports.deleteBook = async (req, res) => {
    try {
        const deletedBook = await Book.findOneAndDelete({ MaSach: req.params.id });
        if (!deletedBook) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.json({ message: 'Book deleted successfully' });
    } catch (error) {
        res.status(400).json(error);
    }
};

// Tìm kiếm sách
exports.searchBook = async (req, res) => {
    try {
        const books = await Book.find({ TenSach: { $regex: req.query.keyword, $options: 'i' } });
        res.json(books);
    } catch (error) {
        res.status(400).json(error);
    }
};

// Lấy tất cả sách
exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Lấy sách theo MaSach
exports.getBookByMaSach = async (req, res) => {
    try {
        const book = await Book.findOne({ MaSach: req.params.maSach });
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};