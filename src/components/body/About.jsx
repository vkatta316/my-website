import React from 'react'
import PageHeader from '../header/PageHeader'

import { motion } from 'framer-motion'
import { useState, useEffect } from "react";
import resume from "../../resume/Vinay-Chowdary-Katta-Resume.pdf"
import landingImage from "../../images/Pic.png";

function About() {

  document.title = "About"

  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    setDownloading(false);
  }, [downloading]);

  const handleDownload = () => {
    setDownloading(true);
    const link = document.createElement("a");
    //link.href = resume;
    //link.download = "Vinay-Chowdary-Katta-Resume.pdf";
    link.onload = () => {
      link.remove();
      setDownloading(false);
    };
    document.body.appendChild(link);
    link.click();
  };
  return (
    <section className="flex1 about">
      <PageHeader title="About Me" description="Let me introduce myself" />
      {/* <AboutMe name={name} location={location} brand={brand} email={email} availability={availability} /> */}
      <div className="aboutContainer container">
        <div className="row">
        <motion.div
          className="personalImage col-12 col-lg-4"
        >
          <img src={landingImage} alt={landingImage} />
        </motion.div>
        <motion.div
          className="personalInfo col-12 col-lg-8">
          <div className="contentContainer">
            <h4>Nice to meet you</h4>
            <h5>Developer who creates amazing digital experiences!</h5>
            <div className="contentDescription">
              <p>Around 7 + years of extensive Development and Support experience in the field of Information Technology. 
                Developed applications using ServiceNow platform and experience in Java, Jakarta EE, JPA, JSF, EJB, Node.js, Express with Pug, HTML5, JavaScript (ES6),Bootstrap, CSS, and React JS.
                Ability to prioritize; manage work, take decisions and work in tandem with different departments ensuring on time delivery.</p>
            </div>
            <div className="infoContainer">
              <div className="row">
                <div className="col-12 col-md-6 info">
                  <span>Name:</span>
                  <p>Vinay Katta</p>
                </div>
                <div className="col-12 col-md-6 info">
                  <span>Email:</span>
                  <p>
                    <a href={`mailto:vinaykatta316@gmail.com`}>vinaykatta316@gmail.com</a>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6 info">
                  <span>Location:</span>
                  <p>Open to any Location</p>
                </div>
                <div className="col-12 col-md-6 info">
                  <span>Availability:</span>
                  <p>Open to work</p>
                </div>
              </div>
            </div>
           <div className="buttonContainer">
           <button type='button' className="button downloadCV" onClick={handleDownload} disabled={downloading}>
                {downloading ? "Downloading..." : "Download Resume"}
              </button>{" "}
           </div>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About