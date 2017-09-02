import React from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import { operatorKeyPress } from "../../action"

// Home page component
export class OperatorButton extends React.Component {

  constructor(props) {
    super(props);
    this.audio = new Audio();
    this.audio.src = "media/beep.wav";
  }

  render() {
    const { label, op, className } = this.props;
    return (
      <Button className={className} onClick={
        (e) => {
          this.audio.play();
          this.props.dispatch(operatorKeyPress(op));
        }
      }>{ label }</Button>
    );
  }
}

export default OperatorButton = connect()(OperatorButton);
