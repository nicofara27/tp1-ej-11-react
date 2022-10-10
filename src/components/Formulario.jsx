import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import ListaNoticias from "./ListaNoticias";

const Formulario = () => {
  const [categoria, setCategoria] = useState("");
  const [pais, setPais] = useState("");
  const [url, setUrl] = useState("https://newsdata.io/api/1/news?apikey=pub_12037b6be7b90080cdd090890fa014ba33dfb&language=es");
  const [noticias, setNoticias] = useState([]);
  
  const consultarAPI = async () => {
    try {
      //Peticion a la API para obtener la lista de noticias
      const respuesta = await fetch(url);
      const listaNoticias = await respuesta.json();
      setNoticias(listaNoticias.results)
    } catch (error) {
      console.log(error);
    }
  };
  
  //Ciclo de vida del componente. 
  useEffect(()=> {
    //Este codigo se ejecuta cuando cambia uno de los parametros de categoria o pais
    setUrl("https://newsdata.io/api/1/news?apikey=pub_12037b6be7b90080cdd090890fa014ba33dfb&language=es"+categoria+pais);
    consultarAPI()
    
  }, [pais, categoria, url]);

  return (
    <div>
      <Form className="py-4 px-3">
        <Form.Group className="d-flex flex-wrap">
          <Form.Label className="col-12 col-md-3 m-0 align-self-center">
            Buscar por categoria:
          </Form.Label>
          <div className="col-12 col-md-9">
            <Form.Select onChange={(e) => {
              setCategoria("&category="+e.target.value);
            }}>
              <option>Options</option>
              <option value="entertainment">Etretenimiento</option>
              <option value="politics">Politica</option>
              <option value="sports">Deporte</option>
              <option value="top">Top</option>
              <option value="world">Mundo</option>
            </Form.Select>
          </div>
        </Form.Group>
        <Form.Group className="d-flex flex-wrap">
          <Form.Label className="col-12 col-md-3 m-0 align-self-center">
            Buscar por pais:
          </Form.Label>
          <div className="col-12 col-md-9">
            <Form.Select onChange={(e) => {
              setPais("&country="+e.target.value);
            }}>
              <option>Options</option>
              <option value="ar">Argentina</option>
              <option value="cl">Chile</option>
              <option value="co">Colombia</option>
              <option value="mx">Mexico</option>
              <option value="es">Spain</option>
              <option value="pe">Peru</option>
            </Form.Select>
          </div>
        </Form.Group>
      </Form>
      <ListaNoticias noticias={noticias}></ListaNoticias>
    </div>
  );
};

export default Formulario;
