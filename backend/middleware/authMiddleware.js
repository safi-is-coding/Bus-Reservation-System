const jwt = require('jsonwebtoken');
const User = require('../models/User');


exports.protect = (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    try {
        const decoded = jwt.verify(token, "hhh");
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Token is not valid' });
    }
};



exports.admin = async (req, res, next) => {
    try {
        // Assuming `req.user` is set by a previous middleware (e.g., `protect` middleware)
        const user = await User.findById(req.user.userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (!user.isAdmin) {
            return res.status(403).json({ message: 'Access denied. Admins only.' });
        }

        // If the user is an admin, proceed to the next middleware or route handler
        next();
    } catch (error) {
        console.error('Error in admin middleware:', error);
        res.status(500).json({ message: 'Server error' });
    }
};
