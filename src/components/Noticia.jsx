import { Card, Button } from "react-bootstrap";

const Noticia = () => {
  return (
    <div className="col-12 col-md-6 col-lg-4 my-2">
      <Card>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">Diario z</Card.Subtitle>
          <Card.Title>
            Titulo noticia
          </Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dignissimos ab laboriosam modi, odio voluptatibus perferendis cumque accusantium fuga! Eveniet, in! Impedit dolore nam dolorum atque tempora id quaerat nemo illo aperiam, autem voluptatum dolorem temporibus unde at numquam alias quisquam omnis veniam doloremque sunt eos voluptate nihil? Iusto cumque vero id libero ratione sit nam voluptas eveniet rem amet?
          </Card.Text>
        </Card.Body>
          <Card.Footer className="d-grid gap-2">
            <Button variant="primary" size="lg" >Ver notica completa</Button>
          </Card.Footer>
      </Card>
    </div>
  );
};

export default Noticia;
