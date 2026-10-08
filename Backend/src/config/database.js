const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect(
    "mongodb+srv://vipulkalebag1317_db_user:qTZEeohjgeRXtJEL@nexoratech.plp6lti.mongodb.net/devTinder"
    );
};

module.exports = connectDB