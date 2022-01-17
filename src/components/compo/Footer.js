import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  



const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "green", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
        
      </h1>
      <Container>
        <Row>
    
        <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Evenements</FooterLink>
            <FooterLink href="#">Management</FooterLink>
            <FooterLink href="#">IT & Tech </FooterLink>
            <FooterLink href="#">Finance</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Mouad Ouakil</FooterLink>
            <FooterLink href="#">Asmaa Amara</FooterLink>
            <FooterLink href="#">Ali Ouahli</FooterLink>
            <FooterLink href="#">Aboubakr kassrioui</FooterLink>
          </Column>



          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Acceuil</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
            <FooterLink href="#">Github</FooterLink>
            <FooterLink href="#">SignUP</FooterLink>
          </Column>
       
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;