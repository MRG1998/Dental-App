const Patient = require("./Patient.js");

class Appointment{
    static day;
    static month;
    static year;
    static hour;
    static minte;

    static appointmentList = [ ];

    //==Setter Function ==//
    static setDay(day) {
        Appointment.day = day;
        this.id = ++Patient.count;
    };

    static setMonth(month) {
        Appointment.month = month;
    };

    static setYear(year) {
        Appointment.year = year;
    };

    static setHour(hour) {
        Appointment.hour = hour;
    };

    static setMint(minte) {
        Appointment.minte = minte;
    };

    //==Getter Function ==//
    getDay() {
        return Appointment.day;
    };

    getMonth() {
        return Appointment.month;
    };

    getYear() {
        return Appointment.year;
    };

    setHour() {
        return Appointment.hour;
    };

    static setMint() {
       return Appointment.minte;
    };
}

module.exports = Appointment;