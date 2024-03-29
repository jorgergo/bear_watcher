import Button from './Button';

export default function ActionBar() {
  return (
    <section className='mt-12 flex items-center justify-between'>
      <div className='flex items-start gap-3'>
        <Button>Graficas</Button>
        <Button>Estandares</Button>
      </div>
      <input
        type='email'
        placeholder='email...'
        className='bg-primary p-2 rounded text-center text-gray-400'
      ></input>
    </section>
  );
}
