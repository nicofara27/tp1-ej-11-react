import { Form } from "react-bootstrap";

const Formulario = () => {
  return (
    <Form className="py-4 px-3">
      <Form.Group className="d-flex flex-wrap">
        <Form.Label className="col-12 col-md-3 m-0 align-self-center">Buscar por categoria:</Form.Label>
        <div className="col-12 col-md-9">
        <Form.Select >
          <option>Options</option>
          <option value="business">Business</option>
          <option value="entertainment">Entertainment</option>
          <option value="environment">Environment</option>
          <option value="food">Food</option>
          <option value="health">Health</option>
          <option value="politics">Politics</option>
          <option value="science">Science</option>
          <option value="sports">Sports</option>
          <option value="technology">Technology</option>
          <option value="top">Top</option>
          <option value="world">World</option>
        </Form.Select>
        </div>
      </Form.Group>
    </Form>
  );
};

export default Formulario;
