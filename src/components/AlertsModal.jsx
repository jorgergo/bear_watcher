import PropTypes from 'prop-types';

export default function AlertsModal({
  ip_o,
  direccion,
  ip_d,
  tamano,
  cantidad,
  tipo,
  onCloseKeep,
  onCloseRemove,
}) {
  let tipoColor;

  switch (tipo) {
    case 'MEDIUM':
      tipoColor = <p className='text-yellow-500 font-semibold'>{tipo}</p>;
      break;
    case 'HIGH':
      tipoColor = <p className='text-pink-600 font-semibold'>{tipo}</p>;
      break;
    case 'CRITICAL':
      tipoColor = <p className='text-red-500 font-bold'>{tipo}</p>;
      break;
    default:
      tipoColor = <p className='text-green-500 font-semibold'>{tipo}</p>;
      break;
  }

  return (
    <div className='fixed inset-0 flex justify-center items-center w-full h-full z-50 backdrop-blur-sm'>
      <div className='bg-gray-900 shadow-lg rounded-lg flex flex-col gap-5 p-9 py-12 w-[1000px]'>
        <h1 className='text-gray-100 font-semibold text-2xl'>
          Amenaza detectada
        </h1>
        <div className='grid grid-cols-6 justify-between items-center '>
          <p className='text-gray-500'>IP origen</p>
          <p className='text-gray-500'>Dirección</p>
          <p className='text-gray-500'>IP destino</p>
          <p className='text-gray-500'>Tamaño</p>
          <p className='text-gray-500'>Cantidad</p>
          <p className='text-gray-500'>Tipo</p>
          <p className='text-gray-200'>{ip_o}</p>
          <p className='text-gray-200'>{direccion}</p>
          <p className='text-gray-200'>{ip_d}</p>
          <p className='text-gray-200'>{tamano}</p>
          <p className='text-gray-200'>{cantidad}</p>
          {tipoColor}
        </div>
        <p className='text-gray-400 font-semibold text-lg'>Descripción:</p>
        <p className='text-gray-200'>
          Lorem ipsum dolor sit amet. Aut officiis aspernatur ut dolores iste in
          exercitationem fugit ad modi natus sit atque illo. Qui illo dolores
          non blanditiis perferendis eum velit nisi aut deleniti deleniti ea
          eveniet tempore est distinctio nisi ut sunt dolores. Lorem ipsum dolor
          sit amet. Aut officiis aspernatur ut dolores iste in exercitationem
          fugit ad modi natus sit atque illo. Qui illo dolores non blanditiis
          perferendis eum velit nisi aut deleniti deleniti ea eveniet tempore
          est distinctio nisi ut sunt dolores.
        </p>
        <section className='flex flex-col'>
          <p className='text-gray-500 text-sm italic'>
            *Define si esto es una verdadera amenaza o es un falso positivo
          </p>
          <div className='flex gap-6'>
            <button
              type='button'
              onClick={onCloseKeep}
              className='bg-blue-600 px-4 py-1 text-gray-50 font-semibold hover:bg-blue-900 rounded-xl  mt-5'
            >
              Mantener como amenaza
            </button>
            <button
              type='button'
              onClick={onCloseRemove}
              className='bg-red-500 px-4 py-1 text-gray-50 font-semibold hover:bg-red-900 rounded-xl  mt-5'
            >
              Falso positivo
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

AlertsModal.propTypes = {
  ip_o: PropTypes.string.isRequired,
  direccion: PropTypes.string.isRequired,
  ip_d: PropTypes.string.isRequired,
  tamano: PropTypes.number.isRequired,
  cantidad: PropTypes.number.isRequired,
  tipo: PropTypes.string.isRequired,
  onCloseKeep: PropTypes.func.isRequired,
  onCloseRemove: PropTypes.func.isRequired,
};
