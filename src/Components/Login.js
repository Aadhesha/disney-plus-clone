import styled from "styled-components";

const Login = (props) => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/images/cta-logo-one.svg" alt="" />
          <SignUpButton>GET ALL THERE</SignUpButton>
          <Description>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and Disney Bundle will increase by $1.
          </Description>
          <CTALogoTwo src="/images/cta-logo-two.png" alt="" />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 40px;
  height: 100%;
`;

const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("images/login-background.jpg");
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  padding: 0;
  z-index: -1;
`;

const CTA = styled.div`
  max-width: 750px;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const CTALogoOne = styled.img`
  margin-bottom: 15px;
  max-width: 700px;
  min-height: 1px;
  display: block;
  width: 100%;
`;

const SignUpButton = styled.a`
  font-weight: bold;
  font-stretch: narrower;
  letter-spacing: 2px;
  color: white;
  background-color: rgb(13, 100, 245);
  width: 100%;
  margin-bottom: 12px;
  font-size: 22px;
  padding: 17.5px 0;
  border-radius: 4px;
  border: 1px solid transparent;

  &:hover {
    background-color: rgb(32, 110, 241);
    cursor: pointer;
  }
`;

const Description = styled.p`
  margin-top: 0;
  letter-spacing: 2px;
  max-width: 740px;
  color: white;
  font-size: 12px;
  line-height: 1.5;
  width: 100%;
`;

const CTALogoTwo = styled.img`
  margin-top: 15px;
  margin-bottom: 20px;
  max-width: 700px;
  /* display: inline-block;
  vertical-align: bottom; */
  display: block;
  width: 100%;
`;

export default Login;
