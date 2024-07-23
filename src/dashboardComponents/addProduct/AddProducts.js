"use client";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
import { ToastContainer, toast } from "react-toastify";
import { UploadDropzone } from "@uploadthing/react";
import { useAdminContext } from "../dashboardContext/DashBoardContext";
import "react-toastify/dist/ReactToastify.css";
import "@uploadthing/react/styles.css";

const AddProducts = () => {
  const { addProduct, categories, loading } = useAdminContext();
  const [categoryId, setCategoryId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [show, setShow] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!categoryId || !name || !description || !img) {
      toast.error("Please fill all fields.");
      return;
    }

    await addProduct(categoryId, name, description, img);
    setCategoryId("");
    setName("");
    setDescription("");
    setImg("");
    setShow(false);
    toast.success("Product added successfully!");
  };

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        Add Product
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        backdrop="static"
        keyboard={false}
          className="mt-5"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Category</Form.Label>
              <Form.Select
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
                required
              >
                <option value="">Select a category</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group style={{ marginTop: "1rem" }}>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product name"
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
                placeholder="Enter product description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group style={{ marginTop: "1rem", }}>
              <Form.Label>Image Upload</Form.Label>
              <img src={img} alt="" className="w-[50px]" />
              <UploadDropzone
            
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                  setImg(res[0].url);
                  toast.success("Upload Completed");
                }}
                onUploadError={(error) => {
                  toast.error(`ERROR! ${error.message}`);
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer >
          
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
              "Add Product"
            )}
          </Button>
          <Button
            variant="danger"
            onClick={() => setShow(false)}
            disabled={loading}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddProducts;
