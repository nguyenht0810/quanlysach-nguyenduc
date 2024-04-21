const express = require('express');
const router = express.Router();
const publishersController = require('../controllers/publishers.controller');

router.post('/', publishersController.addPublisher);
router.put('/:id', publishersController.updatePublisher);
router.delete('/:id', publishersController.deletePublisher);
router.get('/search', publishersController.searchPublisher);

router.get('/', publishersController.getAllPublishers);
router.get('/:maNXB', publishersController.getPublisherByMaNXB);

module.exports = router;
