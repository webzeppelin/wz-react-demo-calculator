import React from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";

// Home page component
export class DispatchButton extends React.Component {

  constructor(props) {
    super(props);
    this.audio = new Audio();
    this.audio.src = "media/beep.wav";
  }

  render() {
    const { label, actionCreator, className } = this.props;
    return (
      <Button className={className} onClick={
        (e) => {
          this.audio.play();
          this.props.dispatch(actionCreator());
        }
      }>{ label }</Button>
    );
  }
}

export default DispatchButton = connect()(DispatchButton);
