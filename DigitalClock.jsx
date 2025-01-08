import React,{useState,useEffect} from "react";

function DigitalCLock(){

    const[time,setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        },1000); // 1 second

        return () => clearInterval(interval); // cleanup
    },[]);

    function formatTime(){
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM";  // if hours is greater than or equal to 12 then PM else AM

        hours = hours % 12 ||12;

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`; 
    }

    function padZero(num){
        return (num < 10 ? "0" : "") + num; // if num is less than 10 then add 0 before num
    }

    return(
        <div className="clock-container">
           <div className="clock">
            <span>{formatTime()}</span>
           </div>
        </div>
    );
}

export default DigitalCLock;