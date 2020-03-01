import React from 'react'

const StartAtc = ({ startAtc }) => {
    return(
        <div className='start-atc-container'>
            <div>
                <p>The Asthma Control Test™ will provide you with a snapshot of how well your asthma has been controlled over the last four
                weeks, giving you a simple score out of 25. </p> 
                {/* <p>Asthma symptoms can vary from month to month, so it is worth keeping the test
                handy to see if your score changes. You can also share your results with your doctor or asthma nurse to help explain just how
                your asthma affects you.</p> */}
            </div>
            <button onClick={startAtc}>Start</button>
        </div>
    )
}

export default StartAtc