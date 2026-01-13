import React, { useState } from 'react';
import { Typography, TextField, Button, Box, Paper, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { generateScript } from '../services/api';

const ScriptGenerator = () => {
  const [topic, setTopic] = useState('');
  const [duration, setDuration] = useState('30s');
  const [language, setLanguage] = useState('English');
  const [script, setScript] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await generateScript({ topic, duration, language });
      setScript(response.data.script);
    } catch (error) {
      console.error('Error generating script:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>Reel Script Generator</Typography>
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
            <InputLabel>Duration</InputLabel>
            <Select
              value={duration}
              label="Duration"
              onChange={(e) => setDuration(e.target.value)}
            >
              <MenuItem value="15s">15 Seconds</MenuItem>
              <MenuItem value="30s">30 Seconds</MenuItem>
              <MenuItem value="60s">60 Seconds</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel>Language</InputLabel>
            <Select
              value={language}
              label="Language"
              onChange={(e) => setLanguage(e.target.value)}
            >
              <MenuItem value="English">English</MenuItem>
              <MenuItem value="Hindi">Hindi</MenuItem>
              <MenuItem value="Hinglish">Hinglish</MenuItem>
            </Select>
          </FormControl>
          <Button type="submit" variant="contained" disabled={loading} sx={{ mt: 2 }}>
            {loading ? 'Generating...' : 'Generate Script'}
          </Button>
        </form>
      </Paper>

      {script && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>Generated Script:</Typography>
          <Paper sx={{ p: 2, bgcolor: '#f5f5f5', whiteSpace: 'pre-line' }}>
            <Typography>{script}</Typography>
          </Paper>
        </Box>
      )}
    </Box>
  );
};

export default ScriptGenerator;
