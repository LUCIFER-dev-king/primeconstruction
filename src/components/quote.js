import React from "react";
import { Accordion, Card, useAccordionButton } from "react-bootstrap";
const Quote = () => {
  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log("totally custom!")
    );

    return (
      <Card className='mt-2 px-2 py-2 py-md-3' onClick={decoratedOnClick}>
        {children}
      </Card>
    );
  }
  return (
    <div id='quotation' className='container mt-5'>
      <div className='gallery-text' style={{ color: "#FFCE52" }}>
        <span style={{ color: "#fff" }}>REQUEST</span> A QUOTE
      </div>
      <div className='shadow-lg'>
        <Accordion defaultActiveKey='0'>
          <div>
            <CustomToggle eventKey='0'>Basement</CustomToggle>
          </div>
          <Accordion.Collapse eventKey='0' className='text-light'>
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
          <div>
            <CustomToggle eventKey='1'>Plumbing</CustomToggle>
          </div>
          <Accordion.Collapse eventKey='1' className='text-light'>
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </Accordion>
      </div>
    </div>
  );
};

export default Quote;

/*<Card className='mt-2'>
          <Card.Header>
            <CustomToggle eventKey='1'>Click me!</CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey='1'>
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card> */
