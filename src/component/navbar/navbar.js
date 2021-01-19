import React from "react"
import './navbar.css'
import {
        Navbar,
        Container,
        Nav,
       
      } from "react-bootstrap";



const Navbarr=()=>{
return(
 
    <Navbar expand="lg" >
  <Container>
    <Navbar.Brand ><img src='./../img/Untitled.png' alt="LIFE STYLE"/></Navbar.Brand>
    <Nav.Link href="#ALL PRODUCTS" className="all">ALL PRODUCTS</Nav.Link>
      <Nav.Link href="#CONTACT"className="contact">CONTACT</Nav.Link>
      <Nav.Link href="#ACCOUNT" className="account">ACCOUNT</Nav.Link>
      <Nav.Link href="#PRICING" className="pricing"> PRICING</Nav.Link>
  </Container>   
 </Navbar>

)

}
export default Navbarr;
