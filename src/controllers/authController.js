const { generateToken } = require('../config/auth');

exports.generateToken = (req, res) => {
    const payload = { username: 'user' }; 
    const token = generateToken(payload);
    res.send({ token });
};
