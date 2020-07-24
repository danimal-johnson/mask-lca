import React, { useState } from 'react';
import Header from './components/Header';
import NeedsForm from './components/NeedsForm';
import MaskCard from './components/MaskCard';
import useFetchMasks from './hooks/useFetchMasks';

import './index.css';

function App() {
  const [maskDays, setMaskDays] = useState(0);
  const [styleA, setStyleA] = useState(1);
  const [styleB, setStyleB] = useState(2);
  const { masks } = useFetchMasks();

  return (
    <div className="App">
      <Header />
      <section className="needs">
        <NeedsForm setMaskDays={setMaskDays} />
      </section>
      <section className="options">
        { masks.length && 
          <MaskCard style={styleA} update={setStyleA} masks={masks} />
        }
        { masks.length &&
          <MaskCard style={styleB} update={setStyleB} masks={masks} />
        }
      </section>
      <section className="results">
        <h1>Total mask days = {maskDays}</h1>
        <h1>Style A = {styleA}</h1>
        <h1>Style B = {styleB}</h1>
      </section>
    </div>
  );
}

export default App;
