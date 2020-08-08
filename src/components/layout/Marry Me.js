import React from 'react';

const MarryMe = () => {

    function marryMe() {
        let x = confirm("ANAM WILL YOU MARRY ME");
        if(x) {
            alert("I am so happy");
        } else {
            alert("I am sad, but still am happy");
        }
    }

    return (
        <p onClick={marryMe()}>CICK ME</p>
    )
}

export default MarryMe;
