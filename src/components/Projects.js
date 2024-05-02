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
            description:"This full-stack project was engineered using PHP for basic web layout, JavaScript for frontend functionalities including search filtering and dynamic course displays, and a MySQL database to handle backend operations such as user registration, course information updates, and data deletion.This setup ensured a seamless and efficient user experience tailored for gym members.",
            imgUrl:proImg1,
            githubUrl:"https://github.com/Yuan0317/Fitness-Website",
        },
        {
            title:"Movie-Rental-App",
            description:"Developed a full-stack database project utilizing Oracle for backend database management. Established complex views and implemented triggers on these views to facilitate updates to underlying tables effectively. Integrated the database with Microsoft Access via ODBC, using Access forms as the user interface for clear and straightforward data management.This setup enabled users to manage data efficiently without complex operations.",
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

