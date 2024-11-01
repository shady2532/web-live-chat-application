import { Container, Nav, Navbar, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
const navBar = () => {
  return (
    <Navbar
      bg="dark"
      className="mb-4"
      style={{ height: "4rem", fontFamily: "Roboto Mono" }}
    >
      <Container>
        <h1>
          <Link to="/" className="link-light text-decoration-none">
            Chatter!
          </Link>
        </h1>
        <Nav>
          <Stack direction="horizontal" gap={3}>
            <Link to="/login" className="link-light text-decoration-none">
              Sign-in
            </Link>
            <Link to="/register" className="link-light text-decoration-none">
              Register
            </Link>
          </Stack>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default navBar;
