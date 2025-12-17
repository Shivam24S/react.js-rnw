// import React from 'react'
// import { createPortal } from 'react-dom'

// const CartModal = () => {
//   return createPortal(
//     <h1>
//         this is cart portal
//     </h1>,
//     document.getElementById("modal-root")
//   )
// }

// export default CartModal


import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";


function CartModal({ onShow, onClose, products,clearCart }) {


  return (
    <div
      className="modal show d-flex flex-column justify-content-center align-items-center"
      style={{ display: "block", position: "initial" }}
    >
      <Modal show={onShow} onHide={onClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Your Cart Items</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        
        </Modal.Body>

        <Modal.Footer className="d-flex justify-content-between w-100">
         

          <Button variant="primary" >
            Place Order
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CartModal;
