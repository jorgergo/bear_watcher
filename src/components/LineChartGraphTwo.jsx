import { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';
import { LineChart, XAxis, Tooltip, CartesianGrid, Line } from 'recharts';

export default function LineChartGraphTwo() {
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
      <LineChart
        width={800}
        height={300}
        data={data}
        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
      >
        <XAxis dataKey='name' />
        <Tooltip />
        <CartesianGrid stroke='#f5f5f5' />
        <Line type='bump' dataKey='x' stroke='#FFCC00' yAxisId={1} />
      </LineChart>
    </>
  );
}
