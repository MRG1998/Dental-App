class Patient{
    id;
    static age;
    static name;
    static email;
    static phone;
    static gender;
    static address;
    static count = 0;
    static patientList = [];
    //==Validation Function ==//
    isRequiredField(value) {
        if (!(value !== undefined && value !== null && value !== '')) {
            return false;
        }
        return true;
    }

    validateEmail(value) {
        let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return emailPattern.test(value);
    }

    validateNumber(value) {
        let num = new RegExp('^[0-9]*$');
        return num.test(value);

    }

    validatePhone(value) {
        if(value.length < 10 ){
            return value;
        }
    }

    //==Setter Function ==//
    static setName(name) {
        Patient.name = name;
        this.id = ++Patient.count;
    };

    static setAge(age) {
        Patient.age = age;
    };


    static setGender(gender) {
        Patient.gender = gender;
    };

    static setAddress(address) {
        Patient.address = address;
    };

    static setEmail(email) {
        Patient.email = email;
    };

    static setPhone(phone) {
        Patient.phone = phone;
    };


    //==Getter Function ==//
    getName() {
        return Patient.name;
    };

    getAge() {
        return Patient.age;
    };

    getGender() {
        return Patient.gender;
    };

    getAddress() {
        return Patient.address;
    };

    getEmail() {
        return Patient.email;
    };

    getPhone() {
        return Patient.phone;
    };
}
module.exports = Patient;