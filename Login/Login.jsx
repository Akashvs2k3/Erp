import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import StudentImg from "./assects/StudentImg.png";
import ERPLOGO from "./assects/ERPLOGO.png";
import {
  Cards,
  ERPLogo,
  Heading,
  HeadingDiv,
  Image,
  ImgCards,
  MainDiv,
  StyledButton,
  StyledInput,
  StyledLabel,
} from "./LoginStyles";

function Login() {
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [showForgotPasswordForm, setShowForgotPasswordForm] = useState(false);

  const handleForgotPasswordClick = () => {
    setShowLoginForm(false);
    setShowForgotPasswordForm(true);
  };

  const handleGoBackClick = () => {
    setShowLoginForm(true);
    setShowForgotPasswordForm(false);
  };

  return (
    <MainDiv>
      <ImgCards>
        <Image src={StudentImg} alt="" />
      </ImgCards>
      <Cards>
        <HeadingDiv>
          <ERPLogo src={ERPLOGO} alt="" />
          {showLoginForm && <Heading>Login</Heading>}
          {showForgotPasswordForm && <Heading>Forgot Password</Heading>}
        </HeadingDiv>
        {showLoginForm && (
          <Form>
            <Form.Group className="mb-3">
              <StyledLabel>Student ID</StyledLabel>
              <StyledInput type="email" placeholder="Enter Your Student ID" />
            </Form.Group>
            <Form.Group className="mb-3">
              <StyledLabel>Password</StyledLabel>
              <StyledInput type="password" placeholder="Enter Your Password" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Text>
                <a
                  href="#"
                  onClick={handleForgotPasswordClick}
                  style={{ textDecoration: "none" }}
                >
                  Forgot Password?
                </a>
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <StyledButton variant="primary" type="submit">
                Submit
              </StyledButton>
            </Form.Group>
          </Form>
        )}
        {showForgotPasswordForm && (
          <Form>
            <Form.Group className="mb-3">
              <StyledLabel>Student ID</StyledLabel>
              <StyledInput type="email" placeholder="Enter Your Email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <StyledLabel>New Password</StyledLabel>
              <StyledInput type="email" placeholder="Enter Your Email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <StyledLabel>Confirm Password</StyledLabel>
              <StyledInput type="email" placeholder="Enter Your Email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <StyledButton variant="primary" type="submit">
                Reset Password
              </StyledButton>
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Text>
                <a
                  href="#"
                  onClick={handleGoBackClick}
                  style={{ textDecoration: "none" }}
                >
                  Go Back
                </a>
              </Form.Text>
            </Form.Group>
          </Form>
        )}
      </Cards>
    </MainDiv>
  );
}

export default Login;
