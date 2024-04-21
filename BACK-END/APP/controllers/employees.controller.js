const Employee = require('../models/employee.model');

exports.addEmployee = async (req, res) => {
    try {
        const newEmployee = new Employee(req.body);
        const savedEmployee = await newEmployee.save();
        res.status(201).json(savedEmployee);
    } catch (error) {
        res.status(400).json(error);
    }
};

// Sửa thông tin nhân viên
exports.updateEmployee = async (req, res) => {
    try {
        const updatedEmployee = await Employee.findOneAndUpdate(
            { MSNV: req.params.id },
            req.body,
            { new: true }
        );
        if (!updatedEmployee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.json(updatedEmployee);
    } catch (error) {
        res.status(400).json(error);
    }
};

// Xóa nhân viên
exports.deleteEmployee = async (req, res) => {
    try {
        const deletedEmployee = await Employee.findOneAndDelete({ MSNV: req.params.id });
        if (!deletedEmployee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.json({ message: 'Employee deleted successfully' });
    } catch (error) {
        res.status(400).json(error);
    }
};

// Tìm kiếm nhân viên
exports.searchEmployee = async (req, res) => {
    try {
        const employees = await Employee.find({ HoTenNV: { $regex: req.query.keyword, $options: 'i' } });
        res.json(employees);
    } catch (error) {
        res.status(400).json(error);
    }
};

// Lấy tất cả nhân viên
exports.getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Lấy nhân viên theo MSNV
exports.getEmployeeByMSNV = async (req, res) => {
    try {
        const employee = await Employee.findOne({ MSNV: req.params.msnv });
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.status(200).json(employee);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
