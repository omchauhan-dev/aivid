import React from 'react';
import { Typography, Paper, Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Typography variant="h3" gutterBottom>
        Welcome to Viral Hook Engine
      </Typography>
      <Typography variant="h6" gutterBottom>
        Create viral content for social media in seconds.
      </Typography>
      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid item xs={12} sm={6}>
          <Paper sx={{ p: 3, textAlign: 'center' }}>
            <Typography variant="h5">Viral Hook Engine</Typography>
            <Typography>Generate scroll-stopping hooks.</Typography>
            <Button component={Link} to="/hooks" variant="contained" sx={{ mt: 2 }}>
              Go
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper sx={{ p: 3, textAlign: 'center' }}>
            <Typography variant="h5">Reel Script Generator</Typography>
            <Typography>Full scripts in Hinglish, Hindi, or English.</Typography>
            <Button component={Link} to="/scripts" variant="contained" sx={{ mt: 2 }}>
              Go
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper sx={{ p: 3, textAlign: 'center' }}>
            <Typography variant="h5">Caption + Hashtag AI</Typography>
            <Typography>Emotion-based captions & trending hashtags.</Typography>
            <Button component={Link} to="/captions" variant="contained" sx={{ mt: 2 }}>
              Go
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper sx={{ p: 3, textAlign: 'center' }}>
            <Typography variant="h5">CTA Generator</Typography>
            <Typography>Convert views into followers and sales.</Typography>
            <Button component={Link} to="/ctas" variant="contained" sx={{ mt: 2 }}>
              Go
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
