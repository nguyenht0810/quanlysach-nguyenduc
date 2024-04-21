// // auth.routes.js

// const express = require('express');
// const router = express.Router();
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const Employee = require('../models/employee.model');
// const Reader = require('../models/reader.model');

// // Đăng nhập nhân viên
// router.post('/login-employee', async (req, res) => {
//   const { MSNV, Password } = req.body;

//   const employee = await Employee.findOne({ MSNV });

//   if (!employee || !bcrypt.compareSync(Password, employee.Password)) {
//     return res.status(400).json({ message: 'Mã số nhân viên hoặc mật khẩu không đúng.' });
//   }

//   const token = jwt.sign({ MSNV: employee.MSNV }, 'SECRET_KEY');
//   res.json({ token });
// });

// // Đăng nhập độc giả
// router.post('/login-reader', async (req, res) => {
//   const { MaDocGia, Password } = req.body;

//   const reader = await Reader.findOne({ MaDocGia });

//   if (!reader || !bcrypt.compareSync(Password, reader.Password)) {
//     return res.status(400).json({ message: 'Mã độc giả hoặc mật khẩu không đúng.' });
//   }

//   const token = jwt.sign({ MaDocGia: reader.MaDocGia }, 'SECRET_KEY');
//   res.json({ token });
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

router.post('/login', authController.login);

module.exports = router;
