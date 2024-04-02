import Header from './components/Header';
import Content from './components/Content';
import Logs from './components/Logs';

function App() {
  return (
    <>
      <Header></Header>
      <section className='flex flex-col mx-40 gap-4'>
        <Content></Content>
        <Logs></Logs>
      </section>
    </>
  );
}

export default App;
