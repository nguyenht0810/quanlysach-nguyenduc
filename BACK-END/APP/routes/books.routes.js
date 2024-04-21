const express = require('express');
const router = express.Router();
const booksController = require('../controllers/books.controller');  // Đường dẫn đã được chỉnh sửa

// Route cho việc thêm sách
router.post('/', booksController.addBook);
router.put('/:id', booksController.updateBook);
router.delete('/:id', booksController.deleteBook);
router.get('/search', booksController.searchBook);

router.get('/', booksController.getAllBooks);
router.get('/:maSach', booksController.getBookByMaSach);  // Sửa đổi endpoint để truyền MaSach

module.exports = router;
