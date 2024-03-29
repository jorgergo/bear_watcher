import map from '../assets/World_Map.jpg';
import graph from '../assets/line_graph.png';

export default function Graphs() {
  return (
    <section className='grid grid-cols-2 items-center justify-center gap-6 max-h-[600px] overflow-hidden'>
      <div className='row-span-2 min-h-full bg-teal-400'></div>
      <div className='min-h-[300px] bg-red-500'></div>
      <div className='min-h-[300px] bg-lime-400'></div>
    </section>
  );
}
