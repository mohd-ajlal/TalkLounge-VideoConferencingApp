'use client'
import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  background-color: #333;
  color: #fff;
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 1rem;
  font-family: 'Arial, sans-serif';
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>By Mohd Ajlal</FooterText>
    </FooterContainer>
  );
};

export default Footer;
