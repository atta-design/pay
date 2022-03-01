import React, { Component } from "react";
import "./css/credit-card.css";
import "./css/form-style.css";
import Cards from "react-credit-cards";
import Timer from "./secondform";
import swal from 'sweetalert'



class Creditcard extends Component {
  timeoutID;
  constructor(props) {
    super(props);

    this.state = {
      stage:1,
      cvc: "",
      expiry: "",
      expiryyear: "",
      focus: "",
      name: "",
      number: "",
      password:"",
      mobile:"",
      price:"20000",
      validationCode:"",
      time:true

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
  swal('زمان متقضی شد')
    sessionStorage.clear();
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
    //checking after every 1 min
    // wait 30 min before calling goInactive
    this.timeoutID = window.setTimeout(this.goInactive, 60000 * 30);
  }
  //storing data on submit button click
  submit = (e) => {
    sessionStorage.setItem("user", JSON.stringify(this.state));
    e.preventDefault();

    //restoring initial state of the app
    this.setState({
      name: "",
      number: "",
      cvc: "",
      expiry: "",
      expiryyear: "",
      focus: "",
      password:''
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
      <div >
        <div className="credit-card ">


          <Cards
            locale={{ valid: "Expires" }}
            placeholders={{ name: "FULL NAME" }}
            cvc={this.state.cvc}
            expiry={this.state.expiry}
            expiryyear={this.state.expiryyear}
            focused={this.state.focus}
            name={this.state.name}
            number={this.state.number}
          />
        </div>





        <div className="card">
          <form className="payment-form">


          <div className="form-group">
              <label htmlFor="cardHolder" className="card-label">

  <p>مبلغ</p>          </label>
              <input
                type="number"
                name="name"
                // spellCheck="false"
                value={this.state.price}
                // maxLength="20"
                // autoComplete="off"
                // onPaste={(e) => e.preventDefault()}
                // onChange={this.handleInputChange}
                // onFocus={this.handleInputFocus}
                // id="cardHolder"
                className="form-control form-control-lg"
              />
            </div>
    


            {this.state.stage==1   &&  (
              <div>



            <div className="form-group">
              <label htmlFor="cardNumber"  className="card-label">
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
              {/* {( this.state.number!==20) && <p>شماره کارت را درست وارد کنید</p>} */}
            </div>

            <div className="form-group">
              <label htmlFor="cardHolder" className="card-label">
شماره موبایل              </label>
              <input
                type="number"
                name="name"
                spellCheck="false"
                value={this.state.mobile}
                maxLength="11"
                autoComplete="off"
                onPaste={(e) => e.preventDefault()}
                onChange={(e)=>this.setState({mobile:e.target.value})}
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
            onClick={ ()=>this.state.number.length==19?  
            (this.state.mobile.length==11 && this.state.mobile.charAt(0)==0 && this.state.mobile.charAt(1)==9  ?  
            this.setState({stage:this.state.stage+1}):
            swal('شماره موبایل نامعتبر است'))
            :swal('شماره کارت نامعتبر است')}>ادامه</button>
            </div>
            )}







            {this.state.stage==2  &&
            <div>
            <div className="form-group">
              <label htmlFor="cardHolder" className="card-label">        کد ارسال شده به شماره{this.state.mobile} را وارد کنید      </label>
              <input
                type="number"
                name="name"
                spellCheck="false"
                value={this.state.validationCode}
                maxLength="20"
                autoComplete="off"
                onPaste={(e) => e.preventDefault()}
                onChange={(e)=>this.setState({validationCode:e.target.value})}
                onFocus={this.handleInputFocus}
                id="cardHolder"
                className="form-control form-control-lg"
              />
              {<Timer/>}
            </div>
            <button type="button" className="btn rejectbtn btn-lg btn-block" onClick={()=>this.state.validationCode ? this.setState({stage:this.state.stage+1}):swal('enter the code')}>تایید</button>
</div>}









{this.state.stage==3 &&
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
                    <option value="2020">1395</option>
                    <option value="2021">1396</option>
                    <option value="2020">1397</option>
                    <option value="2021">1398</option>
                    <option value="2022">1399</option>
                    <option value="2023">1400</option>
                    <option value="2024">1401</option>
                    <option value="2025">1402</option>
                    <option value="2026">1403</option>
                    <option value="2027">1404</option>
                    <option value="2028">1405</option>
                    <option value="2029">1406</option>
                    <option value="2030">1407</option>
                    <option value="2031">1408</option>
                    <option value="2030">1409</option>
                    <option value="2031">1410</option>
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
            <label htmlFor="cvv" className="card-label cvv-label">
              رمز کارت  
                </label>
                <input
                  type='password'
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
                
                <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">دریافت رمز پویا</button>
            <button 
           
              className="btn btn-primary btn-lg btn-block"
              onClick={this.submit}
              data-bs-toggle="modal" data-bs-target="#exampleModal"
            >
              
              پرداخت
            </button>
            
            <button type="submit"  onClick={this.submit} className="btn rejectbtn btn-lg btn-block" data-bs-toggle="modal" data-bs-target="#exampleModal2">انصراف</button>
</div>}










          </form>
        </div>







        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">نتیجه تراکنش</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <h2>پرداخت با موفقیت انجام شد </h2>
      </div>
      <div className="modal-footer">
        
        <button type="button" className="btn btn-primary">بازگشت به صفحه اصلی</button>
      </div>
    </div>
  </div>
</div>
<div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">نتیجه تراکنش</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <h2>پرداخت انجام نشد </h2>
      </div>
      <div className="modal-footer">
        
        <button type="button" className="btn btn-primary">بازگشت به صفحه اصلی</button>
      </div>
    </div>
  </div>
</div>
{console.log(this.state.time)}
      </div>
    );
  }
}


export default Creditcard;