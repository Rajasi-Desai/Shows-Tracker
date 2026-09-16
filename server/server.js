require('dotenv').config(); 

const express = require('express');
const app = express();
const PORT = process.env.PORT;

//TODO: delete the inital testing
app.get('/api/data', (req, res) => {
    res.json({ message: "Hello from the Node.js backend!" });
});

//TODO: delete the inital testing
// maybe log it??
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

//get account info
const apiKey = process.env.TMDB_API_KEY;
app.get('/api/account', async (req, res) => {
    try {
        const accountId = req.query.account_id;
        if (!accountId) {
            return res.status(400).json({
                error: 'account_id is required'
            });
        }
        
        const url = `https://api.themoviedb.org/3/account/${accountId}`;
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

//popular TV
app.get('/api/popular', async (req, res) => {
    try {
        const url = 'https://api.themoviedb.org/3/tv/popular?language=en-US&page=1';
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


