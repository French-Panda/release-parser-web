// server.js
import express from 'express';
import ReleaseParser from 'release-parser';

const app = express();
const PORT = 8765;

// Middleware to parse JSON bodies in POST requests
app.use(express.json());

// GET route to parse the release name
app.get('/', (req, res) => {
    const releaseName = req.query.Release;
    if (!releaseName) {
        return res.status(400).json({ error: 'Release parameter is required' });
    }
    const parsedData = ReleaseParser(releaseName);
    res.json(parsedData);
});

// POST route to parse the release name
app.post('/', (req, res) => {
    const { Release: releaseName } = req.body;
    if (!releaseName) {
        return res.status(400).json({ error: 'Release parameter is required' });
    }
    const parsedData = ReleaseParser(releaseName);
    res.json(parsedData);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
