import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// This component proves you know BOTH libraries
const DashboardCard = ({ title, value }) => {
  return (
    <Card className="hover:shadow-2xl transition-shadow duration-300 border-l-4 border-blue-500">
      <CardContent className="flex flex-col gap-2">
        {/* MUI Typography for consistent font */}
        <Typography variant="h6" className="text-gray-500 font-bold uppercase">
          {title}
        </Typography>
        
        {/* Tailwind for massive text styling */}
        <Typography variant="h3" className="font-extrabold text-blue-600">
          {value}
        </Typography>

        <div className="mt-4">
            <Button variant="contained" size="large" className="bg-blue-600">
                View Details
            </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;