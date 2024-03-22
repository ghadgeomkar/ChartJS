import React from 'react';

const DropDown = ({ selectedOption, setSelectedOption, options }) => {
    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };

    return (
        <div className='ResponseTimeDropDown'>
            <div className="dropdown">
                <button className="dropbtn">Chart: {selectedOption}</button>
                <div className="dropdown-content">
                    {
                        options.map((val, i) => (
                            <button key={i} onClick={() => handleOptionChange(val)}>{val}</button>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default DropDown;
