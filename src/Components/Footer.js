import styled from "styled-components";

const Footer = (props) => {
  return (
    <FooterContent>
      <Content>
        <a>About Disney+ Hotstar</a>
        <a>Terms of use</a>
        <a>Privacy Policy</a>
        <a>FAQ</a>
        <a>Feedback</a>
        <a>Careers</a>
      </Content>
      <div>
        ©2022 STAR. All Rights Reserved. HBO, Home Box Office and all related
        channel and programming logos are service marks of, and all related
        programming visuals and elements are the property of, Home Box Office,
        Inc. All rights reserved.
      </div>
    </FooterContent>
  );
};

const FooterContent = styled.div`
  color: rgb(249, 249, 249);
  z-index: 1;
  font-size: 10px;
  padding: 45px 0px;
  width: 45vw;
  text-align: left;
  line-height: 1.8;
  letter-spacing: 1px;
  @media (max-width: 768px) {
    font-size: 8px;
    line-height: 1.4;
    padding: 20px 0px 20px;
    width: calc(100vw - 100px);
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 14px;
  width: calc(100 - 60px);
  a {
    padding: 0px 10px 10px 0px;

    &:hover {
      cursor: pointer;
      color: rgba(14, 76, 192, 0.829);
    }
  }

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

export default Footer;
