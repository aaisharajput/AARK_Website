import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import GetRoute from '../../Container/server';
import styles from "./style.module.css";
import { Link } from "react-router-dom";

function NavbarMenu({ value, handleChange }) {
  return (
    <Navbar className={`${styles.nav}`} fixed="top" expand="lg">
    <Container>
    <Navbar.Brand href="/" className='py-2'>
    <img
      src={GetRoute("/newupdated.png")}
      className={`d-inline-block align-top ${styles.brand}`}
      alt="React Bootstrap logo"
    />
  </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className={styles.NavbarToggle} />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto">
          <Nav.Link className={styles.navLink} href="/">Home</Nav.Link>

          <NavDropdown title={<span className={`${styles.navLink}`}>Company</span>} id="basic-nav-dropdown">
          <div className={`${styles.dropdownMenu} ${styles.dropdownCompany} container`}>
            <div className="row p-2 ">
          <div className="col-12 col-md-6">
          <a href="/about">
            <div className={`card border-0 ${styles.cardHover}`}>
              <div className="card-body">
              
              
                <h5 className={`card-title ${styles.titleH5}`}>About</h5>
                <h6 className={styles.titleH6}>Know about our company</h6>
              </div>
            </div>
          </a>
          </div>
          <div className="col-12 col-md-6">
            <a href="/about/culture" >
            <div className={`card border-0 ${styles.cardHover}`}>
              <div className="card-body">
              
              
                <h5 className={`card-title ${styles.titleH5}`}>Culture</h5>
                <h6 className={styles.titleH6}>Dive into Our Corporate Vibe</h6>
              </div>
            </div>
              
            </a>
          </div>
          <div className="col-12 col-md-6">
            <a href="/engagement">
            <div className={`card border-0 ${styles.cardHover}`}>
              <div className="card-body">
              
              
                <h5 className={`card-title ${styles.titleH5}`}>Engagement</h5>
                <h6 className={styles.titleH6}>Foster Active Participation</h6>
              </div>
            </div>
              
            </a>
          </div>
          </div>
        </div>
          </NavDropdown>

          <NavDropdown title={<span className={`${styles.navLink}`}>Service</span>} id="basic-nav-dropdown">
          <div className={`${styles.dropdownMenu} ${styles.dropdownService} container`}>
          <div className='row'>
          <div className="col-12">
          <a href="/service">
            <div className={`card border-0 ${styles.cardHover}`}>
              <div className="card-body pb-0 mb-0">
                <h5 className={`card-title ${styles.titleH5}`}> Services</h5>
              </div>
            </div>
          </a>
          </div>
          
          </div>
          <div className="row pb-2 ">
          <div className="col-12 col-md-4">
          <a href="/service/software-product-engineering">
            <div className={`card border-0 ${styles.cardHover}`}>
              <div className="card-body">
                <h6 className={`card-title ${styles.titleH6}`}> Software Product Engineering</h6>
              </div>
            </div>
          </a>
          </div>
          <div className="col-12 col-md-4">
            <a href="/service/hardware-product-engineering" >
            <div className={`card border-0 ${styles.cardHover}`}>
              <div className="card-body">
              
              
                <h6 className={`card-title ${styles.titleH5}`}>Hardware Product Engineering</h6>
              </div>
            </div>
              
            </a>
          </div>
          <div className="col-12 col-md-4">
            <a href="/service/cloud-platform-engineering">
            <div className={`card border-0 ${styles.cardHover}`}>
              <div className="card-body">
              
              
                <h6 className={`card-title ${styles.titleH5}`}>Cloud Platform Engineering</h6>
              </div>
            </div>
              
            </a>
          </div>
          <div className="col-12 col-md-4">
            <a href="/service/cognitive-solution">
            <div className={`card border-0 ${styles.cardHover}`}>
              <div className="card-body">
              
              
                <h6 className={`card-title ${styles.titleH5}`}>Cognitive Solutions</h6>
              </div>
            </div>
              
            </a>
          </div>
          <div className="col-12 col-md-4">
            <a href="/service/salesforce-crm">
            <div className={`card border-0 ${styles.cardHover}`}>
              <div className="card-body">
              
              
                <h6 className={`card-title ${styles.titleH5}`}>Salesforce CRM</h6>
              </div>
            </div>
              
            </a>
          </div>
          <div className="col-12 col-md-4">
            <a href="/service/SemiConductor">
            <div className={`card border-0 ${styles.cardHover}`}>
              <div className="card-body">
              
              
                <h6 className={`card-title ${styles.titleH5}`}>SemiConductor</h6>
              </div>
            </div>
              
            </a>
          </div>
        </div>
        </div>
          </NavDropdown>

          <NavDropdown title={<span className={`${styles.navLink}`}>Resources</span>} id="basic-nav-dropdown">
          <div className={`${styles.dropdownMenu} ${styles.dropdownResource} container`}>
          <div className="row p-2 ">
                <div className="col-12 col-md-6">
                <a href="/resources/blogs">
                  <div className={`card border-0 ${styles.cardHover}`}>
                    <div className="card-body">
                    
                    
                      <h5 className={`card-title ${styles.titleH5}`}>Blogs</h5>
                      <h6 className={styles.titleH6}>Discover Blog Insights</h6>
                    </div>
                  </div>
                </a>
                </div>
                <div className="col-12 col-md-6">
                  <a href="/resources/press-releases" >
                  <div className={`card border-0 ${styles.cardHover}`}>
                    <div className="card-body">
                    
                    
                      <h5 className={`card-title ${styles.titleH5}`}>Press Releases</h5>
                      <h6 className={styles.titleH6}>Stay updated with our latest news</h6>
                    </div>
                  </div>
                    
                  </a>
                </div>
               {/* <div className="col-12 col-md-6">
                  <a href="/resources/awards">
                  <div className={`card border-0 ${styles.cardHover}`}>
                    <div className="card-body">
                    
                    
                      <h5 className={`card-title ${styles.titleH5}`}>Awards</h5>
                      <h6 className={styles.titleH6}>Know about our company</h6>
                    </div>
                  </div>
                    
                  </a>
                </div>
      */}
              </div>
        </div>
          </NavDropdown>

          <Nav.Link className={styles.navLink} href="/careers">Careers</Nav.Link>
          <Nav.Link className={styles.navLink} href="/contact">Contact</Nav.Link>
        </Nav>
        <div className="d-flex py-3">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          value={value} onChange={handleChange}
        />
        
              <Link to={value == "" ? "#" : `/search/${value}`}><i className={`fa fa-search text-white mt-2  ${styles.icon}`}></i></Link>
      </div>
      </Navbar.Collapse>
    </Container>
  </Navbar> 
  )
}

export default NavbarMenu
