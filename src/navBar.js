import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import store from "./store.js/store.js";
function NavBar() {
  const cartProducts = useSelector((state) => state.cart);
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#">REDUX Tool Kit</Navbar.Brand>

      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: "100px" }}
        navbarScroll
      >
        {" "}
        <Nav.Link to="/" as={Link}>
          Products
        </Nav.Link>
        <Navbar.Text>
          <Nav.Link to="/cart" as={Link}>
            Cart {cartProducts.length}
          </Nav.Link>
        </Navbar.Text>
      </Nav>
    </Navbar>
  );
}

export default NavBar;
