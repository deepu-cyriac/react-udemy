import { Link } from "react-router-dom";

const Content: React.FC = () => {
  return (
    <div>
      <h1>Farmup Content</h1>
      <Link to="/info/1">product 1</Link>
      <br />
      <Link to="/info/2">product 2</Link>
      <br />
      <Link to="/info/3">product 3</Link>
    </div>
  );
};

export default Content;
