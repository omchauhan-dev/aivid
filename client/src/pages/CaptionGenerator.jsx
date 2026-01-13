import React, { useState } from 'react';
import { Typography, TextField, Button, Box, Paper, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { generateCaption } from '../services/api';

const CaptionGenerator = () => {
  const [topic, setTopic] = useState('');
  const [emotion, setEmotion] = useState('Excited');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await generateCaption({ topic, emotion });
      setResult(response.data.result);
    } catch (error) {
      console.error('Error generating caption:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>Caption + Hashtag AI</Typography>
      <Paper sx={{ p: 3 }}>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Topic/Description"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            margin="normal"
            required
            multiline
            rows={2}
          />
          <FormControl fullWidth margin="normal">
            <InputLabel>Emotion/Tone</InputLabel>
            <Select
              value={emotion}
              label="Emotion/Tone"
              onChange={(e) => setEmotion(e.target.value)}
            >
              <MenuItem value="Excited">Excited</MenuItem>
              <MenuItem value="Professional">Professional</MenuItem>
              <MenuItem value="Funny">Funny</MenuItem>
              <MenuItem value="Inspirational">Inspirational</MenuItem>
              <MenuItem value="Serious">Serious</MenuItem>
            </Select>
          </FormControl>
          <Button type="submit" variant="contained" disabled={loading} sx={{ mt: 2 }}>
            {loading ? 'Generating...' : 'Generate Caption'}
          </Button>
        </form>
      </Paper>

      {result && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>Generated Result:</Typography>
          <Paper sx={{ p: 2, bgcolor: '#f5f5f5', whiteSpace: 'pre-line' }}>
            <Typography>{result}</Typography>
          </Paper>
        </Box>
      )}
    </Box>
  );
};

export default CaptionGenerator;
