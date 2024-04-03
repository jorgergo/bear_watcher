export default function AlertsModal({ info, onClose }) {
  return (
    <div className='fixed insert-0 flex justify-center items-center w-full h-full z-50'>
      <div className='bg-gray-900 shadow-lg rounded-lg flex flex-col gap-5 p-9 py-12'>
        <h1 className='text-gray-100  font-semibold text-2xl'>
          Amenza detectada
        </h1>
        <div className='grid grid-cols-5 grid-rows-2 gap-y-1 gap-x-4'>
          <p className='text-gray-500'>IP origen</p>
          <p className='text-gray-500'>Direccion</p>
          <p className='text-gray-500'>IP destino</p>
          <p className='text-gray-500'>Tamaño</p>
          <p className='text-gray-500'>Cantidad</p>
          <p className='text-gray-500'>Tipo</p>
          <p className='text-gray-200'>{info[0]}</p>
          <p className='text-gray-200'>{info[1]}</p>
          <p className='text-gray-200'>{info[2]}</p>
          <p className='text-gray-200'>{info[3]}</p>
          <p className='text-gray-200'>{info[4]}</p>
          <p className='text-red-500 font-semibold'>{info[5]}</p>
        </div>
        <button
          onClick={onClose}
          className='bg-purple-700 px-4 py-1 text-gray-50 font-semibold hover:bg-purple-900 rounded-xl mt-5'
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}
