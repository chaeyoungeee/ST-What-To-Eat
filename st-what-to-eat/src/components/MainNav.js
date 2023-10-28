import { useNavigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import "../App.scss";

import { PiBowlFood } from "react-icons/pi";
import { FiAward } from "react-icons/fi";
import { BiCategoryAlt, BiHeart } from "react-icons/bi";



function MainNav() {
  let navigate = useNavigate();

  return (
    <Navbar id="navbar" expand="md" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">🍜</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="main-bar">
            <Nav.Link>
              <PiBowlFood className="menu-icon"></PiBowlFood>
              Today
            </Nav.Link>
            <Nav.Link>
              <FiAward className="menu-icon"></FiAward>
              Best 5
            </Nav.Link>
            <Nav.Link onClick={() => { navigate("/category")}}>
              <BiCategoryAlt className="menu-icon"></BiCategoryAlt>
              Category
            </Nav.Link>
          </Nav>

          <Nav className="side-bar ms-auto">
            <Nav.Link className="likes" onClick={() => { navigate("/likes")}}>
              <BiHeart className="icon"></BiHeart>
            </Nav.Link>
            <Nav.Link className="login" onClick={() => { navigate("/login")}}>Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
}

export default MainNav;
