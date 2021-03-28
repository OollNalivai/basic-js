const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (members instanceof Array) {
        let result = members.map(item => {
            return typeof item === "string" ? item.split(' ').join('').toUpperCase() : 0;
        });
        let array = result.filter((item) => {
            if (item !== 0) {
                return item;
            }
        }).map((item) => {
            item = item.split('');
            return [...item[0]];
        })
        return array.sort().join('');
    } else {
        return false;
    }
};
