const express = require('express');
const router = express.Router();
const readersController = require('../controllers/readers.controller');

router.post('/', readersController.addReader);
router.put('/:id', readersController.updateReader);
router.delete('/:id', readersController.deleteReader);
router.get('/search', readersController.searchReader);

router.get('/', readersController.getAllReaders);
router.get('/:maDocGia', readersController.getReaderByMaDocGia);  // Sửa đổi endpoint để truyền MaDocGia

module.exports = router;
