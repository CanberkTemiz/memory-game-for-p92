import React, { useState, useEffect } from "react";
import { Alert } from "react-bootstrap";

const WinAlert = () => {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <Alert
      show={showAlert}
      onClose={() => setShowAlert(false)}
      variant="danger"
      dismissible
    >
      You won !
    </Alert>
  );
};

export default WinAlert;
