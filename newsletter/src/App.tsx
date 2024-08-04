import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Entry from './pages/Entry';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/entry/1">Entry 1</Link>
        <Link to="/entry/2">Entry 2</Link>
      </nav>
      <Routes>
        <Route path="/entry/:id" element={<Entry />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
