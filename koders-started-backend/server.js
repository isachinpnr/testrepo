// server.js
const express = require('express');
const cors = require('cors'); // Import CORS
const app = express();

// 1. ENABLE THE HANDSHAKE
// This tells the server: "If a request comes from localhost:5173, allow it."
app.use(cors({
    origin: "http://localhost:5173" // Be specific (Security Best Practice)
}));

app.use(express.json());

// 2. THE TEST ENDPOINT
// This is what the frontend will try to hit.
app.get('/api/health', (req, res) => {
    console.log("Health check requested!"); // This logs in your TERMINAL
    res.json({ 
        status: "Success", 
        message: "Backend is CONNECTED to Frontend!", 
        timestamp: new Date() 
    });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Backend running on port ${PORT}`));