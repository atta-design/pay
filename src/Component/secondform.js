import React from 'react'
// import { useNavigate } from 'react-router-dom'
// import { Formik, useFormik } from 'formik'
// import * as Yup from 'yup';
// function Secondform() {
//   const [counter, setCounter] = React.useState(60);
//     let navigat=useNavigate()
//     React.useEffect(() => {
//       counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
//     }, [counter]);
//     const formik = useFormik({
//       initialValues: {
//         validationCode: '',
//       },
        
// validate: value =>{
  
// let errors={}
// if(!value.validationCode){
//   errors.name='كد ارسال شده را وارد كنيد'
// }
// return errors
// },
     
//       onSubmit: () => {
//        navigat('/payment')
//       },
//     });
//     return (
      
   
//     <div className="login-box">
//     {/* <Formik
//      initialValues={{
//       validationCode: '',
     
//     }}
//     validationSchema={Yup.object({
//       validationCode:Yup.number().test('len', 'Must be exactly 5 characters', val => val.toString().length === 5).required()
//     })
//   }
//     onSubmit={()=>navigat('/payment')}
//     > */}
//  <form onSubmit={formik.handleSubmit}>
//    <label className='form-label'>کد ارسال شده را وارد نمایید</label>
//    <div className="user-box">
    
//     <input type='number' dir='ltr' id='validationCode' name='validationCode'  onChange={formik.handleChange} value={formik.values.validationCode} placeholder="کد را وارد کنید "/>
//       </div>
//    {formik.errors.name && <p style={{color:'red'}}>{formik.errors.name}</p>}
//    <div>
//    <input type='submit' className="sbtn" value='ارسال مجدد كد' />

//     <a>
//       <span></span>
//       <span></span>
//       <span></span>
//       <span></span>
//            <input type='submit' className="sbtn" value='تایید' />

//     </a>
// </div>
   
   
//   </form>
//   {/* </Formik> */}
//  {<h1>{counter}</h1> }
//   </div>
        
//     )
// }

// export default Secondform
const Timer=()=>{
    const [counter, setCounter] = React.useState(5);
    React.useEffect(() => {
              counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
            }, [counter]);
            return(
                <div className='d-flex flex-row-reverse'>
              <p>{ counter }&nbsp; </p>
                <p>
                    
                ثانیه دیگر می توانید مجددا درخواست ارسال کد کنید   
                
                </p>
                {counter===0 && <button type='button' className='btn '>دریافت مجدد</button>}
                </div>

            )
    
}
export default Timer