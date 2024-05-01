import { Container,Col,Row } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";


export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

 return (
    <section className="skill" id="skills">
        <Container>
            <Row>
                <Col>
                <div className="skill-bx">
                    <h2>
                        Record of my coding
                    </h2>
                    <p>7-days summary by wakatime(Real-time updates)</p>
                    <Carousel responsive={responsive} infinite={true} className="skill-slide">
                        <div >
                        <figure><embed src="https://wakatime.com/share/@018f064e-2efa-4d50-bc5e-4d755acd8022/9f14ecd3-dab9-4fe6-8fad-c8d267bacf78.svg"></embed></figure>

                            <h5>Languages</h5>
                        </div>
                        <div className="item">
                        <figure><embed src="https://wakatime.com/share/@018f064e-2efa-4d50-bc5e-4d755acd8022/a4e0d304-9816-4e46-ad43-8cfb072903b0.svg"></embed></figure>
                            <h5>Editors</h5>
                        </div>
                        <div className="item">
                        <figure><embed src="https://wakatime.com/share/@018f064e-2efa-4d50-bc5e-4d755acd8022/11f41751-ad93-4d99-b4d8-efc1961230c3.svg"></embed></figure>
                            <h5>Operating Systems</h5>
                        </div>
                        <div className="item">
                        <figure><embed src="https://wakatime.com/share/@018f064e-2efa-4d50-bc5e-4d755acd8022/6f8bb77c-a7e8-4b4d-af94-c400febda9de.svg"></embed></figure>
                            <h5>Categories</h5>
                        </div>
                    </Carousel>
                </div>
                </Col>
            </Row>
        </Container>
        <img className="background-image-left" src={colorSharp}/>
    </section>
 )
}

