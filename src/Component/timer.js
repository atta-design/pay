import React,{useState} from "react";
import axios from "axios";

const Timer = () => {
  const[resendMassage,setResendMassage]=useState(()=>()=>{})
  const [counter, setCounter] = React.useState(60);
  React.useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);
 const handleResend=()=>{
  const getFunction={
    ResendMassage:resendMassage
  }
  axios
  .post(`https://jsonplaceholder.typicode.com/users`, {getFunction: getFunction})
  .then((res) => {
    console.log(res);
    console.log(res.data);
  });
 }
  
  return (
    <div className="d-flex flex-row-reverse">
      <p>{counter}&nbsp; </p>
      <p>ثانیه دیگر می توانید مجددا درخواست ارسال کد کنید</p>
      {counter === 0 && (
        <button onClick={handleResend} type="button" className="btn">
          دریافت مجدد
        </button>
      )}
    </div>
  );
};
export default Timer;
