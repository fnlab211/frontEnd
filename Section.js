import React, {useState} from 'react';

const Section = (props) => {
    const [num1, countNum1] = useState(0);
    const clickEvent1 = () => {
        countNum1(num1 + 1);
    }
    const [num2, countNum2] = useState(props === undefined ? 0 : props.customNum);
    const clickEvent2 = () => {
        countNum2(num2 + 1);
    }
    
    return (
        <div className="countBox">
            <div className="countPrint defaultSet">{num1}</div>
            <div className="countPrint customSet">{num2}</div>
            <button className="countBtn" onClick={clickEvent1}> Click! </button>
            <button className="countBtn" onClick={clickEvent2}> Click! </button>
        </div>
    );
};

export default Section;