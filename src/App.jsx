import Header from './components/Header';
import Content from './components/Content';

function App() {
  return (
    <>
      <Header></Header>
      <section className='flex flex-col mx-40 gap-4'>
        <Content></Content>
      </section>
    </>
  );
}

export default App;
