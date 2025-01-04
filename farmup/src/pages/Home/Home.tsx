import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Content from "../../components/Content/Content";

import contents from "../../data/contents.json";

const Home: React.FC = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Header Section */}
      <header>
        <Container>
          <Row>
            <Col>
              <Header />
            </Col>
          </Row>
        </Container>
      </header>

      {/* Content Section */}
      <main className="flex-grow-1">
        <Container>
          <Row>
            <Col>
              <Content contents={contents} />
            </Col>
          </Row>
        </Container>
      </main>

      {/* Footer Section */}
      <footer>
        <Container>
          <Row>
            <Col>
              <Footer />
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Home;
