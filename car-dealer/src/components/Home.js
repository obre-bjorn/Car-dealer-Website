import React from 'react';
import styled from 'styled-components';

import Section from './Section'

function Home() {
  return <Container>
      <Section 
      title = "Mercedes G-Wagon"
      description = "Order Online for Delivery"
      backgroundImg = "g-wagon.jpg"
      leftBtnText = "Custom Order"
      rightBtnText = "Existing Inventory"

      />
      <Section 
        title = "The BMW i4 M50"
        description = "Order Online for Delivery"
        backgroundImg = "convertable.jpg"
        leftBtnText = "Custom Order"
        rightBtnText = "Existing Inventory"
      />
      <Section 
        title = "Subaru WRX"
        description = "Order Online for Delivery"
        backgroundImg = "wrx.jpg"
        leftBtnText = "Custom Order"
        rightBtnText = "Existing Inventory"
      />
      <Section 
        title = " Volkswagon Polo-GT "
        description = "Order Online for Delivery"
        backgroundImg = "vwpolo.jpg"
        leftBtnText = "Custom Order"
        rightBtnText = "Existing Inventory"
      />
      <Section 
        title = "Scania Trucks"
        description = "Order Online for Delivery"
        backgroundImg = "truck.jpg"
        leftBtnText = "Custom Order"
        rightBtnText = "Existing Inventory"
      />
      <Section 
        title = "Service & Repair"
        backgroundImg = "service.jpeg"
        leftBtnText = "Book Service"
        
      />
      
     
  </Container>;
}

export default Home;

const Container = styled.div`
    height: 100vh;

`