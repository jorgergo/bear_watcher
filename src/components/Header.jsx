import bearWatcher_logo from '../assets/react.svg';
import virusIcon from '../assets/virus.svg';

export default function Header() {
  return (
    <div className=' flex justify-between items-center py-4 px-40'>
      <div className='flex items-center gap-4'>
        <img src={bearWatcher_logo} alt='bear watcher logo' />
        <h2 className='text-lg text-gray-50 font-semibold'>Bear Watcher</h2>
      </div>
      <img
        className='max-w-xs w-12 cursor-pointer'
        src={virusIcon}
        alt='virus icon'
      />
    </div>
  );
}
