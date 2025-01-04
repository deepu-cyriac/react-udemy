import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Content from "../../components/Content/Content";

import contents from "../../data/contents.json";

const Home: React.FC = () => {
  return (
    <div>
      {/* <Container> */}
      {/* Header Section */}
      <header>
        <Header />
      </header>

      {/* Content Section */}
      <main>
        <Content contents={contents} />
      </main>

      {/* Footer Section */}
      <footer>
        <Footer />
      </footer>
      {/* </Container> */}
    </div>
  );
};

export default Home;
