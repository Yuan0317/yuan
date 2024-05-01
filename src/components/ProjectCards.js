
// import { Col,Button } from "react-bootstrap";

// export const ProjectCards = ({title,description,imgUrl}) => {
//   return (
//     <Col size={12} sm={6} md={4} >
//         <div className="proj-imgbx">
//             <img src={imgUrl} />
//             <div className="proj-text">
//                 <h4>{title}</h4>
//              <span>{description}</span>
//         </div>
//         </div>
//     </Col>
//   )
// }

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';


export const ProjectCards = ({ title, description, imgUrl, githubUrl }) => {
  return (
    <Container>
      <Row>
        <Col xs={12}>
        <div className="project-card-container">
        <div className="d-flex" style={{ marginBottom: '20px' }}>
            <div className="flex-shrink-0">
              
              <img src={imgUrl} alt="Project" style={{ width: '400px', height: '100%' }} />
            </div>
            <div className="flex-grow-1 ms-3 d-flex flex-column justify-content-between">
           
              <h4>{title}</h4>
              <p>{description}</p>
               <Button variant="primary" href={githubUrl} target="_blank" style={{ alignSelf: 'flex-end', backgroundColor: '#6f42c1' }}>View on GitHub</Button>
            </div>
          </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}


