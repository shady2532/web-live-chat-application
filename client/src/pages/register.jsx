import { Alert, Col, Row, Stack, Form, Button } from "react-bootstrap";

const Register = () => {
    return (
        <>
            <Form>
                <Row style={{
                    height: "100vh",
                    justifyContent: "center",
                    paddingTop: "15%"
                }}>
                    <Col xs={6}>
                        <Stack gap={3}>
                            <h2>Register Here!</h2>
                            <Form.Control type="text" placeholder="Name" />
                            <Form.Control type="email" placeholder="E-mail" />
                            <Form.Control type="password" placeholder="Password" />
                            <Button variant="primary" type="submit">Submit</Button>
                            <Alert variant = "danger">An error has occured!</Alert>
                        </Stack>
                    </Col>
                </Row>
            </Form>
        </>
    );
}

export default Register;