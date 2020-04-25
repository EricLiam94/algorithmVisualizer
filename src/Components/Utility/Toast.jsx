import React from "react";
import { Toast } from "react-bootstrap";
const ToastNotification = ({ show, title, content }) => {
  return (
    <Toast
      show={show}
      delay={1000}
      style={{ position: "absolute", top: "50px", right: "50px" }}
      autohide
    >
      <Toast.Header>
        <strong className="mr-auto">{title}</strong>
      </Toast.Header>
      <Toast.Body style={{ backgroundColor: "red" }}>{content}</Toast.Body>
    </Toast>
  );
};

export default ToastNotification;
