import styled from 'styled-components';

export const Header = styled.header`
width: 100%;
font-size: 100px;
color: rgba(175, 47, 47, 0.15);
font-weight: 100;
text-align: center;
`
export const Container = styled.section`
  width: 500px;
  margin: auto;
  margin-bottom: 50px;
`
export const Footer = styled.footer`
  font-size: 10px;
  color: #bfbfbf;
  text-align: center;
  font-weight: 100;
  line-height: 2;
`
export const Link = styled.a`
  font-weight: 400;

  &:link {
    color: #bfbfbf;
    text-decoration: none;
  }

  &:visited {
    color: #bfbfbf;
    text-decoration: none;
  }

  &:hover {
    text-decoration: underline;
  }
`