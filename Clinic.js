const Patient = require("./Patient.js");
const Appointment = require("./Appointment.js");
const prompt = require("prompt-sync")({ sigint: true });

let newPatient = new Patient();
let newAppointment = new Appointment();
class Clinic{
    //backToHome Functions
    static AddNewPatient(){
    console.log('Would You Like To ➕ Add New Patient \n 1.Yes \n 2.No \n');
    let ask = prompt();
        if(ask == '1') {
            Clinic.addPatient();
        }
        else{
            welcome();
        }
    }
    
    static addNewAppointment(){
        console.log('Would You Like To Add New Appointment \n 1.Yes \n 2.No \n');
        let ask = prompt();
            if(ask == '1') {
                Clinic.addAppointment();
            }
            else{
                welcome();
            }
    }


    //addPatient Functions
    static addPatient() {

        console.log("__________________________________📌 1. Add Patient 😷____________________________________ \n \n")
        let addName = prompt('⭐➖ Enter Patient Name : ');
        while (newPatient.isRequiredField(addName) == false) {
            addName = prompt('⭐➖ Enter Patient Name : ');
        } 
        Patient.setName(addName);


        let addAge = prompt('⭐➖ Enter Patient Age : ');
        while (newPatient.isRequiredField(addAge) == false || newPatient.validateNumber(addAge) == false ) {
            addAge = prompt('⭐➖ Enter Patient Age : ');
        } 
        Patient.setAge(addAge);


        let Female = "Female";
        let Male = "Male";
        let gender = prompt('⭐➖ Enter Patient Gender, Male or Female : ');
        while (newPatient.isRequiredField(gender) == false ) {
            gender = prompt('⭐➖ Enter Patient Gender, Male or Female : ');
        } 
        if (gender == "M" || gender == "m") {
            Patient.setGender(Male);
        } 
        else if (gender == "F" || gender == "f") {
            Patient.setGender(Female);
        } 
        else {
            console.log("Gender Must Be  M,m => male M OR F,f => female");
            gender = prompt('⭐➖ Enter Patient Gender, Male or Female : ');
        }


        let addAddress = prompt('⭐➖ Enter Patient Address Country - City : ');
        while (newPatient.isRequiredField(addAddress) == false) {
            addAddress = prompt('⭐➖ Enter Patient Address Country - City : ');
        } 
        Patient.setAddress(addAddress);


        let addEmail = prompt('⭐➖ Enter Patient Email (ex: example@gmail.com) : ');
        while (newPatient.validateEmail(addEmail) == false) {
            addEmail = prompt('⭐➖ Enter Patient Email (ex: example@gmail.com) : ');
        } 
        Patient.setEmail(addEmail);


        let addPhone = prompt('⭐➖ Enter Patient Phone (ex: 059x xxx xxx ) : ');
        while (newPatient.isRequiredField(addPhone) == false || newPatient.validatePhone(addPhone)) {
            addPhone = prompt('⭐➖ Enter Patient Phone 10 Number(ex: 059x xxx xxx )');
        } 
        Patient.setPhone(addPhone);
    
        let obj = {
            id: Patient.count,
            name: newPatient.getName(),
            age: newPatient.getAge(),
            gender: newPatient.getGender(),
            address: newPatient.getAddress(),
            email: newPatient.getEmail(),
            phone: newPatient.getPhone(),
        }
    
        Patient.patientList.push(obj);
        console.log('\n');
        console.log("Patient Information ");
        console.table(Patient.patientList);

        Clinic.AddNewPatient();
    }

    //addAppointment Functions
    static addAppointment(){
        console.log("__________________________________📌 2. Add Appointment 📋____________________________________ \n \n")
        console.log(`⚪ All Patients `);
        console.table(Patient.patientList);

        let patientId = prompt("Enter the patient ID : ");
        let user;
        for ( user of Patient.patientList) {
           let userId = user.id;
           let userName = user.name;
           let userPhone = user.phone;
           if(userId == patientId){

            let  appointmentDay= prompt("⭐➖ Enter the Day : ");
            while( appointmentDay < 0 ||  appointmentDay > 31){
                 appointmentDay= prompt("⭐➖ Enter the Day (Day should be between [1-31] days) : ");
            }

            let  appointmentMonth= prompt("⭐➖ Enter the Month : ");
            while( appointmentMonth < 0 ||  appointmentMonth > 12){
                 appointmentMonth= prompt("⭐➖ Enter the Month (Month between 1 to 12) : ");
            }

            let  appointmentYear= prompt("⭐➖ Enter the Year : ");
            while( appointmentYear < 2022){
                 appointmentYear= prompt("⭐➖ Enter the Year  (Year More then 2021) : ");
            }

            let  appointmentHour= prompt("⭐➖ Enter the Hour : ");
            while( appointmentHour < 0 ||  appointmentHour > 12){
                 appointmentHour= prompt("⭐➖ Enter the Hour (Hour between 1 to 12) : ");
            }

            let  appointmentMinets= prompt("⭐➖ Enter the Minets : ");
            while( appointmentMinets < 0 ||  appointmentMinets > 59){
                 appointmentMinets= prompt("⭐➖ Enter the Minets (Minets less then 59m ) : ");
            }

            let date =" 📆 The Appointment on : " + appointmentDay + '/ ' +  appointmentMonth + '/ ' +  appointmentYear + "\n 🕙 at  Time : " +  appointmentHour + " : " +  appointmentMinets + " ";

                console.log('\n');
                console.log(`📌➖ Appointment Information ⭐ ${userName} 📞 ${userPhone}`);
                console.log(date)
            }
            
        }
        welcome();
    }

      //addAppointment Functions
      static addTreatment(){
        let Teeth = ['11', '12', '13', '14', '15', '16', '17', '18', '21', '22', '23', '24', '25', '26', '27', '28', '31', '32', '33', '34', '35', '37', '38', '41', '42', '43', '44', '45', '46', '47', '48']
        console.log("__________________________________📌 3. Add Treatment 🦷 ____________________________________ \n \n")
        console.log(`⚪ All Patients `);
        console.table(Patient.patientList);

        let patientId = prompt("Enter the patient ID : ");
        let user;
        for ( user of Patient.patientList) {
           let userId = user.id;
           let userName = user.name;
           let userPhone = user.phone;
           if(userId == patientId){

            let  teethNumber= prompt("⭐➖ Enter the Tooth Number : ");
            while(!(Teeth.includes(teethNumber))){
                teethNumber= prompt("⭐➖ Enter the correct Teeth Number : ");
                console.log(Teeth)
            }
            

            let date =" 🦷 The Tooth Number : " + teethNumber;

                console.log('\n');
                console.log(`📌➖ Appointment Information ⭐ ${userName} 📞 ${userPhone}`);
                console.log(date)
            }
            
        }
        welcome();
    }
}
module.exports = Clinic;