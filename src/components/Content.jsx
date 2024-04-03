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
      <section className='mt-12 flex items-center justify-between'>
        <div className='flex items-start gap-3'>
          <Button
            onSelect={() => handleClick('graficas')}
            isSelected={button == 'graficas'}
          >
            Graficas
          </Button>
          <div className='flex'>
            <Button
              onSelect={() => handleClick('amenazas')}
              isSelected={button == 'amenazas'}
            >
              Amenazas
            </Button>
            <span className='fixed mx-24 flex h-3 w-3'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75'></span>
              <span className='relative inline-flex rounded-full h-3 w-3 bg-purple-500'></span>
            </span>
          </div>
        </div>
        <input
          type='email'
          placeholder='email...'
          className='bg-gray-800 p-1 rounded text-center text-gray-400'
        ></input>
      </section>
      {info}
    </>
  );
}
