import { Alert, Col, Row, Stack, Form, Button } from "react-bootstrap";
import {useContext} from "react";
import {AuthContext} from "../context/authContext";

const Register = () => {
    const {registerInfo, updateRegisterInfo} = useContext(AuthContext);
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
                            
                            <Form.Control type="text" placeholder="Name" onChange={(e)=>updateRegisterInfo({...registerInfo,name:e.target.value})} />
                            <Form.Control type="email" placeholder="E-mail" onChange={(e)=>updateRegisterInfo({...registerInfo,email:e.target.value})} />
                            <Form.Control type="password" placeholder="Password" onChange={(e)=>updateRegisterInfo({...registerInfo,password:e.target.value})} />
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