const express = require('express');
const apiMocker = require('connect-api-mocker');
const cors = require('cors');

const app = express();
const PORT =  3000; 
const MOCK_API_FOLDER = 'mock-api'
const URL_PATH = process.env.URL_PATH || '/';
app.use(cors());
app.use(URL_PATH, apiMocker(MOCK_API_FOLDER));
 
console.log(`app Server is up and running at: http://localhost:${PORT}`);
app.listen(PORT);