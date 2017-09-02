import React from "react";
import { connect } from "react-redux";
import { Well } from "react-bootstrap";

export class Footer extends React.Component {
  render() {
    let year = (new Date()).getFullYear();
    return (
      <Well>
        <p>&copy; Copyright { year } Andy Ford</p>
        <h4>Look at my code here!:</h4>
        <p><a href="https://github.com/webzeppelin/wz-react-demo-calculator">https://github.com/webzeppelin/wz-react-demo-calculator</a></p>
      </Well>
    
    );
  }
}

export default Footer = connect()(Footer);