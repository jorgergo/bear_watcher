import { useState } from 'react';

import Button from './Button';
import Graphs from './Graphs';
import Standar from './Standar';

export default function Content() {
  const [button, setButton] = useState('graficas');
  let info;

  function handleClick(value) {
    setButton(value);
  }

  if (button == 'graficas') {
    info = <Graphs></Graphs>;
  } else info = <Standar></Standar>;

  return (
    <>
      <section className="mt-12 flex items-center justify-between">
        <div className="flex items-start gap-3">
          <Button
            onSelect={() => handleClick('graficas')}
            isSelected={button == 'graficas'}
          >
            Graficas
          </Button>
          <Button
            onSelect={() => handleClick('amenazas')}
            isSelected={button == 'amenazas'}
          >
            Amenazas
          </Button>
        </div>
        <input
          type="email"
          placeholder="Correo"
          className="bg-gray-800 p-1 rounded text-center text-gray-400"
        ></input>
      </section>
      {info}
    </>
  );
}
