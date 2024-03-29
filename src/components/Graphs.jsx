import map from '../assets/World_Map.jpg';
import graph from '../assets/line_graph.png';

export default function Graphs() {
  return (
    <section className='grid grid-cols-2 items-center justify-center gap-6'>
      <img
        src={map}
        className='w-auto h-auto row-span-2'
        alt='map graph placeholder'
      />
      <img src={graph} className='w-auto' alt='graph placeholder' />
      <img src={graph} className='w-auto' alt='graph placeholder' />
    </section>
  );
}
