export default function AlertsModal({ visible, onClose }) {
  if (!visible) return null;

  return (
    <di className='fixed insert-0 flex justify-center items-center w-full h-full'>
      <div className='bg-gray-900 shadow-lg rounded-lg flex flex-col gap-5 p-9 py-12'>
        <h1 className='text-gray-100  font-semibold text-2xl'>
          Amenza detectada
        </h1>
        <div className='grid grid-cols-5 grid-rows-2 gap-y-1 gap-x-4'>
          <p className='text-gray-500'>IP origen</p>
          <p className='text-gray-500'>IP destino</p>
          <p className='text-gray-500'>Tamaño</p>
          <p className='text-gray-500'>Cantidad</p>
          <p className='text-gray-500'>Tipo</p>
          <p className='text-gray-200'>192.228.17.57</p>
          <p className='text-gray-200'>192.228.17.57</p>
          <p className='text-gray-200'>50</p>
          <p className='text-gray-200'>12</p>
          <p className='text-red-500 font-semibold'>CABRONA</p>
        </div>
        <button
          onClick={onClose}
          className='bg-purple-700 px-4 py-1 text-gray-50 font-semibold hover:bg-purple-900 rounded-xl mt-5'
        >
          cerrar
        </button>
      </div>
    </di>
  );
}
