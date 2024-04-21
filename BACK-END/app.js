const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import cors package
const bookRoutes = require('./APP/routes/books.routes');
const readerRoutes = require('./APP/routes/readers.routes');
const publisherRoutes = require('./APP/routes/publishers.routes');
const borrowingRoutes = require('./APP/routes/borrowings.routes');
const employeeRoutes = require('./APP/routes/employees.routes');
const authRoutes = require('./APP/routes/auth.routes');

// Cấu hình kết nối MongoDB
mongoose.connect('mongodb://localhost:27017/QuanLyMuonSach', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Failed to connect to MongoDB', err));

const app = express();

// Sử dụng middleware CORS
app.use(cors());

// Sử dụng bodyParser middleware để parse application/json
app.use(express.json());

// Sử dụng route từ books.routes.js
app.use('/books', bookRoutes);

// Sử dụng route từ readers.routes.js
app.use('/readers', readerRoutes);

app.use('/publishers', publisherRoutes);
app.use('/borrowings', borrowingRoutes);
app.use('/employees', employeeRoutes);
app.use('/auth', authRoutes);

// Route cho đường dẫn gốc
app.get('/', (req, res) => {
    res.json({ message: 'Server is running' });
});

// Middleware for handling errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
