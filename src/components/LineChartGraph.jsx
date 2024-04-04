import { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';
import {
  LineChart,
  Legend,
  XAxis,
  Tooltip,
  CartesianGrid,
  YAxis,
  Line,
  ResponsiveContainer,
} from 'recharts';

export default function LineChartGraph() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const socket = socketIOClient('http://localhost:4001/');

    // Función para manejar los datos recibidos del socket y actualizar el estado
    const handleData = (newData) => {
      setData(newData);
    };

    // Establece el evento de escucha del socket
    socket.on('message', handleData);

    // Limpia el evento de escucha del socket cuando el componente se desmonta
    return () => {
      socket.off('message', handleData);
    };
  }, [data]); // Solo se ejecutará una vez al montar el componente

  return (
    <>
      <ResponsiveContainer width='100%' height={300}>
        <LineChart
          width={100}
          height={300}
          data={data}
          margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
        >
          <Legend verticalAlign='top' height={36} />
          <XAxis dataKey='name' />
          <YAxis dataKey='x' domain={[0, 4000]} tickCount={10} />
          <Tooltip />
          <CartesianGrid stroke='#f5f5f5' x={1000} />
          <Line type='monotone' dataKey='size' stroke='#99df00' yAxisId={0} />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}
