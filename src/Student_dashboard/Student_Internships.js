import {
  // Card,
  // CardImg,
  // CardText,
  // CardBody,
  // CardTitle,
  // CardSubtitle,
  // CardGroup,
  // Button,
  Row,
  Col,
} from "reactstrap";
import Blog from "../Student_dashboard/Student_Blog";
import bg1 from "../assets/images/bg/bg1.jpg";
import bg2 from "../assets/images/bg/bg2.jpg";
import bg3 from "../assets/images/bg/bg3.jpg";
import bg4 from "../assets/images/bg/bg4.jpg";

const BlogData = [
  {
    image: bg1,
    title: "SDE INTERN",
    subtitle: "Duration: 2 Months",
    description:
      "Job Description: Candidate with knowledge of advanced data structures.",
    btnbg: "primary",
  },
  {
    image: bg2,
    title: "SDE INTERN",
    subtitle: "Duration: 2 Months",
    description:
      "Job Description: Candidate with knowledge of advanced data structures.",
    btnbg: "primary",
  },
  {
    image: bg3,
    title: "SDE INTERN",
    subtitle: "Duration: 2 Months",
    description:
      "Job Description: Candidate with knowledge of advanced data structures.",
    btnbg: "primary",
  },
  {
    image: bg4,
    title: "SDE INTERN",
    subtitle: "Duration: 2 Months",
    description:
      "Job Description: Candidate with knowledge of advanced data structures.",
    btnbg: "primary",
  },
];

const Cards = () => {
  return (
    <div>
      {/* --------------------------------------------------------------------------------*/}
      {/* Card-1*/}
      {/* --------------------------------------------------------------------------------*/}
      {/* <h5 className="mb-3">Basic Card</h5> */}
      <Row>
        {BlogData.map((blg, index) => (
          <Col sm="6" lg="6" xl="3" key={index}>
            <Blog
              image={blg.image}
              title={blg.title}
              subtitle={blg.subtitle}
              text={blg.description}
              color={blg.btnbg}
            />
          </Col>
        ))}
      </Row>
      <Row>
        {BlogData.map((blg, index) => (
          <Col sm="6" lg="6" xl="3" key={index}>
            <Blog
              image={blg.image}
              title={blg.title}
              subtitle={blg.subtitle}
              text={blg.description}
              color={blg.btnbg}
            />
          </Col>
        ))}
      </Row>
      <Row>
        {BlogData.map((blg, index) => (
          <Col sm="6" lg="6" xl="3" key={index}>
            <Blog
              image={blg.image}
              title={blg.title}
              subtitle={blg.subtitle}
              text={blg.description}
              color={blg.btnbg}
            />
          </Col>
        ))}
      </Row>
      {/* -------------------------------------------------------------------------------- */}
      {/* Card-2*/}
      {/* --------------------------------------------------------------------------------*/}
      {/* <Row>
        <h5 className="mb-3 mt-3">Alignment Text</h5>
        <Col md="6" lg="4">
          <Card body>
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <div>
              <Button color="light-warning">Go somewhere</Button>
            </div>
          </Card>
        </Col>
        <Col md="6" lg="4">
          <Card body className="text-center">
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <div>
              <Button color="light-danger">Go somewhere</Button>
            </div>
          </Card>
        </Col>
        <Col md="6" lg="4">
          <Card body className="text-end">
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <div>
              <Button color="light-success">Go somewhere</Button>
            </div>
          </Card>
        </Col>
      </Row>
      {/* --------------------------------------------------------------------------------*/}
      {/* Card-2*/}
      {/* --------------------------------------------------------------------------------*/}
      {/* <Row>
        <h5 className="mb-3 mt-3">Colored Card</h5>
        <Col md="6" lg="3">
          <Card body color="primary" inverse>
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <div>
              <Button>Button</Button>
            </div>
          </Card>
        </Col>
        <Col md="6" lg="3">
          <Card body color="info" inverse>
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <div>
              <Button>Button</Button>
            </div>
          </Card>
        </Col>
        <Col md="6" lg="3">
          <Card body color="success" inverse>
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <div>
              <Button>Button</Button>
            </div>
          </Card>
        </Col>
        <Col md="6" lg="3">
          <Card body color="danger" inverse>
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <div>
              <Button>Button</Button>
            </div>
          </Card>
        </Col>
        <Col md="6" lg="3">
          <Card body color="light-warning">
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <div>
              <Button>Button</Button>
            </div>
          </Card>
        </Col>
        <Col md="6" lg="3">
          <Card body color="light-info">
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <div>
              <Button>Button</Button>
            </div>
          </Card>
        </Col>
        <Col md="6" lg="3">
          <Card body color="light-success">
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <div>
              <Button>Button</Button>
            </div>
          </Card>
        </Col>
        <Col md="6" lg="3">
          <Card body color="light-danger">
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <div>
              <Button>Button</Button>
            </div>
          </Card>
        </Col>
      </Row> */}
      {/* --------------------------------------------------------------------------------*/}
      {/* Card-Group*/}
      {/* --------------------------------------------------------------------------------*/}
      {/* <Row>
        <h5 className="mb-3 mt-3">Card Group</h5>
        <Col>
          <CardGroup>
            <Card>
              <CardImg alt="Card image cap" src={bg1} top width="100%" />
              <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Card subtitle
                </CardSubtitle>
                <CardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
            <Card>
              <CardImg alt="Card image cap" src={bg2} top width="100%" />
              <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Card subtitle
                </CardSubtitle>
                <CardText>
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
            <Card>
              <CardImg alt="Card image cap" src={bg3} top width="100%" />
              <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Card subtitle
                </CardSubtitle>
                <CardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </CardGroup>
        </Col>
      </Row> */}
    </div>
  );
};

export default Cards;
// Cards.js
// Import the necessary components and Firebase

// import React, { useState, useEffect } from 'react';
// import { Col } from 'reactstrap'; // Make sure you import Col from your UI library
// import { db } from '../../firebase'; // Import your Firebase configuration
// import Blog from '../../components/dashboard/Blog'; // Import the Blog component once


// const Cards = () => {
//   const [internshipOpportunities, setInternshipOpportunities] = useState([]);

//   useEffect(() => {
//     // Fetch data from Firebase and update state
//     db.collection("internshipOpportunities")
//       .get()
//       .then((querySnapshot) => {
//         const data = [];
//         querySnapshot.forEach((doc) => {
//           data.push(doc.data());
//         });
//         setInternshipOpportunities(data);
//       });
//   }, []);

//   return (
//     <div>
//       {/* Render the internship opportunities as cards */}
//       {internshipOpportunities.map((opportunity, index) => (
//         <Col sm="6" lg="6" xl="3" key={index}>
//           <Blog
//             image={opportunity.image}
//             title={opportunity.title}
//             subtitle={opportunity.subtitle}
//             text={opportunity.description}
//             color={opportunity.btnbg}
//           />
//         </Col>
//       ))}
//     </div>
//   );
// };

// export default Cards;
