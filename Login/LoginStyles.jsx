import styled from "styled-components";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

export const MainDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background: #f5f5f5;
  width: 100%;
  height: 100vh;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    gap: 0px;
    align-items: initial;
    justify-content: initial;
  }
`;
export const ImgCards = styled(Card)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45vw;
  height: 85vh;
  border: none;
  @media only screen and (max-width: 600px) {
    width: 100%;
    height: max-content;
    background: #f5f5f5;
  }
`;
export const Cards = styled(Card)`
  display: flex;
  justify-content: center;
  width: 45vw;
  height: 85vh;
  border: none;
  padding: 0px 80px;
  @media only screen and (max-width: 600px) {
    width: 100%;
    height: max-content;
    align-items: initial;
    justify-content: initial;
     padding: 0px 20px;
     background: #f5f5f5;
  }
`;
export const Image = styled.img`
  width: 35vw;
  height: 65vh;
  @media only screen and (max-width: 600px) {
    width: 300px;
    height: 400px;
  }
`;
export const ERPLogo = styled.img`
  @media only screen and (max-width: 600px) {
  display:none;
  }
`;
export const StyledInput = styled(Form.Control)`
  width: 100%;
  height: 50px;
  font-family: "Inter", sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 18.15px;
  text-align: left;
  @media only screen and (max-width: 600px) {
    color: #00000066;
    border-radius:15px;
    border: 1px solid #00000026;
  }
`;
export const StyledLabel = styled(Form.Label)`

  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 18.15px;
  text-align: left;
  color: #000000;
  @media only screen and (max-width: 600px) {
    display:none;
  }
`;
export const HeadingDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 600px) {
    align-items: initial;
    justify-content: initial;

  }
`
export const Heading = styled.h5`
font-family: "Inter", sans-serif;
font-size: 35px;
font-weight: 600;
line-height: 42.36px;
text-align: left;
@media only screen and (max-width: 600px) {
color:#00000099;
}
`;
export const StyledButton = styled.button`
  background: #0094ff;
  border-radius: 15px;
  width: 100%;
  height: 40px;
  font-family: "Inter", sans-serif;
  font-size: 15px;
  font-weight: 500;
  line-height: 21.78px;
  text-align: center;
  color: #ffffff;
  border: none;
`;
