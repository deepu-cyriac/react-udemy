import NormalHeader from "../../components/NormalHeader/NormalHeader";
import Footer from "../../components/Footer/Footer";
import Content from "../../components/Content/Content";

import contents from "../../data/contents.json";

const PostsPage: React.FC = () => {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <header>
          <NormalHeader />
        </header>

        <main>
          <Content contents={contents} />
        </main>
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default PostsPage;
