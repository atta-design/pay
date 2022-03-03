import swal from "sweetalert";







import React from 'react'

export default function responseMasseges() {
    return (
        <div>

            {/* unsucussful payment */}
            <div
          className="modal fade"
          id="exampleModal2"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  نتیجه تراکنش
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <h2>پرداخت انجام نشد </h2>
              </div>
              <div className="modal-footer"></div>
            </div>
          </div>
        </div>


{/*sucussful payment */}


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
{/* ___incorrect_validationCode___ */}
{swal("Oops!",'کد وارد شده صحیح نیست')}

        </div>






    )
}
