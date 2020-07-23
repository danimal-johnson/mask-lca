import React, { useState } from 'react';
import Header from './components/Header';
import Calculator from './components/Calculator';
import MaskCard from './components/MaskCard';
import './index.css';

function App() {
  const [maskDays, setMaskDays] = useState(0);

  return (
    <div className="App">
      <Header />
      <section className="needs">
        <Calculator setMaskDays={setMaskDays} />
      </section>
      <section className="options">
        <MaskCard />
      </section>
      <section className="results">
        <h1>Total mask days = {maskDays} </h1>
      </section>
    </div>
  );
}

export default App;
