import { useContext } from "react";
import { Alert, Col, Row, Stack, Form, Button } from "react-bootstrap";
import { AuthContext } from "../context/authContext";

const Login = () => {
  const { logInInfo, updateLogInInfo, logInUser, logInError, isLogInLoading } =
    useContext(AuthContext);

  return (
    <>
      <Form onSubmit={logInUser}>
        <Row
          style={{
            height: "100vh",
            justifyContent: "center",
            paddingTop: "15%",
          }}
        >
          <Col xs={6}>
            <Stack gap={3}>
              <h2>Sign-in</h2>

              <Form.Control
                type="email"
                placeholder="E-mail"
                onChange={(e) =>
                  updateLogInInfo({ ...logInInfo, email: e.target.value })
                }
              />

              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) =>
                  updateLogInInfo({
                    ...logInInfo,
                    password: e.target.value,
                  })
                }
              />

              <Button variant="primary" type="submit">
                {isLogInLoading ? "Loading your account" : "Sign-in!"}
              </Button>
              {logInError?.error && (
                <Alert variant="danger">
                  <p>{logInError?.message}</p>
                </Alert>
              )}
            </Stack>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default Login;
