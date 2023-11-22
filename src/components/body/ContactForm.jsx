import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

function ContactForm() {

  const [contactData, setContactData] = useState({ name: "", email: "", subject: "", message: "", access_key: "4d629821-388d-4cab-a599-fa9cd078622b", })

  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState('')

  const handleInputChange = (e) => {
    console.log({ [e.target.name]: e.target.value })
    setContactData({ ...contactData, [e.target.name]: e.target.value })
    console.log(contactData)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = JSON.stringify(contactData);

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setSuccess(true);
        setMessage('Message sent successfully')
        setContactData({
          ...contactData,
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Container >
        <h4>Message Me</h4>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="exampleForm.ControlInput1">
              <Form.Label className='contactLabels'>Name</Form.Label>
              <Form.Control type="text" name="name" placeholder="Name" onChange={handleInputChange} value={contactData.name} />
            </Form.Group>
            <Form.Group as={Col} controlId="exampleForm.ControlInput1">
              <Form.Label className='contactLabels'>Email</Form.Label>
              <Form.Control type="email" placeholder="Email" name="email" onChange={handleInputChange} value={contactData.email} />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="exampleForm.ControlInput1">
              <Form.Label className='contactLabels'>Subject</Form.Label>
              <Form.Control type="text" name="subject" placeholder="Subject" onChange={handleInputChange} value={contactData.subject} />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} controlId="exampleForm.ControlInput1">
              <Form.Label className='contactLabels'>Message</Form.Label>
              <Form.Control as="textarea" placeholder="Leave a message here" style={{ height: '100px' }} name='message' onChange={handleInputChange} value={contactData.message} />
            </Form.Group>
          </Row>
          <Form.Group as={Col} className='formSubmit' controlId="exampleForm.ControlInput1">
            <Button className='btn' type="submit" variant="dark">Send Message </Button>
          </Form.Group>
          
          {message && <div className={`success-${success}`}>{message}</div>}
        </Form>
      </Container>
    </>
  )
}

export default ContactForm