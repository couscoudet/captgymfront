const mailRegex = new RegExp('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$');
const zipcodeRegex = new RegExp('^[0-9]{5}(?:-[0-9]{4})?$');

// Match a phone number with "-" and/or country code. 
const phoneRegex = new RegExp('^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$')


const regControl = (input,regex,alert) => {
    const myArray = input.value.match(regex);
    return myArray ?  myArray[0] : window.alert(alert);
}