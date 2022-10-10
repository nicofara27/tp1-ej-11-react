import { Row } from "react-bootstrap";
import Noticia from "./Noticia";

const ListaNoticias = ({ noticias }) => {
  return (
    <Row className="mt-3 mb-4 justify-content-around px-4">
      {noticias.map((noticia, posicion) => (
      <Noticia key={posicion} {...noticia}></Noticia>
      ))}
    </Row>
  );
};

export default ListaNoticias;
