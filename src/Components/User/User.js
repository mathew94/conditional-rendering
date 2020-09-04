import React from 'react';

const User = (props) => {
    const familiar = props.familiar;
    let greetings;

    //if(familiar){} aivabeo likha jay. atar meaning familiar jodi true hoy
    if(familiar === true){
        greetings = <p>Welcome my friend</p>;
    }
    else{
        greetings = <p>Who the hell are you?</p>;
    }

    // another way of conditional renderings it's called "javascript ternary operator"
    // const number = 8;
    // const greetings3 = number > 5 ? "Hello!" : "Gello";
    return (
        <div>
            <div>
                <h2>Greetings</h2>
                {greetings}
            </div>
            <div>
                <h2>Food</h2>
                {
                    familiar ? <p>I will buy food for you</p> : <p>Lets eat his his whose whose!</p>
                }
                
                
            </div>
            <div>
                <h2>Connection</h2>
                {
                    familiar && <p>Let's join facebook</p>
                }
                
                {/* <p>i don't add stranger</p> */}
            </div>
        </div>
    );
};

export default User;