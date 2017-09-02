import React from "react";
import { connect } from "react-redux";
import { Row, Col, Image } from "react-bootstrap";

export class Header extends React.Component {

  render() {
    return (
      <div>
        <Row>
          <Col xs={1}>
            <Image src="media/logo.svg" responsive/>
          </Col>
          <Col xs={11}>
            <h1>React-Redux Pocket Calculator</h1>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header = connect()(Header);