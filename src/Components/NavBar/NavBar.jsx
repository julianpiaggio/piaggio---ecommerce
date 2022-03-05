//  import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import "./NavBar.css"

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="navColor" >
        <Navbar.Brand href="#home">Piaggio - ecommerce</Navbar.Brand>
        <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#features">Inicio</Nav.Link>
                <Nav.Link href="#pricing">¿Quienes somos?</Nav.Link>
            <NavDropdown title="Productos" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Tortas</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Postres</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Dulces</NavDropdown.Item>
            <NavDropdown.Divider />
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Contacto</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        carrito
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

  )
}

export default NavBar