import React, { useState } from 'react';
import { Typography, TextField, Button, Box, Paper, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { generateCta } from '../services/api';

const CtaGenerator = () => {
  const [topic, setTopic] = useState('');
  const [goal, setGoal] = useState('Follow');
  const [ctas, setCtas] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await generateCta({ topic, goal });
      setCtas(response.data.ctas);
    } catch (error) {
      console.error('Error generating CTAs:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>CTA Generator</Typography>
      <Paper sx={{ p: 3 }}>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            margin="normal"
            required
          />
          <FormControl fullWidth margin="normal">
            <InputLabel>Goal</InputLabel>
            <Select
              value={goal}
              label="Goal"
              onChange={(e) => setGoal(e.target.value)}
            >
              <MenuItem value="Follow">Gain Followers</MenuItem>
              <MenuItem value="Save">Increase Saves</MenuItem>
              <MenuItem value="Comment">Drive Comments</MenuItem>
              <MenuItem value="Sales">Sales/Conversion</MenuItem>
            </Select>
          </FormControl>
          <Button type="submit" variant="contained" disabled={loading} sx={{ mt: 2 }}>
            {loading ? 'Generating...' : 'Generate CTAs'}
          </Button>
        </form>
      </Paper>

      {ctas.length > 0 && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>Generated CTAs:</Typography>
          {ctas.map((cta, index) => (
            <Paper key={index} sx={{ p: 2, mb: 2, bgcolor: '#f5f5f5' }}>
              <Typography>{cta}</Typography>
            </Paper>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default CtaGenerator;
