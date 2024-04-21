const express = require('express');
const router = express.Router();
const employeesController = require('../controllers/employees.controller');

router.post('/', employeesController.addEmployee);
router.put('/:id', employeesController.updateEmployee);
router.delete('/:id', employeesController.deleteEmployee);
router.get('/search', employeesController.searchEmployee);

router.get('/', employeesController.getAllEmployees);
router.get('/:msnv', employeesController.getEmployeeByMSNV);

module.exports = router;
