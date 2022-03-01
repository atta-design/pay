import React from 'react'

function Timer() {

  const [counter, setCounter] = React.useState(60);
    React.useEffect(() => {
              counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
            }, [counter]);
         
    return (
        <div>
         <p style={{color:'white'}}>{counter}</p>   
        </div>
    )
}

export default Timer
