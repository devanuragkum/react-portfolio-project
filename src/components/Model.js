import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModelPopUp({show,setShow}) {
  
  const handleClose = () => setShow(false);

  return (
    <>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Work with Me</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>To work with me via Fiverr <a href="https://www.fiverr.com/netsuitedevelop/create-a-netsuite-application-using-suitescript">Click Here</a>  <br/>
            To work with me directly send email to anurag8623@gmail.com or just fill the below form.
          </p>
        <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSeeBX_cCw9YQVbNlI4rHYRBBT3c_vCOr_-iTjMtQzAdCgn4mw/viewform?embedded=true"
            width="450"
            height="853"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModelPopUp;
