import { Nav, Navbar } from 'react-bootstrap'

export function MainNavbar() {
  return (
    <Navbar expand="lg" className="main-nav">
      <div className="header-container nav-content">
        <Navbar.Brand href="#top" aria-label="Traveltodo, accueil">
          <img className="brand-logo" src="/logo.png" alt="Traveltodo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navigation" />
        <Navbar.Collapse id="main-navigation">
          <Nav className="ms-auto">
            <Nav.Link href="#destinations-title">Nos destinations</Nav.Link>
            <Nav.Link href="#offres">Offres du moment</Nav.Link>
            <Nav.Link href="#destinations-title">Voyages organisés</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
}
