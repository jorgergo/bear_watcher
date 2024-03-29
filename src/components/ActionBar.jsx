import { useState } from 'react';
import Button from './Button';

export default function ActionBar() {
  const [button, setButton] = useState('graficas');

  function handleClick(value) {
    console.log(value);
  }

  if (button == 'graficas') {
    let buttons = (
      <div className='flex items-start gap-3'>
        <Button
          onSelect={() => handleClick('graficas')}
          isSelected={button == 'graficas'}
        >
          Graficas
        </Button>
        <Button
          onSelect={() => handleClick('estandares')}
          isSelected={button == 'estandares'}
        >
          Estandares
        </Button>
      </div>
    );
  }

  return (
    <section className='mt-12 flex items-center justify-between'>
      <div className='flex items-start gap-3'>
        <Button onSelect={handleClick}>Graficas</Button>
        <Button onSelect={handleClick}>Estandares</Button>
      </div>
      <input
        type='email'
        placeholder='email...'
        className='bg-gray-800 p-1 rounded text-center text-gray-400'
      ></input>
    </section>
  );
}
