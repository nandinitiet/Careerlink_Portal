import { Col, Row } from "reactstrap";
import SalesChart from "../Student_dashboard/Student_InternTable";
import Feeds from "../Student_dashboard/Student_Feeds";
import ProjectTables from "../Student_dashboard/Student_CompTable";
import Sidebar from './Student_Sidebar';
import Header from './Student_Header';

import Blog from "../Student_dashboard/Student_Blog";
import bg1 from "../assets/images/bg/bg1.jpg";
import bg2 from "../assets/images/bg/bg2.jpg";
import bg3 from "../assets/images/bg/bg3.jpg";
import bg4 from "../assets/images/bg/bg4.jpg";

const BlogData = [
  {
    image: bg1,
    title: "This is simple blog",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    image: bg2,
    title: "Lets be simple blog",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    image: bg3,
    title: "Don't Lamp blog",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    image: bg4,
    title: "Simple is beautiful",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
];

const Starter = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      {/***Top Cards***/}

      {/***Sales & Feed***/}
      <Row>
        <Col sm="6" lg="6" xl="7" xxl="8">
          <SalesChart />
        </Col>
        <Col sm="6" lg="6" xl="5" xxl="4">
          <Feeds />
        </Col>
      </Row>
      {/***Table ***/}
      <Row>
        <Col lg="12">
          <ProjectTables />
        </Col>
      </Row>
      {/***Blog Cards***/}
      {/* <Row>
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
      </Row> */}
    </div>
  );
};

export default Starter;
