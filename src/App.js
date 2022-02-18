import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);
function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route exact path='/hats' element={<HatsPage />} />
      </Routes>
      {/* <Routes>
        <Route exact path='/' component={<Homepage />} />
        <Route exact path='/hats' component={HatsPage} />
      </Routes> */}
    </div>
  );
}

export default App;
