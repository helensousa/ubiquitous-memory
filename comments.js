// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');           
const path = require('path');
const { v4: uuidv4 } = require('uuid');

// Enable CORS
app.use(cors());
app.use(bodyParser.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Read comments from JSON file
function readComments() {
    const data = fs.readFileSync('comments.json', 'utf8');
    return JSON.parse(data);
}