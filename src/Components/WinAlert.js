import React, { useState, useEffect } from "react";
import { Alert } from "react-bootstrap";

const WinAlert = () => {
  const [showAlert, setShowAlert] = useState(false);

  // useEffect(() => {
  //   if (store.game.won === true) {
  //     setShowAlert(true);
  //     setTimeout(() => {
  //       setShowAlert(false);
  //     }, 2500);
  //   }
  // }, [store.game.won]);

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
