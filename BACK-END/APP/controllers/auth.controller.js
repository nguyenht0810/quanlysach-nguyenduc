exports.login = async (req, res) => {
    const { username, password } = req.body;

    // Đơn giản kiểm tra username và password
    if (username === 'employee' && password === 'password123') {
        res.json({ role: 'employee' });
    } else if (username === 'reader' && password === 'password456') {
        res.json({ role: 'reader' });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
};
