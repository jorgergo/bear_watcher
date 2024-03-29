export default function Button({ children, onSelect, isSelected }) {
  return (
    <button
      className={
        isSelected
          ? 'bg-purple-700 px-4 py-1 text-gray-50 font-semibold hover:bg-purple-900 rounded-xl'
          : 'bg-gray-800 px-4 py-1 text-gray-50 font-semibold hover:bg-gray-900 rounded-xl'
      }
      onClick={onSelect}
    >
      {children}
    </button>
  );
}
