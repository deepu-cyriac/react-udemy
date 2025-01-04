import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Content.css";

interface ContentProps {
  contents: any[];
}

const Content: React.FC<ContentProps> = (props) => {
  const content = props.contents;
  return (
    <div>
      {content.map((content, index) => {
        return (
          <div key={index} className="bg-light text-white text-center p-3">
            <Card bg="dark" text="light">
              <Card.Body>
                <Card.Title>{content.name}</Card.Title>
                <Card.Text>Scientific Name: {content.scientificName}</Card.Text>
                <Card.Text>Family: {content.family}</Card.Text>
                <Card.Text>Country of Origin: {content.origin}</Card.Text>
                <Button variant="outline-light" className="card-button">
                  <Link
                    to={`/info/${content.id}`}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Learn More
                  </Link>
                </Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Content;
