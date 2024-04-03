import { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';
import {
  LineChart,
  XAxis,
  Tooltip,
  CartesianGrid,
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
          <XAxis dataKey='name' />
          <Tooltip />
          <CartesianGrid stroke='#f5f5f5' />
          <Line type='bump' dataKey='x' stroke='#99df00' yAxisId={0} />
          <Line type='bump' dataKey='y' stroke='#ff0055' yAxisId={1} />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}
