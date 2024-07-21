const jwt = require('jsonwebtoken');

const secretKey = 'newsky2023'; 


const generateToken = (payload) => {
    return jwt.sign(payload, secretKey, { expiresIn: '1h' });
};


const validateToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(401).json({ message: 'Token requerido' });
    }

    jwt.verify(token.split(' ')[1], secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Token inválido' });
        }
        req.user = decoded;
        next();
    });
};

module.exports = { generateToken, validateToken };
