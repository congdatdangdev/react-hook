import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../customize/Fetch";
import "./Blog.scss";

const DetailBlog = () => {
  let { id } = useParams();
  let navigate = useNavigate();
  const handleBackData = () => {
    navigate("/blog");
  };

  const {
    data: dataBlogDetail,
    isLoading,
    isError,
  } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`, false);

  console.log(">>>>>>>>>>>Check ID", id);
  console.log(">>>>>>>>>>>Check data detail", dataBlogDetail);
  return (
    <>
      <div>
        <span onClick={handleBackData}>&lt;--Back</span>
      </div>
      <div className="blog-detail">
        <div className="title">
          Blog ID: {id}-- {dataBlogDetail.title}
        </div>
        <div className="content">{dataBlogDetail.body}</div>
      </div>
    </>
  );
};

export default DetailBlog;
