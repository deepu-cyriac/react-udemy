import NormalHeader from "../../components/NormalHeader/NormalHeader";
import Footer from "../../components/Footer/Footer";
import Content from "../../components/Content/Content";

import contents from "../../data/contents.json";

import "./PostsPage.css";

const PostsPage: React.FC = () => {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <header>
          <NormalHeader />
        </header>

        <div className="sep-line"></div>

        <main className="main-posts-content">
          <Content contents={contents} />
        </main>
      </div>

      <div className="sep-line"></div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default PostsPage;
