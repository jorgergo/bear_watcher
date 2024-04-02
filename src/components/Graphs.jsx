import MapView from './Map.jsx';
import LineChartGraph from './LineChartGraph';
import LineChartGraphTwo from './LineChartGraphTwo.jsx';

export default function Graphs() {
  return (
    <section className='grid grid-cols-2 items-center justify-center gap-6 max-h-[600px] overflow-hidden'>
      <div className='row-span-2 min-h-full min-w-full overflow-hidden'>
        <MapView></MapView>
      </div>
      <div>
        <LineChartGraph></LineChartGraph>
        <LineChartGraphTwo></LineChartGraphTwo>
      </div>
      <div className='min-h-[300px] bg-lime-400'></div>
    </section>
  );
}
