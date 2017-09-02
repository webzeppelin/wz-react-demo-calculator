import React from "react";
import { connect } from "react-redux";
import { Well, Row, Col } from "react-bootstrap";

export class Footer extends React.Component {
  render() {
    let year = (new Date()).getFullYear();
    return (
      <Well>
        <Row>
          <Col xs={12} sm={6}>
            <p>&copy; Copyright { year } Andy Ford</p>
          </Col>
          <Col xs={12} sm={6}>
            <p>Look at my code here!:</p>
            <p><a href="https://github.com/webzeppelin/wz-react-demo-calculator">https://github.com/webzeppelin/wz-react-demo-calculator</a></p>
          </Col>
        </Row>
      </Well>
    
    );
  }
}

export default Footer = connect()(Footer);