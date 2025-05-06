import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Link, Paper, Divider } from '@mui/material';

const About = () => {
  return (
    <Box sx={{ p: 3, px: { xs: 2, sm: 5 }, mx: 'auto', maxWidth: '1200px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        About This App
      </Typography>

      <Paper sx={{ p: 3, mb: 3, boxShadow: 3 }}>
        <Typography variant="h6" paragraph>
          This Loan Calculator App is a modern, single-page web application built using React.js and Material UI.
          It enables users to:
        </Typography>
        <List sx={{ listStyleType: 'disc', pl: 4 }}>
          <ListItem>
            <ListItemText primary="Calculate EMIs (Equated Monthly Installments) using standard financial formulas." />
          </ListItem>
          <ListItem>
            <ListItemText primary="View a detailed amortization schedule with a monthly breakdown." />
          </ListItem>
          <ListItem>
            <ListItemText primary="See real-time currency conversions of EMI values using live exchange rates." />
          </ListItem>
        </List>
        <Typography variant="h6" paragraph>
          The app is responsive, supports light/dark modes, and delivers a seamless experience across all device sizes.
        </Typography>
      </Paper>

      <Typography variant="h5" sx={{ mt: 3 }} paragraph>
        🚀 Features
      </Typography>
      <List sx={{ listStyleType: 'circle', pl: 4 }}>
        <ListItem>
          <ListItemText primary="🔢 Loan EMI calculation using standard formulas" />
        </ListItem>
        <ListItem>
          <ListItemText primary="📅 Dynamic amortization schedule table" />
        </ListItem>
        <ListItem>
          <ListItemText primary="🌍 Real-time currency conversion with live rates" />
        </ListItem>
        <ListItem>
          <ListItemText primary="📊 Paginated exchange rate table for 160+ currencies" />
        </ListItem>
        <ListItem>
          <ListItemText primary="🌗 Dark/Light mode toggle" />
        </ListItem>
        <ListItem>
          <ListItemText primary="📱 Mobile-friendly navigation with collapsible header" />
        </ListItem>
        <ListItem>
          <ListItemText primary="📐 Fully responsive UI built with Material UI" />
        </ListItem>
        <ListItem>
          <ListItemText primary="❌ 404 Not Found and Error pages for graceful fallback" />
        </ListItem>
      </List>

      <Divider sx={{ my: 2 }} />

      <Typography variant="h5" sx={{ mt: 3 }} paragraph>
        🧪 Technologies Used
      </Typography>
      <List sx={{ listStyleType: 'circle', pl: 4 }}>
        <ListItem>
          <ListItemText primary="React.js (Hooks, Routing, Context API)" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Material UI for styling and layout" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Axios for HTTP requests" />
        </ListItem>
        <ListItem>
          <ListItemText primary="ExchangeRate API for live currency data" />
        </ListItem>
      </List>

      <Divider sx={{ my: 2 }} />

      <Typography variant="h5" sx={{ mt: 3 }} paragraph>
        💡 EMI Formula Used
      </Typography>
      <Typography variant="body1" paragraph>
        The EMI (Equated Monthly Installment) is calculated using the standard formula:
      </Typography>
      <Typography variant="body1" sx={{ fontFamily: 'monospace', fontSize: '1.2rem', fontWeight: 'bold' }}>
        EMI = P × R × (1 + R)^N / [(1 + R)^N - 1]
      </Typography>
      <Typography variant="body1" paragraph>
        Where:
      </Typography>
      <List sx={{ pl: 4 }}>
        <ListItem>
          <ListItemText primary="P = Principal loan amount" />
        </ListItem>
        <ListItem>
          <ListItemText primary="R = Monthly interest rate (annual rate / 12 / 100)" />
        </ListItem>
        <ListItem>
          <ListItemText primary="N = Loan duration in months" />
        </ListItem>
      </List>

      <Divider sx={{ my: 2 }} />

      <Typography variant="h5" sx={{ mt: 3 }} paragraph>
        🌐 Currency Conversion
      </Typography>
      <Typography variant="body1" paragraph>
        The app uses the ExchangeRate-API to fetch real-time exchange rates. Example API endpoint:
      </Typography>
      <Typography variant="body1" sx={{ fontFamily: 'monospace', fontSize: '1rem' }}>
        https://v6.exchangerate-api.com/v6/YOUR_API_KEY/latest/USD
      </Typography>
      <Typography variant="body1" paragraph>
        Replace YOUR_API_KEY in your `.env` file with a valid key.
      </Typography>

      <Divider sx={{ my: 2 }} />

      <Typography variant="h5" sx={{ mt: 3 }} paragraph>
        🎯 Project Purpose
      </Typography>
      <Typography variant="body1" paragraph>
        This project demonstrates proficiency in:
      </Typography>
      <List sx={{ pl: 4 }}>
        <ListItem>
          <ListItemText primary="React fundamentals (state, props, hooks)" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Component architecture and reusability" />
        </ListItem>
        <ListItem>
          <ListItemText primary="API integration and data rendering" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Responsive UI and theming" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Error handling and routing" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Working with tables, lists, and pagination" />
        </ListItem>
      </List>

      <Divider sx={{ my: 2 }} />

      <Typography variant="h5" sx={{ mt: 3 }} paragraph>
        📝 Deployment & GitHub
      </Typography>
      <Typography variant="body1" paragraph>
        💻 Codebase: <Link href="https://github.com/YogeshBasavaraju97/Loan_Calculator" target="_blank"> GitHub Repo Link </Link>
      </Typography>
      <Typography variant="body1" paragraph>
        🔗 Live Demo: <Link href="https://your-live-app-link.com" target="_blank"> Live App Link </Link>
      </Typography>
    </Box>
  );
};

export default About;
