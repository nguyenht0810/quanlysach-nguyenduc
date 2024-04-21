// const express = require('express');
// const router = express.Router();
// const borrowingsController = require('../controllers/borrowings.controller');

// router.post('/', borrowingsController.addBorrowing);
// router.put('/:id', borrowingsController.updateBorrowing);
// router.delete('/:id', borrowingsController.deleteBorrowing);
// router.get('/search', borrowingsController.searchBorrowing);

// router.get('/', borrowingsController.getAllBorrowings);
// router.get('/:maDocGia/:maSach', borrowingsController.getBorrowingByMaDocGiaAndMaSach);

// module.exports = router;


const express = require('express');
const router = express.Router();
const borrowingsController = require('../controllers/borrowings.controller');

// Thêm route POST để mượn sách
router.post('/', borrowingsController.addBorrowing);

// Thêm route DELETE để trả sách
router.delete('/:maDocGia/:maSach', borrowingsController.deleteBorrowing);

// Giữ nguyên các routes cũ
router.put('/:id', borrowingsController.updateBorrowing);
router.get('/search', borrowingsController.searchBorrowing);
router.get('/', borrowingsController.getAllBorrowings);
router.get('/:maDocGia/:maSach', borrowingsController.getBorrowingByMaDocGiaAndMaSach);

module.exports = router;
