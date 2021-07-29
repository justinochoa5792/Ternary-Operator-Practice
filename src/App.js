import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { FaBeer } from "react-icons/fa";
import "./App.css";

function App() {
  const [show, setShow] = useState(false);
  const [isClicked, setIsClicked] = useState("button1", "button2", "button3");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleTest1 = () => {
    setIsClicked("button1");
  };
  const handleTest2 = () => {
    setIsClicked("button2");
  };
  const handleTest3 = () => {
    setIsClicked("button3");
  };
  return (
    <div className="App">
      <h1>Test Modal</h1>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="Modal">
            <Button onClick={handleTest1}>
              <FaBeer className={isClicked === "button1" ? "active" : ""} />
              Test 1
            </Button>
            <Button onClick={handleTest2}>
              <FaBeer className={isClicked === "button2" ? "active" : ""} />
              Test 2
            </Button>
            <Button onClick={handleTest3}>
              <FaBeer className={isClicked === "button3" ? "active" : ""} />
              Test 3
            </Button>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        {isClicked === "button1" ? (
          <p>Did this work?</p>
        ) : isClicked === "button2" ? (
          <p>How about this?</p>
        ) : (
          <p>And this?</p>
        )}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
