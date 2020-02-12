import React ,{Component} from 'react';
import {Navbar,Nav,Form,FormControl,Button,NavDropdown,handleSelect} from 'react-bootstrap'
class NavBar extends Component{

constructor(props){

super(props)
this.state={}


}

render(){

return(<div>
<Nav variant="pills" activeKey="1" onSelect={handleSelect}>
<Nav.Item>
  <Nav.Link eventKey="1" href="#/home">
    NavLink 1 content
  </Nav.Link>
</Nav.Item>
<Nav.Item>
  <Nav.Link eventKey="2" title="Item">
    NavLink 2 content
  </Nav.Link>
</Nav.Item>
<Nav.Item>
  <Nav.Link eventKey="3" disabled>
    NavLink 3 content
  </Nav.Link>
</Nav.Item>
<NavDropdown title="Dropdown" id="nav-dropdown">
  <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
  <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
  <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
  <NavDropdown.Divider />
  <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
</NavDropdown>
</Nav>
  <br />
  


 

</div>)


}


}
export default NavBar;