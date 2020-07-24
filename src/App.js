import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import NeedsCard from './components/NeedsCard';
import MaskCard from './components/MaskCard';
import useFetchMasks from './hooks/useFetchMasks';

import './index.css';

function App() {
  const [maskDays, setMaskDays] = useState(0);
  const [styleA, setStyleA] = useState(1);
  const [styleB, setStyleB] = useState(2);
  const [indexA, setIndexA] = useState(0);
  const [indexB, setIndexB] = useState(0);
  const { masks } = useFetchMasks();

  useEffect(() => {
    if (masks.length) {
      setIndexA(masks.findIndex(x => x.id === parseInt(styleA)));
      setIndexB(masks.findIndex(x => x.id === parseInt(styleB)));
    }
  }, [styleA, styleB, masks])

  return (
    <div className="App">
      <Header />
      <section className="needs">
        <NeedsCard setMaskDays={setMaskDays} />
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
        <h1>Style A</h1>

        { masks.length && <h2>{masks[indexA].uses} wears per mask</h2> }
        <h1>Style B</h1>
        { masks.length && <h2>{masks[indexB].uses} wears per mask</h2> }
      </section>
    </div>
  );
}

export default App;
