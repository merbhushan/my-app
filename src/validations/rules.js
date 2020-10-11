import PropTypes from 'prop-types';
class rules {

    constructor(objValidation){
        this.objValidation = objValidation;
    }
    
    validationRules = {
        email: (strValue, objVal) => { return this.validateRegExpression(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, strValue) },
        pNumber: (strValue, objVal) => { return this.validateRegExpression(/^[0-9]+$/, strValue) },        
        nNumber: (strValue, objVal) => { return this.validateRegExpression(/^-[0-9]\d/, strValue) },
        number: (strValue, objVal) => { return this.validateRegExpression(/^-?[0-9]\d/, strValue) },
        pFloat: (strValue, objVal) => { return this.validateRegExpression(/^[0-9]\d*(\.\d+)?$/, strValue) },
        nFloat: (strValue, objVal) => { return this.validateRegExpression(/^-[0-9]\d*(\.\d+)?$/, strValue) },
        float: (strValue, objVal) => { return this.validateRegExpression(/^-?[0-9]\d*(\.\d+)?$/, strValue) },
        letters: (strValue, objVal) => { return this.validateRegExpression(/^[A-Za-z]+$/, strValue) },
        alphanumeric: (strValue, objVal) => { return this.validateRegExpression(/^[0-9a-zA-Z]+$/, strValue) },
        ddmmyyyy: (strValue, objVal) => { return this.validateRegExpression(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/, strValue) },
        mmddyyyy: (strValue, objVal) => { return this.validateRegExpression(/^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/, strValue) },
        yyyymmdd: (strValue, objVal) => { return this.validateRegExpression(/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/, strValue) },
        cardnumber: (strValue, objVal) => { return this.validateRegExpression(/^(?:3[47][0-9]{13})$/, strValue) },
        ipaddress: (strValue, objVal) =>{ return this.validateRegExpression(/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/, strValue) },
        minLength: (strValue, objVal) => { return this.validateMinLength(objVal.minLen, strValue) } ,
        maxLength: (strValue, objVal) => { return this.validateMaxLength(objVal.maxLen, strValue) },
        length: (strValue, objVal) => { return this.validateLength(objVal.len, strValue) },
        required: (strValue, objVal) => { return this.validateMinLength(1, strValue) } 
    };

    validateMaxLength(intLength, strValue){
        if(strValue.toString().length <= parseInt(intLength))
            return true;
        return false;
    }

    validateMinLength(intLength, strValue){
        if(strValue.toString().length >= parseInt(intLength))
            return true;
        return false;
    }

    validateLength(intLength, strValue){
        if(strValue.toString().length === parseInt(intLength))
            return true;
        return false;
    }

    validateRegExpression(strRegEx, strValue){
        if(strValue.match(strRegEx))
            return true;
        return false;
    }
}
export default rules;