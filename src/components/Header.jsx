import { useState } from 'react';
import bearWatcher_logo from '../assets/bearwatcher_logo.jpg';

import AlertsModal from './AlertsModal';

export default function Header() {
  const [showModal, setModal] = useState(true);

  function handleOnClose() {
    setModal(false);
  }

  return (
    <>
      <AlertsModal visible={showModal} onClose={handleOnClose}></AlertsModal>
      <div className=' flex justify-between items-center py-4 px-40'>
        <div className='flex items-center gap-4'>
          <img
            src={bearWatcher_logo}
            className='w-12 rounded-full  '
            alt='bear watcher logo'
          />
          <h2 className='text-lg text-gray-50 font-semibold'>Bear Watcher</h2>
        </div>
      </div>
    </>
  );
}
