import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import './App.css';
import Formulario from './components/Formulario';
import Titulo from './components/Titulo';

function App() {
  return (
    <div className="App">
      <Titulo></Titulo>
      <Container className='border border-3 my-5 px-0'>
        <Formulario></Formulario>
      </Container>
    </div>
  );
}

export default App;
