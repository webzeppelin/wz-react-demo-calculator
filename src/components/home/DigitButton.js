import React from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import { digitKeyPress } from "../../action";

// Home page component
export class DigitButton extends React.Component {

  constructor(props) {
    super(props);
    this.audio = new Audio();
    this.audio.src = "/media/beep.wav";
  }

  render() {
    const { label, digit, className } = this.props;
    return (
      <Button className={className} onClick={
        (e) => {
          this.audio.play();
          this.props.dispatch(digitKeyPress(digit));
        }
      }>{ label }</Button>
    );
  }
}

export default DigitButton = connect()(DigitButton);
