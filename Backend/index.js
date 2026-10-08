const express = require('express');
const connectDB = require('./src/config/database');
const app = express();

app.use(express.json());


connectDB()
    .then(() => {
        console.log('Connected to the database');
        app.listen(7070, () => {
            console.log('Server is running on port 7070');  
        });
    })
    .catch((error) => {
        console.error('Error connecting to the database:', error);
    });

