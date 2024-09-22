import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { skills, meta } from "../../content_option";
import * as Icons from "react-icons/fa"



// Basic styling
const styles = {
  container: {
    textAlign: "center",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "20px",
  },
  grid: {
    display: "grid",
    gap: "20px",
  },
  card: {
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  icon: {
    fontSize: "2rem",
  },
  category: {
    fontSize: "1.5rem",
    marginBottom: "10px",
  },
  skill: {
    listStyleType: "none",
    textAlign: "left",
    fontSize: "1.1rem",
    margin: "5px 0",
  },
};

const DynamicFaIcon = ({ name }) => {
  const IconComponent = Icons[name];

  console.log("icon req: ", name)
  if (!IconComponent) { // Return a default one
    return <Icons.FaBeer />;
  }

  return <IconComponent />;
};

export const Skills = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Skills | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Skills </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row>

          <div className="mb-5 po_items_ho">
            <div style={styles.container}>
              <div style={styles.grid}>
                {skills.map((item) => (
                  <Col >
                    <div key={item.title} style={styles.card}>
                      <div style={styles.icon}><DynamicFaIcon name={item.icon}></DynamicFaIcon></div>
                      <h2 style={styles.category}>{item.title}</h2>
                      {item.info.join(', ')}
                    </div>
                  </Col>
                ))}
              </div>
            </div>
          </div>
        </Row>
      </Container >
    </HelmetProvider >
  );
};

