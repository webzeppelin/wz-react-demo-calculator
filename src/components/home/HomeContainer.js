import React from "react";
import { connect } from "react-redux";
import { Row, Col, Panel, Image } from "react-bootstrap";

import { PocketCalculator } from "./PocketCalculator";
import "../../stylesheets/home.scss";

// Home page component
export class HomeContainer extends React.Component {

  render() {
    return (
      <Panel>
        <Row>
          <Col xs={12} md={6}>
            <PocketCalculator />
          </Col>
          <Col xs={12} md={6}>
            <div className="song_lyrics">
              <p>
                I'm the operator<br/>
                With my pocket calculator<br/>
                I'm the operator<br/>
                With my pocket calculator
              </p>
              <p>
                I am adding<br/>
                And subtracting<br/>
                I'm controlling<br/>
                And composing
              </p>
              <p>
                By pressing down a special key<br/>
                It plays a little melody<br/>
                By pressing down a special key<br/>
                It plays a little melody
              </p>
            </div>
            <div className="song_byline">
              <p>- Kraftwerk</p>
            </div>
          </Col>
        </Row>
      </Panel>
    );
  }
}

export default HomeContainer = connect()(HomeContainer);
