import { useContext } from "react";
import { Container, Nav, Navbar, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
const navBar = () => {

  const {user, logOutUser} = useContext(AuthContext);

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
        {user && <span className = "text-warning">Logged in as {user?.name}</span>}
        <Nav>
          <Stack direction="horizontal" gap={3}>
            {
              user && (<>
                <Link onClick={()=>logOutUser()} to="/login" className="link-light text-decoration-none">
                  Sign-Out
                </Link>
              </>)
            }
            {
              !user && (<>
                <Link to="/login" className="link-light text-decoration-none">
                  Sign-in
                </Link>
                <Link to="/register" className="link-light text-decoration-none">
                  Register
                </Link>
              </>)
            }
          </Stack>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default navBar;
