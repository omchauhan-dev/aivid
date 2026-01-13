import React, { useState } from 'react';
import { Typography, TextField, Button, Box, Paper, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { generateHook } from '../services/api';

const HookGenerator = () => {
  const [topic, setTopic] = useState('');
  const [style, setStyle] = useState('Curiosity');
  const [hooks, setHooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await generateHook({ topic, style });
      setHooks(response.data.hooks);
    } catch (error) {
      console.error('Error generating hooks:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>Viral Hook Engine</Typography>
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
            <InputLabel>Style</InputLabel>
            <Select
              value={style}
              label="Style"
              onChange={(e) => setStyle(e.target.value)}
            >
              <MenuItem value="Curiosity">Curiosity</MenuItem>
              <MenuItem value="Shock">Shock</MenuItem>
              <MenuItem value="Question">Question</MenuItem>
              <MenuItem value="Storytelling">Storytelling</MenuItem>
            </Select>
          </FormControl>
          <Button type="submit" variant="contained" disabled={loading} sx={{ mt: 2 }}>
            {loading ? 'Generating...' : 'Generate Hooks'}
          </Button>
        </form>
      </Paper>

      {hooks.length > 0 && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>Generated Hooks:</Typography>
          {hooks.map((hook, index) => (
            <Paper key={index} sx={{ p: 2, mb: 2, bgcolor: '#f5f5f5' }}>
              <Typography>{hook}</Typography>
            </Paper>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default HookGenerator;
