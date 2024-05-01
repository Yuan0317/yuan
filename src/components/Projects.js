import { Container } from "react-bootstrap";
import { ProjectCards } from "./ProjectCards";
import colorSharp2 from "../assets/img/color-sharp2.png";
import proImg1 from "../assets/img/fitness.png";
import proImg2 from "../assets/img/movie_rental.png";
import proImg3 from "../assets/img/java_project.png";
import {Col,Row,Nav,Tab} from "react-bootstrap";




export const Projects = () => {
    const projects=[
        {
            title:"Fitness-Website",
            description:"This is a user-oriented gym website that allows users to easily browse courses on the website. Users can register as members, select courses, and add, update, and delete their registered courses at any time.",
            imgUrl:proImg1,
            githubUrl:"https://github.com/Yuan0317/Fitness-Website",
        },
        {
            title:"Movie-Rental-App",
            description:"Designed and deployed a robust full-stack database solution with Oracle, enhancing data interaction through sophisticated views and triggers, and streamlined user experiences via Microsoft Access interfaces connected through ODBC",
            imgUrl:proImg2,
            githubUrl:"https://github.com/Yuan0317/Movie-Rental-Database-",
        },
        {
            title:"JAVA-based Health-System-Implementation",
            description:"Developed a Java-based health management system using Eclipse, employing advanced object-oriented programming techniques including inheritance and data encapsulation. The application streamlined the patient information entry process, improving data accuracy and operational efficiency, which enhanced healthcare service delivery in hospital settings.",
            imgUrl:proImg3,
            githubUrl:"https://github.com/Yuan0317/Health-System-Implementation",

        },
        
    ]
  return (
   <section className="project" id='projects'>
    <Container>
        <Row>
            <Col>
            <h2>Projects</h2>
            <p>"I have not failed. I've just found 10,000 ways that won't work." — Edison</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
            <Nav variant="pills"  className='nav-pills mb-5 justify-content-center align-items-center' id="pills-tab">
       <Nav.Item>
        <Nav.Link eventKey="first">Tab One</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="second">Tab Two</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="third" >Tab Three</Nav.Link>
      </Nav.Item>
    </Nav>
    <Tab.Content>
        <Tab.Pane eventKey='first'>
           <Row>
            {
                projects.map((project,index)=>{
                    return(
                       <ProjectCards
                       key={index}
                       {...project}
                       />
                    )
                })
            }
           </Row>
        </Tab.Pane>
        <Tab.Pane eventKey="second">continue..</Tab.Pane>
        <Tab.Pane eventKey="third">continue..</Tab.Pane>
       </Tab.Content>
         </Tab.Container>
            </Col>
        </Row>
    </Container>
    <img className="background-image-right" src={colorSharp2}></img>
   </section>
  )
}

