require('dotenv').config(); 

const express = require('express');
const app = express();
const PORT = process.env.PORT;

app.get('/api/data', (req, res) => {
    res.json({ message: "Hello from the Node.js backend!" });
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

const apiKey = process.env.TMDB_API_KEY;
app.get('/api/account', async (req, res) => {
    try {
        const url = 'https://api.themoviedb.org/3/account/23700911';
        const options = {
        method: 'GET',
        headers: {
            accept: 'application/json', 
            Authorization: `Bearer ${apiKey}`}
        };


        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error(`TMDB API error: ${response.status}`);
        }

        const data = await response.json();

        res.json(data);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch data from TMDB' });
    }

});


