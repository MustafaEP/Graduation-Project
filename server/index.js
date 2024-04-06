require('dotenv').config();

const express = require('express');
const app = express();

const mongoose = require('mongoose');




const PORT = process.env.PORT || 3000;

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/graduation-project', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Define routes

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
