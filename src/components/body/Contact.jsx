import React from 'react'
import PageHeader from '../header/PageHeader'

import { motion } from 'framer-motion'

function Contact() {
  document.title = "Contact"
  return (
    <section className="flex1 contact">
      <PageHeader title="Contact" description="Get In Touch" />
      <div className="contactWrap container">
        <div className="myContact row">
          <div className="col-12 col-lg-6">
            
          </div>
          <div className="col-12 col-lg-6">
            <motion.div className="contactInfo">
              <h4 className="contentTitle">Contact Information</h4>
              <p className="infoDescription">Open for opportunities. </p>
              <ul className="listInfo">
                <li>
                  <div className="personalContactInfo">
                    <span className="infoIcon">
                      <i className="icon fa-solid fa-user"></i>{" "}
                    </span>
                    <div className="mediaWrap">
                      <h6 className="infoType">Name</h6>
                      <span className="infoValue">Katta Vinay</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="personalContactInfo">
                    <span className="infoIcon">
                      <i className="icon fa-solid fa-location-pin "></i>{" "}
                    </span>
                    <div className="mediaWrap">
                      <h6 className="infoType">Location</h6>
                      <span className="infoValue">Chicago</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="personalContactInfo">
                    <span className="infoIcon">
                      <i className="icon fa-solid fa-location-pin "></i>{" "}
                    </span>
                    <div className="mediaWrap">
                      <h6 className="infoType">Mobile Number</h6>
                      <span className="infoValue">+1 630-853-6380</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="personalContactInfo">
                    <span className="infoIcon">
                      <i className="icon fa-solid fa-envelope "></i>{" "}
                    </span>
                    <div className="mediaWrap">
                      <h6 className="infoType">Email</h6>
                      <span className="infoValue">
                        <a href={`mailto:vinaykatta316@gmail.com`}>vinaykatta316@gmail.com</a>
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact