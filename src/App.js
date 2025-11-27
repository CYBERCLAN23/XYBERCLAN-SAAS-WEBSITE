import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import XyberClanWebsite from './xybersite';
import TeamPage from './TeamPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<XyberClanWebsite />} />
        <Route path="/team" element={<TeamPage />} />
      </Routes>
    </Router>
  );
}

export default App;