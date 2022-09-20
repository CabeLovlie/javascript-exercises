const repeatString = function(stringToRepeat, num) {
    let repeatedString = '';

    if (num < 0) {
        repeatedString = 'ERROR';
    } else {
        for (i = 0; i < num; i++) {
            repeatedString += stringToRepeat;
        }
    }

    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
