"use client";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
import { ToastContainer, toast } from "react-toastify";
import { useAdminContext } from "../dashboardContext/DashBoardContext";
import "react-toastify/dist/ReactToastify.css";

const AddCategorie = () => {
  const { addCategory, loading } = useAdminContext();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [keyword, setkeyword] = useState("");
  const [metadescription, setmetadescription] = useState("");
  const [show, setShow] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !description || !keyword ||!metadescription ) {
      toast.error("Please fill all fields.");
      return;
    }

    await addCategory(name, description,keyword,metadescription);
    setName("");
    setDescription("");
    setkeyword("")
    setmetadescription("")
    setShow(false);
    toast.success("Category added successfully!");
  };

  return (
    <div>
      <Button variant="primary" onClick={() => setShow(true)}>
        Add Category
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        backdrop="static"
        keyboard={false}
        className="mt-5"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter category name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group style={{ marginTop: "1rem" }}>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter category description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group style={{ marginTop: "1rem" }}>
              <Form.Label>Meta Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter category meta description"
                value={metadescription}
                onChange={(e) => setmetadescription(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group style={{ marginTop: "1rem" }}>
              <Form.Label>keyword</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter keyword"
                value={keyword}
                onChange={(e) => setkeyword(e.target.value)}
                required
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger"
            onClick={() => setShow(false)}
            disabled={loading}
          >
            Close
          </Button>
          <Button
            type="submit"
            variant="primary"
            className="text-white"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? <Spinner animation="border" size="sm" /> : "Add Category"}
          </Button>
        </Modal.Footer>
      </Modal>
{/* 
      <ToastContainer /> */}
    </div>
  );
};

export default AddCategorie;
