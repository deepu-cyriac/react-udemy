import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const PostsPage: React.FC = () => {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <header>
          <Header />
        </header>

        <main>
          <p>This is the posts page!</p>
        </main>
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default PostsPage;
