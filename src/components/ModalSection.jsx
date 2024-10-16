import React from "react";
import { Button, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ModalSection = () => {
  const navigate = useNavigate();

  const [openModal, setOpenModal] = useState(false);
  const [OrderDetails, setOrderDetails] = useState({
    fullName: "",
    mobile: "",
    address: "",
    pincode: "",
  });

  const handleChange = (e) => {
    setOrderDetails({ ...OrderDetails, [e.target.name]: e.target.value });

    console.log(OrderDetails);
  };

  const handleOrder = (e) => {
    e.preventDefault();
    if (
      !OrderDetails.fullName ||
      !OrderDetails.mobile ||
      !OrderDetails.address ||
      !OrderDetails.pincode
    ) {
      return toast.error("All Field Are Required");
    } else {
      toast.success("Order Successfull");

      setOpenModal();
      setOrderDetails("");
      navigate("/paymentPage");
    }
  };

  function onCloseModal() {
    setOpenModal(false);
    setOrderDetails("");
  }
  return (
    <>
      <Button
        onClick={() => setOpenModal(true)}
        className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-1 text-sm text-white uppercase w-full"
      >
        Checkout
      </Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Your Full Name" />
              </div>
              <TextInput
                id="name"
                value={OrderDetails.fullName}
                onChange={handleChange}
                name="fullName"
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="mobile" value="Your Mobile" />
              </div>
              <TextInput
                id="mobile"
                value={OrderDetails.mobile}
                onChange={handleChange}
                name="mobile"
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="address" value="Your Full Address" />
              </div>
              <TextInput
                id="address"
                value={OrderDetails.address}
                onChange={handleChange}
                name="address"
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="pincode" value="Your Pincode" />
              </div>
              <TextInput
                id="pincode"
                type="text"
                value={OrderDetails.pincode}
                onChange={handleChange}
                name="pincode"
                required
              />
            </div>

            <div className="w-full ">
              <Button className="w-full" onClick={handleOrder}>
                Proceed
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalSection;
