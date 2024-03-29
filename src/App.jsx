import { useState } from 'react';

import Header from './components/Header';
import ActionBar from './components/ActionBar';
import Graphs from './components/Graphs';
import Logs from './components/Logs';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
      <section className="flex flex-col mx-40 gap-4">
        <ActionBar></ActionBar>
        <Graphs></Graphs>
        <Logs></Logs>
      </section>
    </>
  );
}

export default App;
