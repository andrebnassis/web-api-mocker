const express = require('express');
const apiMocker = require('connect-api-mocker');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000; 
const BASE_FOLDER = process.env.BASE_FOLDER || 'mock-api'
app.use(cors());
app.use('/', apiMocker(BASE_FOLDER));
 
console.log(`app Server is up and running at: http://localhost:${PORT}`);
app.listen(PORT);