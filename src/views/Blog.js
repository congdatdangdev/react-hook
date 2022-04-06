import { Link, useNavigate } from "react-router-dom";
import useFetch from "../customize/Fetch";
import "./Blog.scss";
import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import AddNewBlog from "./AddNewBlog.js";

const Blog = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newData, setNewData] = useState([]);

  const {
    data: dataBlog,
    isLoading,
    isError,
  } = useFetch(`https://jsonplaceholder.typicode.com/posts`);

  useEffect(() => {
    if (dataBlog && dataBlog.length > 0) {
      let data = dataBlog.slice(0, 9);
      setNewData(data);
    }
  }, [dataBlog]);

  const handleAddNew = (blog) => {
    let data = newData;
    data.unshift(blog);
    setShow(false);
    setNewData(data);
  };

  const deletePost = (id) => {
    let data = newData;
    data = data.filter((item) => item.id !== id);
    setNewData(data);
  };

  return (
    <>
      <Button variant="primary" className="my-3" onClick={handleShow}>
        + add new blog
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddNewBlog handleAddNew={handleAddNew} />
        </Modal.Body>
      </Modal>
      <div className="container">
        <div className="blogs-container">
          {isLoading === false &&
            newData &&
            newData.length > 0 &&
            newData.map((item) => {
              return (
                <div className="single-blog" key={item.id}>
                  <div className="title">
                    <span>{item.title}</span>
                    <span onClick={() => deletePost(item.id)}>X</span>
                  </div>

                  <div className="content">{item.body}</div>
                  <button>
                    <Link to={`/blog/${item.id}`}>detail</Link>
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Blog;
