const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const aiRoutes = require('./routes/aiRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api', aiRoutes);

app.get('/', (req, res) => {
  res.send('Viral Hook Engine API is running');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
