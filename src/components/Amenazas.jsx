import DataTable, { createTheme } from 'react-data-table-component';

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
  const handleButtonClick = (row) => {
    alert(row.ip_destino);
  };
  const data = [
    {
      ip_origen: '192.228.17.57',
      direccion: 'Tampico, Tamaulipas',
      ip_destino: '192.228.17.57',
      tamano: 25,
      cantidad: 32,
      tipo: 'MODERADA',
    },
    {
      ip_origen: '192.228.17.57',
      direccion: 'Tampico, Tamaulipas',
      ip_destino: '192.228.17.57',
      tamano: 25,
      cantidad: 15,
      tipo: 'MODERADA',
    },
    {
      ip_origen: '192.228.17.57',
      direccion: 'Tampico, Tamaulipas',
      ip_destino: '192.228.17.57',
      tamano: 3,
      cantidad: 15,
      tipo: 'MODERADA',
    },
    {
      ip_origen: '192.228.17.57',
      direccion: 'Tampico, Tamaulipas',
      ip_destino: '192.228.17.57',
      tamano: 76,
      cantidad: 15,
      tipo: 'MODERADA',
    },
    {
      ip_origen: '192.228.17.57',
      direccion: 'Tampico, Tamaulipas',
      ip_destino: '192.228.17.57',
      tamano: 13,
      cantidad: 15,
      tipo: 'MODERADA',
    },
    {
      ip_origen: '192.228.17.57',
      direccion: 'Tampico, Tamaulipas',
      ip_destino: '192.228.17.57',
      tamano: 77,
      cantidad: 100,
      tipo: 'MODERADA',
    },
    {
      ip_origen: '192.228.17.57',
      direccion: 'Tampico, Tamaulipas',
      ip_destino: '192.228.17.57',
      tamano: 25,
      cantidad: 15,
      tipo: 'MODERADA',
    },
    {
      ip_origen: '192.228.17.57',
      direccion: 'Tampico, Tamaulipas',
      ip_destino: '192.228.17.57',
      tamano: 25,
      cantidad: 15,
      tipo: 'MODERADA',
    },
    {
      ip_origen: '192.228.17.57',
      direccion: 'Tampico, Tamaulipas',
      ip_destino: '192.228.17.57',
      tamano: 25,
      cantidad: 15,
      tipo: 'MODERADA',
    },
    {
      ip_origen: '192.228.17.57',
      direccion: 'Tampico, Tamaulipas',
      ip_destino: '192.228.17.57',
      tamano: 25,
      cantidad: 77,
      tipo: 'MODERADA',
    },
    {
      ip_origen: '192.228.17.57',
      direccion: 'Tampico, Tamaulipas',
      ip_destino: '192.228.17.57',
      tamano: 12,
      cantidad: 15,
      tipo: 'MODERADA',
    },
    {
      ip_origen: '192.228.17.57',
      direccion: 'Tampico, Tamaulipas',
      ip_destino: '192.228.17.57',
      tamano: 25,
      cantidad: 15,
      tipo: 'MODERADA',
    },
    {
      ip_origen: '192.228.17.57',
      direccion: 'Tampico, Tamaulipas',
      ip_destino: '192.228.17.57',
      tamano: 25,
      cantidad: 15,
      tipo: 'MODERADA',
    },
    {
      ip_origen: '192.228.17.57',
      direccion: 'Tampico, Tamaulipas',
      ip_destino: '192.228.17.57',
      tamano: 36,
      cantidad: 12,
      tipo: 'MODERADA',
    },
    {
      ip_origen: '192.228.17.57',
      direccion: 'Tampico, Tamaulipas',
      ip_destino: '192.228.17.57',
      tamano: 25,
      cantidad: 15,
      tipo: 'MODERADA',
    },
    {
      ip_origen: '192.228.17.57',
      direccion: 'Tampico, Tamaulipas',
      ip_destino: '192.228.17.57',
      tamano: 25,
      cantidad: 15,
      tipo: 'MODERADA',
    },
    {
      ip_origen: '192.228.17.57',
      direccion: 'Tampico, Tamaulipas',
      ip_destino: '192.228.17.57',
      tamano: 25,
      cantidad: 23,
      tipo: 'MODERADA',
    },
    {
      ip_origen: '192.228.17.57',
      direccion: 'Tampico, Tamaulipas',
      ip_destino: '192.228.17.57',
      tamano: 25,
      cantidad: 88,
      tipo: 'MODERADA',
    },
  ];

  return (
    <>
      <DataTable
        theme='bearwatcher'
        responsive
        columns={columns}
        data={data}
        pagination
        fixedHeader
      ></DataTable>
    </>
  );
}
