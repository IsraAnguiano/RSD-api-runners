const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//API
app.use('/runners', require('./api/runners'));
app.use('/races', require('./api/races'));

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
