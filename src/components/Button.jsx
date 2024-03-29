export default function Button({ children }) {
  return (
    <button className='bg-primary p-2 text-gray-50 font-semibold rounded hover:bg-sky-700'>
      {children}
    </button>
  );
}
