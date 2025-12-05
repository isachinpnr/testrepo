import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Button, CircularProgress } from '@mui/material';

const SystemStatus = () => {
    const [status, setStatus] = useState("Checking connection...");
    const [isConnected, setIsConnected] = useState(false);
    const [loading, setLoading] = useState(false);

    const checkConnection = async () => {
        setLoading(true);
        try {
            // THE INTEGRATION LINE: This URL must match your backend Port
            const response = await fetch('http://localhost:5000/api/health');
            const data = await response.json();
            
            if (data.status === "Success") {
                setStatus(data.message);
                setIsConnected(true);
            }
        } catch (error) {
            console.error("Connection Failed:", error);
            setStatus("Error: Backend is unreachable. Is server running?");
            setIsConnected(false);
        } finally {
            setLoading(false);
        }
    };

    // Auto-check on load (optional, but professional)
    useEffect(() => {
        checkConnection();
    }, []);

    return (
        <Card className={`mt-5 border-l-4 ${isConnected ? 'border-green-500' : 'border-red-500'} shadow-lg`}>
            <CardContent>
                <Typography variant="h6" className="font-bold text-gray-700">
                    System Health Check
                </Typography>
                
                <div className="my-4 p-3 bg-gray-100 rounded text-sm font-mono text-blue-800">
                    Server Response: {status}
                </div>

                <Button 
                    variant="contained" 
                    color={isConnected ? "success" : "error"}
                    onClick={checkConnection}
                    disabled={loading}
                    startIcon={loading && <CircularProgress size={20} color="inherit"/>}
                >
                    {loading ? "Pinging Server..." : "Test Connection Again"}
                </Button>
            </CardContent>
        </Card>
    );
};

export default SystemStatus;