import { useParams } from "react-router-dom";

const InfoPage: React.FC = () => {
  let params = useParams();

  return (
    <div>
      <h1>InfoPage</h1>
      <p>Post Id: {params.postId}</p>
    </div>
  );
};

export default InfoPage;
