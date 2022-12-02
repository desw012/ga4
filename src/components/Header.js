import {Container, Nav, Navbar, NavLink} from "react-bootstrap";


function Header() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/categories/1">category1</Nav.Link>
                        <Nav.Link href="/categories/2">category2</Nav.Link>
                        <Nav.Link href="/categories/3">category3</Nav.Link>
                        <NavLink className="nav-link" to="/product">Product</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;