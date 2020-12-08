import React from 'react';
import Cridge from './features/Cridge'
import { createRequire } from 'module';
import { createRequire } from 'module';

var require = createRequire(import.meta.url);
var module = { exports: {} };

const require = createRequire(import.meta.url);

function App() {
  return (
    <div className="App">
      <Cridge />
    </div>
  );
}

export default App;
