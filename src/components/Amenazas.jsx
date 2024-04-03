import DataTable, { createTheme } from 'react-data-table-component';
import AlertModal from './AlertsModal.jsx';
import { useState } from 'react';

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
      name: 'IP Origen',
      selector: (row) => row.ip_origen,
    },
    {
      name: 'Dirección',
      selector: (row) => row.direccion,
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

  function getRandomType() {
    let types = ['LOW', 'MEDIUM', 'HIGH', 'CRITICAL'];
    let index = Math.floor(Math.random() * 4);
    return types[index];
  }
  const data = [
    {
      ip_origen: '192.228.17.57',
      direccion: 'google.com',
      ip_destino: '192.228.17.57',
      tamano: 25,
      cantidad: 32,
      tipo: getRandomType(),
    },
    {
      ip_origen: '192.228.17.57',
      direccion: 'google.com',
      ip_destino: '192.228.17.57',
      tamano: 25,
      cantidad: 32,
      tipo: getRandomType(),
    },
    {
      ip_origen: '192.228.17.57',
      direccion: 'google.com',
      ip_destino: '192.228.17.57',
      tamano: 25,
      cantidad: 32,
      tipo: getRandomType(),
    },
    {
      ip_origen: '192.228.17.57',
      direccion: 'google.com',
      ip_destino: '192.228.17.57',
      tamano: 25,
      cantidad: 32,
      tipo: getRandomType(),
    },
    {
      ip_origen: '192.228.17.57',
      direccion: 'google.com',
      ip_destino: '192.228.17.57',
      tamano: 25,
      cantidad: 32,
      tipo: getRandomType(),
    },
    {
      ip_origen: '192.228.17.57',
      direccion: 'google.com',
      ip_destino: '192.228.17.57',
      tamano: 25,
      cantidad: 32,
      tipo: getRandomType(),
    },
    {
      ip_origen: '192.228.17.57',
      direccion: 'google.com',
      ip_destino: '192.228.17.57',
      tamano: 25,
      cantidad: 32,
      tipo: getRandomType(),
    },
    {
      ip_origen: '192.228.17.57',
      direccion: 'google.com',
      ip_destino: '192.228.17.57',
      tamano: 25,
      cantidad: 32,
      tipo: getRandomType(),
    },
    {
      ip_origen: '192.228.17.57',
      direccion: 'google.com',
      ip_destino: '192.228.17.57',
      tamano: 25,
      cantidad: 32,
      tipo: getRandomType(),
    },
    {
      ip_origen: '192.228.17.57',
      direccion: 'google.com',
      ip_destino: '192.228.17.57',
      tamano: 25,
      cantidad: 32,
      tipo: getRandomType(),
    },
    {
      ip_origen: '192.228.17.57',
      direccion: 'google.com',
      ip_destino: '192.228.17.57',
      tamano: 25,
      cantidad: 32,
      tipo: getRandomType(),
    },
    {
      ip_origen: '192.228.17.57',
      direccion: 'google.com',
      ip_destino: '192.228.17.57',
      tamano: 25,
      cantidad: 32,
      tipo: getRandomType(),
    },
    {
      ip_origen: '192.228.17.57',
      direccion: 'google.com',
      ip_destino: '192.228.17.57',
      tamano: 25,
      cantidad: 32,
      tipo: getRandomType(),
    },
  ];

  const [, setInfo] = useState(false);
  const [modalInfo, setModalInfo] = useState(null);

  const handleButtonClick = (row) => {
    const { ip_origen, direccion, ip_destino, tamano, cantidad, tipo } = row;

    setModalInfo(
      <AlertModal
        ip_d={ip_origen}
        direccion={direccion}
        ip_o={ip_destino}
        tamano={tamano}
        cantidad={cantidad}
        tipo={tipo}
        onCloseKeep={handleCloseKeep}
        onCloseRemove={handleCloseRemove}
      />
    );

    setInfo(true);
  };

  const handleCloseKeep = () => {
    setInfo(false);
    setModalInfo(null);
  };

  const handleCloseRemove = () => {
    alert('Entrada de amenaza eliminada');
    setInfo(false);
    setModalInfo(null);
  };

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
