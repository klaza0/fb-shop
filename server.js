const express = require('express');
const path = require('path');
const app = express();

// Serve all static files (HTML, CSS, Images)
app.use(express.static(path.join(__dirname)));

// Default route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Set port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
