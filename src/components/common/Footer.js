import React from "react";
import { connect } from "react-redux";
import { Well } from "react-bootstrap";

export class Footer extends React.Component {
  render() {
    let year = (new Date()).getFullYear();
    return (
      <Well><p>&copy; Copyright { year } Andy Ford</p></Well>
    );
  }
}

export default Footer = connect()(Footer);