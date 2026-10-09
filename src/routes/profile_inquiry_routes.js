const express = require('express');
const profile_inquiry_routes = express.Router();
const { validateInquiryData } = require('../utils/validation');
const  createInquiry  = require('../models/user_inquiry');

profile_inquiry_routes.post('/inquiry', async (req, res) => {
    try {
        validateInquiryData(req);
        const { name, emailId, scope } = req.body;
        
        const userInquiry = new createInquiry({ name, emailId, scope });

        await userInquiry.save();
        return res.status(201).json({ message: 'Inquiry sent successfully' });

    } catch (err) {
        res.status(500).json({ error: 'Failed to send inquiry', details: err.message });
    }
});

module.exports = profile_inquiry_routes;
