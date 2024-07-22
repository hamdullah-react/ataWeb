import { UploadDropzone } from "@/app/(home)/utils/uploadthing";
import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function AddProducts() {
  const [show, setShow] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("/api/products");
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!selectedCategory || !name || !description || !img) {
      toast.error("Please fill all fields and upload an image.");
      setLoading(false);
      return;
    }

    try {
      await axios.post("/api/products", {
        categoryId: selectedCategory,
        name,
        description,
        img,
      });

      setName("");
      setDescription("");
      setImg("");
      toast.success("Data added successfully!");
    } catch (error) {
      console.error("Error adding data:", error);
      toast.error("Error adding data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Product
      </Button>

      <Modal  show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="flex justify-center">
            <Form onSubmit={handleSubmit} style={{ width: "100%" }}>
              <Form.Group>
                <Form.Label>Category</Form.Label>
                <Form.Select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  required
                >
                  <option value="">Select Category</option>
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

              <Form.Group style={{ marginTop: "1rem" }}>
                <Form.Label>Image Upload</Form.Label>
                <img  src={img} alt="" className="w-[50px]"/>
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
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose} disabled={loading}>
            Close
          </Button>
          <Button
            type="submit"
            variant="primary"
            className="text-white"
            disabled={loading}
            onClick={handleSubmit}
          >
            {loading ? <Spinner animation="border" size="sm" /> : "Add Product"}
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer />
    </>
  );
}

export default AddProducts;
