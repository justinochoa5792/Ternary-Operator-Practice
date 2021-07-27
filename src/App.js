import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { FaBeer } from "react-icons/fa";
import "./App.css";

function App() {
  const [show, setShow] = useState(false);
  const [test1, setTest1] = useState(false);
  const [test2, setTest2] = useState(false);
  const [test3, setTest3] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleTest1 = () => {
    setTest1(true);
    setTest2(false);
    setTest3(false);
  };
  const handleTest2 = () => {
    setTest1(false);
    setTest2(true);
    setTest3(false);
  };
  const handleTest3 = () => {
    setTest1(false);
    setTest2(false);
    setTest3(true);
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
              <FaBeer />
              Test 1
            </Button>
            <Button onClick={handleTest2}>
              <FaBeer />
              Test 2
            </Button>
            <Button onClick={handleTest3}>
              <FaBeer />
              Test 3
            </Button>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        {test1 ? (
          <p>Did this work?</p>
        ) : test2 ? (
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
