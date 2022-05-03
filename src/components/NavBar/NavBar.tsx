import { FunctionComponent } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

const NavBar: FunctionComponent = () => (
  <Navbar bg="dark" sticky="top" variant="dark">
    <Container>
      <Navbar.Brand>
        <Link className={styles.link} to="/">
          Savannah Informatics
        </Link>
      </Navbar.Brand>
      <Nav className="justify-content-end">
        <Link id="RouterNavLink" className={styles.link} to="/">
          Home
        </Link>
        <Link id="RouterNavLink" className={styles.link} to="/users">
          Users
        </Link>
        <Link className={styles.link} to="/posts">
          Posts
        </Link>
      </Nav>
    </Container>
  </Navbar>
);

export default NavBar;
