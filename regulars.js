let phoneValidator = function (phoneNumber) {
    let validateRule = /^[A-Za-z\d][-+.A-Za-z\d]{1,19}@[.!$%&’*+/=?^\w-]{1,15}\.[a-zA-Z]{1,5}$/;
    return phoneNumber.match(validateRule) !== null;


}

console.log(phoneValidator("first.part@se=cond%part.r"))