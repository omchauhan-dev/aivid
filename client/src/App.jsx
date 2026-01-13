import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container, Button, Box } from '@mui/material';
import Home from './pages/Home';
import HookGenerator from './pages/HookGenerator';
import ScriptGenerator from './pages/ScriptGenerator';
import CaptionGenerator from './pages/CaptionGenerator';
import CtaGenerator from './pages/CtaGenerator';

function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Viral Hook Engine</Link>
          </Typography>
          <Button color="inherit" component={Link} to="/hooks">Hooks</Button>
          <Button color="inherit" component={Link} to="/scripts">Scripts</Button>
          <Button color="inherit" component={Link} to="/captions">Captions</Button>
          <Button color="inherit" component={Link} to="/ctas">CTAs</Button>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hooks" element={<HookGenerator />} />
          <Route path="/scripts" element={<ScriptGenerator />} />
          <Route path="/captions" element={<CaptionGenerator />} />
          <Route path="/ctas" element={<CtaGenerator />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
