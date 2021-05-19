import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/FormGroup";
import FormLabel from "react-bootstrap/FormLabel";
import FormControl from "react-bootstrap/FormControl";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Converter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: "",
      romanNumeral: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.convertToRoman = this.convertToRoman.bind(this);
  }

  handleInputChange(e) {
    if (e.target.value >= 1 && e.target.value <= 3999) {
      this.setState({
        number: e.target.value,
      });
    } else {
      this.setState({
        number: "",
      });
    }
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
      <div className="converter">
        <Form>
          <FormGroup controlId="converterForm">
            <Row>
              <Col xs={{ span: 8, offset: 2 }} md={{ span: 4, offset: 4 }}>
                <FormLabel className="formLabel">Enter number 1-3999</FormLabel>
              </Col>
            </Row>
            <Row>
              <Col xs={{ span: 6, offset: 3 }} md={{ span: 2, offset: 5 }}>
                <FormControl
                  size="lg"
                  className="formInput"
                  required
                  type="text"
                  maxLength={4}
                  placeholder="1234"
                  value={this.state.number}
                  onChange={this.handleInputChange}
                  onKeyPress={this.handleKeyPress}
                />
              </Col>
            </Row>
            <Row>
              <Col xs={{ span: 10, offset: 1 }} md={{ span: 6, offset: 3 }}>
                <FormLabel className="romanNumeral">
                  {this.state.romanNumeral}
                </FormLabel>
              </Col>
            </Row>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default Converter;
