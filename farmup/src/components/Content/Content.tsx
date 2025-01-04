import { useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

interface ContentProps {
  contents: any[];
}

const Content: React.FC<ContentProps> = (props) => {
  const [content, setContent] = useState(props.contents);
  return (
    <div>
      {content.map((content, index) => {
        return (
          <div key={index} className="inner-content">
            <Card>
              <Card.Body>
                <Card.Title>{content.name}</Card.Title>
                <Card.Text>Scientific Name: {content.scientificName}</Card.Text>
                <Card.Text>Family: {content.family}</Card.Text>
                <Card.Text>Country of Origin: {content.origin}</Card.Text>
                <Card.Text>
                  <Link to={`/info/${content.id}`}>Learn More</Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Content;
