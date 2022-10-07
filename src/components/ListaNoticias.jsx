import { Row } from "react-bootstrap";
import Noticia from "./Noticia";

const ListaNoticias = () => {
    return (
        <Row className="mt-2 mb-4 justify-content-around px-4">
            <Noticia></Noticia>
        </Row>
    );
};

export default ListaNoticias;