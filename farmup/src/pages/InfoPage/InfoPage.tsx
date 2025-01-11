import { useParams } from "react-router-dom";
import NormalHeader from "../../components/NormalHeader/NormalHeader";
import Footer from "../../components/Footer/Footer";

import "./InfoPage.css";

const InfoPage: React.FC = () => {
  let params = useParams();

  return (
    <div className="page-container">
      <div className="content-wrap">
        <header>
          <NormalHeader />
        </header>

        <main>
          <h1>InfoPage</h1>
          <p>Post Id: {params.postId}</p>
        </main>
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default InfoPage;
