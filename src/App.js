import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/FormGroup";
import FormLabel from "react-bootstrap/FormLabel";
import FormControl from "react-bootstrap/FormControl";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: "1234",
      romanNumeral: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.convertToRoman = this.convertToRoman.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      number: e.target.value,
    });
  }

  handleKeyPress(e) {
    if (e.key === "Enter" && this.state.number !== "") {
      e.preventDefault();
      this.convertToRoman(this.state.number);
    }
  }

  convertToRoman(num) {
    num = num.toString();

    const ones = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    const tens = ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    const hundreds = ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    const tousands = ["M", "MM", "MMM"];

    let romNum = [];

    for (let i = 0; i < num.length; i++) {
      if (num.length - i === 4) {
        romNum.push(tousands[num[i] - 1]);
      } else if (num.length - i === 3) {
        romNum.push(hundreds[num[i] - 1]);
      } else if (num.length - i === 2) {
        romNum.push(tens[num[i] - 1]);
      } else {
        romNum.push(ones[num[i] - 1]);
      }
    }

    romNum = romNum.join("");

    this.setState({
      romanNumeral: romNum,
    });
  }

  render() {
    return (
      <div className="app">
        <div className="header">
          <h1>Convert To Roman</h1>
        </div>
        <div className="info">
          <h3>Convert any number from 1 to 3999 to a roman numeral.</h3>
        </div>
        <div className="converter">
          <Form>
            <FormGroup controlId="converterForm">
              <FormLabel>Number 1-3999</FormLabel>
              <FormControl
                required
                type="text"
                maxLength={4}
                placeholder="1234"
                value={this.state.number}
                onChange={this.handleInputChange}
                onKeyPress={this.handleKeyPress}
              />
              <FormLabel>{this.state.romanNumeral}</FormLabel>
            </FormGroup>
          </Form>
        </div>
      </div>
    );
  }
}

export default App;
