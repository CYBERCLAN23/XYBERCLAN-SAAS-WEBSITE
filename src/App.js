import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import XyberClanWebsite from './xybersite';
import TeamPage from './TeamPage';
import ProjectForm from './ProjectForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<XyberClanWebsite />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/start-project" element={<ProjectForm />} />
      </Routes>
    </Router>
  );
}

export default App;