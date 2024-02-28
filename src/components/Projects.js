import { Container } from "react-bootstrap";
import { ProjectCards } from "./ProjectCards";
import colorSharp2 from "../assets/img/color-sharp2.png";
import proImg1 from "../assets/img/project-img1.png";
import proImg2 from "../assets/img/project-img2.png";
import proImg3 from "../assets/img/project-img3.png";
import {Col,Row,Nav,Tab} from "react-bootstrap";




export const Projects = () => {
    const projects=[
        {
            title:"Personal-Portfolia",
            decription:"Design & Development",
            imgUrl:proImg1,
        },
        {
            title:"a full_stack project",
            decription:"Design & Development",
            imgUrl:proImg2,
        },
        {
            title:"best one",
            decription:"Design & Development",
            imgUrl:proImg3,
        },
        {
            title:"better than best",
            decription:"Design & Development",
            imgUrl:proImg1,
        },
        {
            title:"recently one",
            decription:"Design & Development",
            imgUrl:proImg2,
        },
        {
            title:"recently one",
            decription:"Design & Development",
            imgUrl:proImg3,
        },
    ]
  return (
   <section className="project" id='project'>
    <Container>
        <Row>
            <Col>
            <h2>Projects</h2>
            <p>happy coding happy coding happy coding happy coding happy coding happy coding happy coding</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
            <Nav variant="pills"  className='nav-pills mb-5 justify-content-center align-items-center' id="pills-tab">
       <Nav.Item>
        <Nav.Link eventKey="first">Tab One</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="second">Tab Two</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="third" >
          Tab Three
        </Nav.Link>
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
        <Tab.Pane eventKey="second">Seoned Project</Tab.Pane>
        <Tab.Pane eventKey="third">Third Project</Tab.Pane>
       </Tab.Content>
         </Tab.Container>
            </Col>
        </Row>
    </Container>
    <img className="background-image-right" src={colorSharp2}></img>
   </section>
  )
}

