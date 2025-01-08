import { Alert, Col, Row, Stack, Form, Button } from "react-bootstrap";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

const Register = () => {
  const {
    registerInfo,
    updateRegisterInfo,
    registerUser,
    registerError,
    isRegisterLoading,
  } = useContext(AuthContext);
  //console.log("shady");

  return (
    <>
      <Form onSubmit={registerUser}>
        <Row
          style={{
            height: "100vh",
            justifyContent: "center",
            paddingTop: "15%",
          }}
        >
          <Col xs={6}>
            <Stack gap={3}>
              <h2>Register Here!</h2>

              <Form.Control
                type="text"
                placeholder="Name"
                onChange={(e) =>
                  updateRegisterInfo({ ...registerInfo, name: e.target.value })
                }
              />

              <Form.Control
                type="email"
                placeholder="E-mail"
                onChange={(e) =>
                  updateRegisterInfo({ ...registerInfo, email: e.target.value })
                }
              />

              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) =>
                  updateRegisterInfo({
                    ...registerInfo,
                    password: e.target.value,
                  })
                }
              />

              <Button variant="primary" type="submit">
                {isRegisterLoading ? "Creating your account" : "Register!"}
              </Button>

              {registerError?.error && (
                <Alert variant="danger">
                  <p>{registerError?.message}</p>
                </Alert>
              )}
            </Stack>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default Register;
