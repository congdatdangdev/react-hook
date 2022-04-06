import { useNavigate } from "react-router-dom";

const NotFound = () => {
  let navigate = useNavigate();
  const handleClickBtn = () => {
    navigate("", { replace: true });
  };
  return (
    <div className="not-found-container">
      <h4>This content isn't available at the moment</h4>
      <h5>
        When this happens, it's usually because the owner only shared it with a
        small group of people or changed who can see it, or it's been deleted.
      </h5>
      <button className="btn btn-primary" onClick={handleClickBtn}>
        Go To HomePage
      </button>
    </div>
  );
};

export default NotFound;
