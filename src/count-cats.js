const CustomError = require("../extensions/custom-error");

module.exports = countCats = matrix => {
    let count = 0;
    matrix.flat().forEach(item =>{
        item === '^^'? count++ : count;
    });
    return count;
};
