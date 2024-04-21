const Publisher = require('../models/publisher.model');

exports.addPublisher = async (req, res) => {
    try {
        const newPublisher = new Publisher(req.body);
        const savedPublisher = await newPublisher.save();
        res.status(201).json(savedPublisher);
    } catch (error) {
        res.status(400).json(error);
    }
};

// Sửa thông tin nhà xuất bản
exports.updatePublisher = async (req, res) => {
    try {
        const updatedPublisher = await Publisher.findOneAndUpdate(
            { MaNXB: req.params.id },
            req.body,
            { new: true }
        );
        if (!updatedPublisher) {
            return res.status(404).json({ message: 'Publisher not found' });
        }
        res.json(updatedPublisher);
    } catch (error) {
        res.status(400).json(error);
    }
};

// Xóa nhà xuất bản
exports.deletePublisher = async (req, res) => {
    try {
        const deletedPublisher = await Publisher.findOneAndDelete({ MaNXB: req.params.id });
        if (!deletedPublisher) {
            return res.status(404).json({ message: 'Publisher not found' });
        }
        res.json({ message: 'Publisher deleted successfully' });
    } catch (error) {
        res.status(400).json(error);
    }
};

// Tìm kiếm nhà xuất bản
exports.searchPublisher = async (req, res) => {
    try {
        const publishers = await Publisher.find({ TenNXB: { $regex: req.query.keyword, $options: 'i' } });
        res.json(publishers);
    } catch (error) {
        res.status(400).json(error);
    }
};

// Lấy tất cả nhà xuất bản
exports.getAllPublishers = async (req, res) => {
    try {
        const publishers = await Publisher.find();
        res.status(200).json(publishers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Lấy nhà xuất bản theo MaNXB
exports.getPublisherByMaNXB = async (req, res) => {
    try {
        const publisher = await Publisher.findOne({ MaNXB: req.params.maNXB });
        if (!publisher) {
            return res.status(404).json({ message: 'Publisher not found' });
        }
        res.status(200).json(publisher);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};