const express = require('express');
const apiMocker = require('connect-api-mocker');
const cors = require('cors');

const app = express();
const PORT =  3000; 
const MOCK_API_FOLDER = process.env.MOCK_API_FOLDER || 'mock-api'
app.use(cors());
app.use('/', apiMocker(MOCK_API_FOLDER));
 
console.log(`app Server is up and running at: http://localhost:${PORT}`);
app.listen(PORT);