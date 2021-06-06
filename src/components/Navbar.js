import * as BootComp  from "react-bootstrap";


function Navbaer() {
  return (
      <div style={{position:"fixed", padding: "10px", backgroundcolor:"white"}}>
    <BootComp.Navbar bg="light" expand="lg">
      <BootComp.Navbar.Brand href="#home">Brilliant</BootComp.Navbar.Brand>

      <BootComp.Navbar.Toggle aria-controls="basic-navbar-nav" />

      <BootComp.Navbar.Collapse id="basic-navbar-nav">
        <BootComp.Nav className="mr-auto">
          <BootComp.Nav.Link href="#home">Today</BootComp.Nav.Link>
          <BootComp.Nav.Link href="#link">Courses</BootComp.Nav.Link>
          <BootComp.Nav.Link href="#link">Practises</BootComp.Nav.Link>
        </BootComp.Nav>
          <BootComp.Button variant="outline-success">Log In</BootComp.Button>
      </BootComp.Navbar.Collapse>
    </BootComp.Navbar>
    </div>
  );
}

export default Navbaer;
