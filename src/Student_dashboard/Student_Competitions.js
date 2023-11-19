import { Row, Col,} from "reactstrap";

  import Blog from "../Student_dashboard/Student_Blog";
  import bg1 from "../assets/images/bg/bg5.jpg";
  import bg2 from "../assets/images/bg/bg5.jpg";
  import bg3 from "../assets/images/bg/bg5.jpg";
  import bg4 from "../assets/images/bg/bg5.jpg";
  
  const BlogData = [
    {
      image: bg1,
      title: "TATA BUSINESS CHALLENGE",
      subtitle: "Team Size: 4",
      description:
        "Solve real world business case challenge in this competition in 3 stages.",
      btnbg: "primary",
    },
    {
      image: bg2,
      title: "OWASP TEAM HACKATHON",
      subtitle: "Team Size: 5",
      description:
        "Solve real world technical challenge in this competition in 3 stages.",
      btnbg: "primary",
    },
    {
      image: bg3,
      title: "TATA BUSINESS CHALLENGE",
      subtitle: "Team Size: 4",
      description:
        "Solve real world business case challenge in this competition in 3 stages.",
      btnbg: "primary",
    },
    {
      image: bg4,
      title: "OWASP TEAM HACKATHON",
      subtitle: "Team Size: 5",
      description:
        "Solve real world technical challenge in this competition in 3 stages.",
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
      </div>
    );
  };
  
  export default Cards;
  