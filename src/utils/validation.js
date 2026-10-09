const validator = require('validator');

const validateInquiryData = (req) => {
    const { name, emailId, scope } = req.body;

    if (!name || !emailId || !scope) {
        throw new Error('Name, email, and scope are required fields.');
    } else if (!validator.isEmail(emailId)) {
        throw new Error('Invalid email address.');
    } 
} 

module.exports = {
    validateInquiryData,
};