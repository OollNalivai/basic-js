const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; // 15
const HALF_LIFE_PERIOD= 5730; //k

module.exports = function dateSample(sampleActivity) {
    let result = +sampleActivity > 0 &&
    +sampleActivity <= 15 &&
    typeof sampleActivity === "string"? +sampleActivity : false;
    return result?
        Math.ceil(Math.log(MODERN_ACTIVITY/result)/(0.693/HALF_LIFE_PERIOD)) : false;
};
