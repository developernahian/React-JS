// rsc
import React from 'react';
import '../Watch/Watch';

import './Sunglass.css';
import Watch from '../Watch/Watch';

// import multiply from '../../Utils/calculate';
// import add from '../../Utils/calculate';
//OR
import { add, multiply, divideTheFirstNumberByTheSecondNumber as divide } from '../../Utils/calculate';


const Sunglass = () => {

    const first = 55
    const second = 45

    const sum = add(first, second)
    const mult = multiply(first, second)
    const vaag = divide(first, second)

    console.log(sum)
    console.log(mult)
    console.log(vaag)

    return (
        <div>
            
            <p>Sum:{sum}</p>
            <p>Multiply:{mult}</p>
            <p>Divide: {vaag}</p>

            <Watch> </Watch>

        </div>
    );
};

export default Sunglass;


//IMPORTANT: watch file and folder er kono kaz nai ekhane. path declaration practice purpose ekhane rekhechi

//ChatGPT prompt for better knowledge
//when should I use ES6 modudles. give me some example
// give me an overview of ES6 Import and Export different functionalities with example
