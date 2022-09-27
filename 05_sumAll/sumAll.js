//Function accepts two integers
const sumAll = function(num1, num2) {
    let sum = 0;
    let smallerNum;
    let largerNum;
    let error = 'ERROR'

    //Check if num1 is larger than num2
    if(num1 > num2) {
        smallerNum = num2;
        largerNum = num1;
    } else {
        smallerNum = num1;
        largerNum = num2;
    }

    //Verify that the variables are intagers, return error if not
    if(Number.isInteger(num1) && Number.isInteger(num2)) {
        //Verify that the variables are positive intagers, return error if not
        if(Math.sign(num1) === 1 && Math.sign(num2) === 1) {
            //Add all numbers between the smaller and larger numbers, and return the sum
            for(i = smallerNum; i <= largerNum; i++) {
                sum += i;
            }

            return sum;
        } else {
            return error;
        }
    } else {
        return error;
    }
};

// Do not edit below this line
module.exports = sumAll;
