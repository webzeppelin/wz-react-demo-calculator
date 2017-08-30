import React from "react";
import { connect } from "react-redux";
import { Row, Col, Panel } from "react-bootstrap";

import { DispatchButton } from "./DispatchButton";
import { OperatorButton } from "./OperatorButton";
import { DigitButton } from "./DigitButton";
import { clearAllKeyPress, clearEntryKeyPress, decimalKeyPress, equalKeyPress } from "../../action";
import { CalculatorOps } from "../../model";
import "../../stylesheets/calculator.scss";

// Home page component
export class PocketCalculator extends React.Component {

  constructor(props) {
    super(props);
    this.audio = new Audio();
  }

  render() {
    const { mem, entry, acc, entryFixed } = this.props;
    return (
      <div className="calc_container">
        <table className="calc_top">
          <tbody>
            <tr>
              <td style={{textAlign: "left", width: "20%", fontSize: "100%"}}>REACT</td>
              <td style={{textAlign: "center", width: "40%", fontSize: "110%"}}>WZCALC DEMO</td>
              <td style={{textAlign: "right", width: "40%", fontSize: "55%"}}>ELECTRONIC CALCULATOR</td>
            </tr>
          </tbody>
        </table>
        <div className="calc_display">
          <span>{ this.formattedDisplayString() }</span>
        </div>
        <div className="calc_keypad">
          <table>
            <tbody>
              <tr>
                <td><DispatchButton label="AC" actionCreator={ clearAllKeyPress } className="orange_btn"/></td>
                <td><DispatchButton label="C" actionCreator={ clearEntryKeyPress } className="grey_btn"/></td>
                <td><OperatorButton label="&radic;" op={ CalculatorOps.sqrt } className="grey_btn"/></td>
                <td><OperatorButton label="%" op={ CalculatorOps.percent } className="grey_btn"/></td>
              </tr>
              <tr>
                <td><OperatorButton label="+-" op={ CalculatorOps.toggleSign } className="grey_btn"/></td>
                <td><OperatorButton label="MR" op={ CalculatorOps.memRecall } className="grey_btn"/></td>
                <td><OperatorButton label="M-" op={ CalculatorOps.memMinus } className="grey_btn"/></td>
                <td><OperatorButton label="M+" op={ CalculatorOps.memPlus } className="grey_btn"/></td>
              </tr>
              <tr>
                <td><DigitButton label="7" digit={7}/></td>
                <td><DigitButton label="8" digit={8}/></td>
                <td><DigitButton label="9" digit={9}/></td>
                <td><OperatorButton label="/" op={ CalculatorOps.divide }/></td>
              </tr>
              <tr>
                <td><DigitButton label="4" digit={4}/></td>
                <td><DigitButton label="5" digit={5}/></td>
                <td><DigitButton label="6" digit={6}/></td>
                <td><OperatorButton label="X" op={ CalculatorOps.multiply }/></td>
              </tr>
              <tr>
                <td><DigitButton label="1" digit={1}/></td>
                <td><DigitButton label="2" digit={2}/></td>
                <td><DigitButton label="3" digit={3}/></td>
                <td><OperatorButton label="-" op={ CalculatorOps.minus }/></td>
              </tr>
              <tr>
                <td><DigitButton label="0" digit={0}/></td>
                <td><DispatchButton label="." actionCreator={ decimalKeyPress }/></td>
                <td><DispatchButton label="=" actionCreator={ equalKeyPress }/></td>
                <td><OperatorButton label="+" op={ CalculatorOps.plus }/></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  formattedDisplayString() {
    const { entry, mem } = this.props;
    let roundedEntry = parseFloat(entry.toFixed(8));
    let memIndicator = mem == 0 ? "\u00A0" : "M";
    let sign = roundedEntry < 0 ? "-" : " ";
    let value = Math.abs(roundedEntry).toString()
    if (value.indexOf(".") < 0) value += ".";
    value = value.substring(0,9);
    // pad to 11 characters
    let padding = "";
    for (let i=0;i<11-value.length;i++) {
      padding += "\u00A0";
    }
    return memIndicator+sign+padding+value;
  }
}

function mapStateToProps(state) {
  return {
    mem: state.calculator.mem,
    entry: state.calculator.entry,
    acc: state.calculator.acc,
    entryFixed: state.calculator.entryFixed,
  };
}

export default PocketCalculator = connect(mapStateToProps)(PocketCalculator);
