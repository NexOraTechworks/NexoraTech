const mongoose = require('mongoose');
const validator = require('validator');

const inquirySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50,
        trim: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Invalid email address: " + value);
        }
      },
    },
    scope: {
        type: String,
        required: true,
        trim: true,
        maxlength: 5000,
    },
    status: {
      type: String,
      enum: ["new", "in-progress", "contacted", "closed"],
      default: "new",
    },
},
{
        timestamps: true
}
);


module.exports = mongoose.model('Inquiry', inquirySchema);