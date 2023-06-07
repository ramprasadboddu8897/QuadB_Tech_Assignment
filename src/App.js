import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShowList from './components/ShowsList';
import ShowSummary from './components/ShowSummary';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<ShowList />} />
          <Route path="/show/:id" element={<ShowSummary />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
