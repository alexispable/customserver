const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Rename server
const serverName = "customserver";

// Route to return first name in all caps
app.get('/firstname', (req, res) => {
    res.send('Alexis'.toUpperCase());
});

// Route to return last name in all caps
app.get('/lastname', (req, res) => {
    res.send('Pable'.toUpperCase());
});

// Route to return age
app.get('/age', (req, res) => {
    res.send('22');
});

// Route to return school email
app.get('/schoolemail', (req, res) => {
    res.send('alya.pable.swu@phinmaed.com');
});

// Route to return JSON object with user data
app.get('/mydata', (req, res) => {
    res.json({
        first_name: 'Alexis'.toUpperCase(),
        last_name: 'Pable'.toUpperCase(),
        age: '22',
        school_email: 'alya.pable.swu@phinmaed.com'
    });
});

// Start the server with the new name
app.listen(port, () => {
    console.log(`${serverName} is running on port ${port}`);
});
