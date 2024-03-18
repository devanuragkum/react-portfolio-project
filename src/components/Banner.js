import React from "react";
import { useState } from 'react';
import homeRightImg from "../assets/home-right.png";
import ModelPopUp from "./Model";
import Button from "react-bootstrap/esm/Button";
import Resume from "../assets/resume-anurag.pdf";

const HomeBanner = () => {
	const [show, setShow] = useState(false);
	const handleShow = () => setShow(true);
	const downloadResume = () => {
     
        // using Java Script method to get PDF file
        fetch(Resume).then((response) => {
            response.blob().then((blob) => {
             
                // Creating new object of PDF file
                const fileURL =
                    window.URL.createObjectURL(blob);
                     
                // Setting various property values
                let alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = "anurag-resume.pdf";
                alink.click();
            });
        });
    };

  return (
    <>
      {show && <ModelPopUp show={show} setShow={setShow} /> }
   
          <div className="container-fluid home_banner_area">
            <div className="row banner_inner">
              <div className="col-lg-7">
                <div className="banner_content">
                  <h3 className="text-uppercase">Hello !</h3>
                  <h1 className="text-uppercase">I am Anurag</h1>
                  <h5 className="text-uppercase">NetSuite Certified Developer & Consultant</h5>
                  <div className="d-flex align-items-center">
					<Button variant="secondary" onClick={handleShow}>
                      knock, knock !
                    </Button>
					<p style={{marginRight:"10px"}}></p>
					<Button variant="secondary" onClick={downloadResume}>
						Get CV
                    </Button>
      
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="home_right_img">
                  <img
                    className=""
                    src={homeRightImg}
                    alt=""
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            </div>
          </div>      
    </>
  );
};

export default HomeBanner;
