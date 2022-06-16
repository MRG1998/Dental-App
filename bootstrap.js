const Clinic = require("./Clinic.js");
const Patient = require("./Patient.js");
const Appointment = require("./Appointment")
const prompt = require("prompt-sync")({ sigint: true });

welcome = () =>{
    console.log(" \n");
    console.log( '                                                     🦷 Dr.Reem Clinic 👩‍⚕');
    console.log("     ________________________________________________________________________________________________________________")
    console.log("                                                                                                                            ");
    console.log("               (1.) Add Patient😷     (2.) Add Appointment📋      (3.) Add Treatment 🦷       (4.) All Patient ☑        \n");
    console.log("     ________________________________________________________________________________________________________________")

    console.log('\n \nHello! ✋, Dr.Reem Plz Select A Number:');
    let input = prompt();
    if (input == '1') {
        Clinic.addPatient();
    }
    else if (input == '2') {
        Clinic.addAppointment();
    }
    else if (input == '3') {
        Clinic.addTreatment();
    } 
    else if (input == '4') {
        console.log(" ⭐➖ Show All Patient ☑ ");
        console.table(Patient.patientList);
        welcome();
    }
    else {
        console.log('Please select one of the numbers below, thank you');
    }
}

module.exports = welcome();