import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";

import "./Home.css";

const Home: React.FC = () => {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <header>
          <Header />
        </header>

        <main>
          <div className="carousel-overlay"></div>
          <Banner />
        </main>
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
