import bearWatcher_logo from '../assets/logo.jpg';
import bell from '../assets/bell.svg';
import settings from '../assets/settings.svg';

export default function Header() {
  return (
    <>
      <div className=" flex justify-between items-center py-4 px-40">
        <div className="flex items-center gap-4 mt-3">
          <img
            src={bearWatcher_logo}
            className="w-12 rounded-full  "
            alt="bear watcher logo"
          />
          <h2 className="text-lg text-gray-50 font-semibold">Bear Watcher</h2>
        </div>
        <div className="flex gap-4">
          <img
            src={bell}
            className="w-9 hover:scale-110 ease-in-out duration-200 cursor-pointer"
            alt="bell icon"
          />
          <img
            src={settings}
            className="w-9 hover:scale-110 ease-in-out duration-200 cursor-pointer"
            alt="settings icon"
          />
        </div>
      </div>
    </>
  );
}
