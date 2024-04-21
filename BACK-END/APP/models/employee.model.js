const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    MSNV: {
        type: String,
        required: true,
        unique: true
    },
    HoTenNV: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    Chucvu: {
        type: String,
        required: true
    },
    Diachi: {
        type: String,
        required: true
    },
    SoDienThoai: {
        type: String,
        required: true
    }
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
