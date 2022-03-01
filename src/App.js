import logo from './logo.svg';
// import './App.css';
import Firstform from './Component/firstform';
import { Router, Routes,Route} from "react-router-dom";
import Secondform from './Component/secondform';
import Cards from "react-credit-cards";
import '../src/Component/css/credit-card.css'
import './Component/bootstrap.min.css'
import './Component/style.css'
import './Component/css/form-style.css'
import Creditcard from './Component/exapmw';
import Timer from './Component/timer';
function App() {

  return (
   
     <>
    {/* <Bank/> */}
    {/* <CreditCardForm /> */}
     
    
    {/* <Routes>
        <Route path="/" element={<Firstform />} />
        <Route path="/second" element={<Secondform />} />
        <Route path="/payment" element={<Creditcard />} />
    </Routes> */}
{/* <Timer/> */}
   {/* <Creditcard/> */}
<Creditcard/>
{/* <Firstform/> */}
    </>
    
    
  /* <Payment_gateway/> */
    
  );
}

export default App;
