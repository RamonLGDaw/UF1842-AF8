const stringUtils = {
    capitalizeFirstLetter(cadena) {
        const capFirstLet = cadena[0].toUpperCase();
        newString = cadena.slice(1);
        return capFirstLet + newString
    },

    reverseString(cadena) {
        const reverString = cadena.split("").reverse().join("");
        return reverString;
    }
}

module.exports = stringUtils;
