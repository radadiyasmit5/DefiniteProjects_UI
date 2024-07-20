const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000; // Use the port of your choice

// Serve static files from the 'build' directory
app.use(express.static(path.join(__dirname, '../', 'build')));

// Handle GET requests to serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'build', 'index.html'));
});


app.listen(3000, () => {
    console.log("server Started");
})