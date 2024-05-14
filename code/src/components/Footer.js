import React from 'react';
import styled from 'styled-components/macro';

export const Footer = () => {
  return (
    <FooterSection>
      <FooterText>Designed by students @ Technigo Bootcamp 2023</FooterText>
      <Links>
        <StyledA href="https://www.linkedin.com/in/emiliasaberski/">Emilia
          <i className="fa-brands fa-linkedin-in" />
        </StyledA>
        <StyledA href="https://www.linkedin.com/in/fridanordenlow/">Frida
          <i className="fa-brands fa-linkedin-in" />
        </StyledA>
        <StyledA href="https://www.linkedin.com/in/andrea-hedstr%C3%B6m-3549a516b/">Andrea
          <i className="fa-brands fa-linkedin-in" />
        </StyledA>
      </Links>
    </FooterSection>
  )
}

const FooterSection = styled.div`
  font-size: 15px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 30px;
  bottom: 0;
  left: 0;
  margin-bottom: 10px;
  height: 2.5rem;
`
const FooterText = styled.div`
font-size: 14px;
color: grey;
margin-bottom: -20px;
text-align: center;
`

const StyledA = styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
  color: grey;
  &:hover {
    color: white;
  }
`
const Links = styled.div`
display: flex;
flex-direction: row;
margin-top: 10px;
`