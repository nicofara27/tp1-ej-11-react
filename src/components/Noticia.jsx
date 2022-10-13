import { Card, Button } from "react-bootstrap";

const Noticia = ({ title, description, link, image_url, source_id, category, country }) => {
  const desc = description;
  let desc2 = ""
  if(desc != null && desc.length>200){
    desc2 = desc.slice(0, 200)+"...";
  }
  return (
    <div className="col-12 col-md-6 col-lg-4 my-2">
      <Card className="h-100">
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted">{source_id}</Card.Subtitle>
          <Card.Title className="fw-semibold">{title}</Card.Title>
          <Card.Text>
            {desc2}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="d-grid gap-2">
          <a href={link} target="_blank" className="btn btn-primary btn-lg">Ver noticia completa</a>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Noticia;
