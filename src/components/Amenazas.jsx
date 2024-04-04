import React, { useState, useEffect } from 'react';
import DataTable, { createTheme } from 'react-data-table-component';
import AlertModal from './AlertsModal.jsx';
import axios from 'axios';

export default function Amenazas() {
  createTheme(
    'bearwatcher',
    {
      text: {
        primary: '#E9E9E9',
        secondary: '#ad63d9',
      },
      background: {
        default: 'rgba(41, 41, 41, 0.15)',
      },
      divider: {
        default: 'rgba(0, 0, 0, 0.2)',
      },
      action: {
        button: 'rgba(0,0,0,.54)',
        hover: 'rgba(0,0,0,.08)',
        disabled: 'rgba(0,0,0,.12)',
      },
    },
    'dark'
  );

  const columns = [
    {
      name: 'ID',
      selector: (row) => row.id,
    },
    {
      name: 'IP Origen',
      selector: (row) => row.ip_origen,
    },
    {
      name: 'IP Destino',
      selector: (row) => row.ip_destino,
    },
    {
      name: 'Tamaño',
      selector: (row) => row.tamano,
      sortable: true,
    },
    {
      name: 'Cantidad',
      selector: (row) => row.cantidad,
      sortable: true,
    },
    {
      name: 'Tipo',
      selector: (row) => row.tipo,
      sortable: true,
    },
    {
      name: '',
      cell: (row) => (
        <button
          className='bg-purple-800 px-4 py-1 text-gray-50 font-semibold hover:bg-purple-900 rounded'
          onClick={() => handleButtonClick(row)}
        >
          Informacion
        </button>
      ),
    },
  ];

  const [modalInfo, setModalInfo] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://172.20.10.7:5000/ticket');
        console.log(response.data);

        if (Array.isArray(response.data.data)) {
          const newData = [];
          for (let i = 0; i < response.data.data.length; i++) {
            const item = response.data.data[i];
            const newItem = {
              id: item[0],
              ip_origen: item[3],
              ip_destino: item[4],
              tamano: item[6],
              cantidad: getRandomNum(), // Supongo que esta es la posición correcta para la cantidad
              tipo: getRandomType(), // Aquí podrías seguir generando un tipo aleatorio o usar una lógica diferente
            };
            newData.push(newItem);
          }
          setData(newData);
        } else {
          throw new Error('Data received is not an array.');
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    const intervalId = setInterval(fetchData, 30000);

    return () => clearInterval(intervalId);
  }, []);

  const handleButtonClick = (row) => {
    const { id, ip_origen, ip_destino, tamano, cantidad, tipo } = row;

    setModalInfo(
      <AlertModal
        id={id}
        ip_d={ip_origen}
        ip_o={ip_destino}
        tamano={tamano}
        cantidad={cantidad}
        tipo={tipo}
        onCloseKeep={handleCloseKeep}
        onCloseRemove={handleCloseRemove}
      />
    );
  };

  const handleCloseKeep = () => {
    setModalInfo(null);
  };

  const handleCloseRemove = () => {
    alert('Entrada de amenaza eliminada');
    setModalInfo(null);
  };

  function getRandomType() {
    let types = ['LOW', 'MEDIUM', 'HIGH', 'CRITICAL'];
    let index = Math.floor(Math.random() * 4);
    return types[index];
  }

  function getRandomNum() {
    return Math.floor(Math.random() * 500);
  }

  if (loading) return <div className='text-gray-400 font-bold'>Loading...</div>;
  if (error)
    return (
      <div className='text-gray-400 font-bold'>Error: {error.message}</div>
    );

  return (
    <>
      {modalInfo}
      <DataTable
        theme='bearwatcher'
        responsive
        columns={columns}
        data={data}
        pagination
        fixedHeader
      />
    </>
  );
}
