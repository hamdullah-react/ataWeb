"use client";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
import { ToastContainer, toast } from "react-toastify";
import { useAdminContext } from "../dashboardContext/DashBoardContext";
import { MdModeEdit } from "react-icons/md";
import "react-toastify/dist/ReactToastify.css";

const UpdateCategory = ({ category }) => {
  const { updateCategory, loading } = useAdminContext();
  const [name, setName] = useState(category.name);
  const [description, setDescription] = useState(category.description);
  const [show, setShow] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !description) {
      toast.error("Please fill all fields.");
      return;
    }

    await updateCategory(category.id, name, description);
    setShow(false);
    toast.success("Category updated successfully!");
  };

  return (
    <>
      <MdModeEdit
        size={20}
        onClick={() => setShow(true)}
        style={{ cursor: "pointer" }}
      />

      <Modal
        show={show}
        onHide={() => setShow(false)}
        backdrop="static"
        keyboard={false}
          className="mt-5"
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Category</Modal.Title>
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
            {loading ? (
              <Spinner animation="border" size="sm" />
            ) : (
              "Update Category"
            )}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UpdateCategory;
