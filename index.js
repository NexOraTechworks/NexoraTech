const express = require('express');
const dbConnect = require('./src/config/database');
const app = express();

app.use(express.json());

dbConnect()
.then(() => {
    console.log('Database connected successfully');
    app.listen(7070, () => {
        console.log('Server is running on port 7070');
    });
})
.catch((err) => {
    console.error('Database connection error:', err);
});