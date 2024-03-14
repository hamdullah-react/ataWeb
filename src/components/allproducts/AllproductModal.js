import React from "react";

const AllproductModal = ({product}) => {
  console.log('first',product.id)
  return (
    <>
      <>
        {/* Button trigger modal */}
        <span
          type="button"
          className="btn btn-primary w-[100%] flex justify-between"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
           <i className="fas fa-eye text-primary mr-1 mt-1" />
         View Detail
        </span>
        {/* Modal */}
        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex={-1}
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">
                  Modal title
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <>
                  {/* Shop Detail Start */}
                  <div className="container-fluid py-5">
                    <div className="row px-xl-5">
                      <div className="col-lg-5 pb-5">
                        <div className=" border">
                        
                            <img
                              className="w-100 h-100"
                              src="img/1.jpeg"
                              alt="Image"
                            />
                          
                        </div>
                      </div>
                      <div className="col-lg-7 pb-5">
                        <h3 className="font-weight-semi-bold">
                          Colorful Stylish Shirt
                        </h3>

                        <h3 className="font-weight-semi-bold mb-4"></h3>
                        <p className="mb-4">
                          Volup erat ipsum diam elitr rebum et dolor. Est nonumy
                          elitr erat diam stet sit clita ea. Sanc invidunt ipsum
                          et, labore clita lorem magna lorem ut. Erat lorem duo
                          dolor no sea nonumy. Accus labore stet, est lorem sit
                          diam sea et justo, amet at lorem et eirmod ipsum diam
                          et rebum kasd rebum.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Shop Detail End */}
                </>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default AllproductModal;
