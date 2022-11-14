/*Creating some function-validators for email, phone number and password using regular expressions*/


/**
 * Validator for correct email input
 * @param {*} email checking email 
 * @returns true or false depends on validate test result
 */
let emailValidator = function (email) {
    let validateRule = /^[A-Za-z\d][-+.A-Za-z\d]{1,19}@[.!$%&’*+/=?^\w-]{1,15}\.[a-zA-Z]{1,5}$/;
    return email.match(validateRule) !== null;
}

/**
 * Validator for correct email input
 * @param {*} phoneNumber checking phoneNumber 
 * @returns true or false depends on validate test result
 */
let phoneValidator = function (phoneNumber) {
    if (phoneNumber.lenght > 25) {
        return false
    }
    let validateRule = /^[-\s]*(\+[-\s]*3[-\s]*8)?[-\s]*\(?0[-\s]*\d[-\s]*\d\)?([-\s]*\d){7}-*\s*$/;
    return phoneNumber.match(validateRule) !== null;
}

/**
 * Validator for correct email input
 * @param {*} password checking password 
 * @returns true or false depends on validate test result
 */
let passValidator = function (password) {
    let validateRule = /(?=.*[A-Z])(?=.*[a-z])(?=.*\d)/;
    return password.match(validateRule) !== null;
}
