import { Navbar,Container,Nav} from "react-bootstrap";
import { useState,useEffect } from "react";
import logo from'../assets/img/logo.svg';
import navIcon1 from'../assets/img/nav-icon1.svg';
import navIcon2 from'../assets/img/nav-icon2.svg';
import navIcon3 from'../assets/img/nav-icon3.svg';

export const NavBar=()=>{
    const [activeLink,setActiveLink]= useState('home');
    const [scrolled,seScrolled]=useState('false');

    useEffect(()=>{
        const onScroll=()=>{
            if (window.scrollY>50){
                seScrolled(true);
            }else{
                seScrolled(false);
            }
        }

        window.addEventListener('scroll',onScroll);

        return()=>window.removeEventListener('scroll',onScroll);
    },[])

    const onUpateAvtiveLink = (value)=>{
        setActiveLink(value);
    }




    return (
    <Navbar expand="lg" className={scrolled ? "scrolled":""}>
      <Container>
        <Navbar.Brand href="#home">
            {/* <img src={logo} alt='logo'/> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink==='home'? 'active navbar-link' : 'navbar-link'} onClick={()=>onUpateAvtiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink==='skills'? 'active navbar-link' : 'navbar-link'} onClick={()=>onUpateAvtiveLink('skills')}>CodeRecord</Nav.Link>
            <Nav.Link href="#projects" className={activeLink==='projects'? 'active navbar-link' : 'navbar-link'} onClick={()=>onUpateAvtiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                <a href="https://github.com/Yuan0317"><img src={navIcon1} alt='github'/></a>
                <a href="https://www.linkedin.com/in/yuan-tang-55ab5628b/"><img src={navIcon2} alt='linkedln'/></a>
                <a href="https://www.youtube.com/channel/UCIEgoXctMieqqMU1MBsAsIg"><img src={navIcon3} alt='youtube'/></a>
            </div>
            {/* <button className="vvd" onClick={()=>console.log('connect')}><span>Let's Connect</span></button> */}
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}