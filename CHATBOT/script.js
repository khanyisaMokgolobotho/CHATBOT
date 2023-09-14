document.addEventListener("DOMContentLoaded", function () {
    const chatArea = document.getElementById("chat-area");
    const chatbox = document.getElementById("chatbox");

    // Initial bot message
    appendMessage("SmooBot", "Hello! Please type 'Hi' or 'Hello' to begin conversation.");

    chatbox.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });

    // Student data
    const students = {
        "202009934":  {First_Name: "Khanyisa", Last_Name: "Mokgolobotho", Course: "Dietics", Residence: "2A"},
        "201908966": {First_Name: "Lenty", Last_Name: "Machete", Course: "BDS", Residence: "Drei lillies"},
        "201955721": {First_Name: "Relinde", Last_Name: "Mlangeni",Course: "BSc-Mathematics",Residence: "4B"},
        "201989046": {First_Name: "Hope", Last_Name: "Letlotlo", Course: "BSc-Physics", Residence: "MadeiraIsles"},
        "201989059": {First_Name: "Lihle", Last_Name: "Sekgobela", Course: "MBCHB", Residence: "Heights"},
        "201999254": {First_Name: "Thato", Last_Name: "Letlalo", Course: "BSc-Mathematics", Residence: "5A"},
        "202004546": {First_Name: "Blessing", Last_Name: "Mongwe", Course: "BSc-Life Science", Residence: "Madeira Isles"},
        "202008966": {First_Name: "Glen", Last_Name: "Nkadimeng", Course: "BSc-Physics", Residence: "Madeira Isles"},
        "202010307": {First_Name: "Masechaba", Last_Name: "Mofokeng", Course: "MBCHB", Residence: "South Point"},
        "202012345": {First_Name: "Lethabo", Last_Name: "Rangata", Course: "Radiography", Residence: "The Heights"},
        "202012545": {First_Name: "Vince", Last_Name: "Letsoalo", Course: "BSc-Life Sciences", Residence: "1D"},
        "202077896": {First_Name: "Bongiwe", Last_Name: "Masoa", Course: "Dentistry", Residence: "Arebeng"},
        "202123066": {First_Name: "Shiner", Last_Name: "Dube", Course: "SpeechnAudio", Residence: "5B"},
        "202181044": {First_Name: "DAN", Last_Name: "Khumalo", Course: "BSC-Chemistry", Residence: "1A"},
        "202189886": {First_Name: "Njabulo", Last_Name: "Mantiti", Course: "BSc-Audio", Residence: "Heights"}
    };

    const contacts = {
        "Health Care Sciences": {Title: "Dean", Name: "Prof D. Maleka", Email: "dean.healthcaresciences@smu.ac.za"},
        // ... add the rest of the contacts here
    };

    const staff = {
        "112232023": {Title: "Prof", LastName: "Sekgobela", Work_Dept: "CSIT", Contacts: "+27601347654", Email: "mmsekgobela@swave.smu.ac.za"},
        // ... add the rest of the staff here
    };

    const fees = {
        "201999254": {name: "T. Letlalo", academic_Fees: "R300 000", res_Fees: "R30 000", Outstanding_fees: "R9 000"},
        "201989046": {name: "H. Letlotlo", academic_Fees: "R400 000", res_Fees: "R50 000", Outstanding_fees: "R12 000"},
        "202010307": {name: "M. Mofokeng", academic_Fees: "R500 000", res_Fees: "R50 000", Outstanding_fees: "R800"},
        "202181044": {name: "D. Khumalo", academic_Fees: "R400 000", res_Fees: "R30 000", Outstanding_fees: "R13 043.67"},
        "202189886": {name: "N. Mantiti", academic_Fees:"R350 000", res_Fees: "R40 000", Outstanding_fees: "R965.90"},
        "201989059": {name: "L. Sekgobela", academic_Fees: "R500 000", res_Fees: "R40 000", Outstanding_fees: "R21 070"},
        "202123066": {name: "S. Dube", academic_Fees: "R450 000", res_Fees: "R30 000", Outstanding_fees: "R19 789.31"},
        "202008966": {name: "G. Nkadimeng", academic_Fees: "R400 000", res_Fees: "R50 000", Outstanding_fees: "R0.00"},
        "202012545": {name: "V. Letsoalo", academic_Fees: "R450 000", res_Fees: "R30 000", Outstanding_fees: "R700.67"},
        "201955721": {name: "R. Mlangeni", academic_Fees: "R300 000", res_Fees: "R30 000", Outstanding_fees: "R10 090.88"},
        "201908966": {name: "L. Machete", academic_Fees: "R455 000", res_Fees: "R50 000", Outstanding_fees: "R15 500"},
        "202009934": {name: "K.F. Mokgolobotho", academic_Fees: "R450 000", res_Fees: "R30 000", Outstanding_fees: "R9 800"},
        "202004546": {name:"B.T.N. Mongwe", academic_Fees: "R400 000", res_Fees: "R50 000", Outstanding_fees: "R29 923.76"},
        "202012345": {name:"L. Rangata", academic_Fees: "R455 000", res_Fees: "R50 000", Outstanding_fees: "R800"},
        "202077896": {name: "B. Masoa", academic_Fees: "R450 000", res_Fees: "R55 000", Outstanding_fees: "R978.90"}
    };


    let currentStudent = null;


    function sendMessage() {
        const userMessage = chatbox.value.trim().toLowerCase();
        chatbox.value = "";

        // Check if user input is empty
        if (!userMessage) {
            alert("Please type a message before sending.");
            return;
        }


        appendMessage("YOU", userMessage);

        if (userMessage === "hi" || userMessage === "hello") {
            botReply("Hi there! Are you a 'current student' or a 'prospective student'?");
        } else if (userMessage === "current student") {
            botReply("Great! Could you please provide your student number?");
        } else if (students.hasOwnProperty(userMessage)) {
            currentStudent = students[userMessage];
            botReply(`Hello, ${currentStudent.First_Name}! What information are you looking for? Please choose from the following options:
        <ul>
            <li>Course Information</li>
            <li>Residence Information</li>
            <li>Financial Information</li>
            <li>Departments Contact Information</li>
        </ul>`);
        } else if (userMessage === "course information") {
            botReply(`Please choose from the following options:
        <ul>
            <li>Course Name</li>
        </ul>`);
        }
        else if (userMessage === "course name" && currentStudent) {
            botReply(`Your course is ${currentStudent.Course}`);
        } else if (userMessage === "academic fees" && currentStudent) {
            const studentNumber = Object.keys(students).find(key => students[key] === currentStudent);
            if (studentNumber && fees.hasOwnProperty(studentNumber)) {
                botReply(`Your academic fees are ${fees[studentNumber].academic_Fees}`);
            } else {
                botReply("Sorry, I couldn't find academic fee information for you.");
            }
        } else if (userMessage === "outstanding fees" && currentStudent) {
            const studentNumber = Object.keys(students).find(key => students[key] === currentStudent);
            if (studentNumber && fees.hasOwnProperty(studentNumber)) {
                botReply(`Your outstanding fees are ${fees[studentNumber].Outstanding_fees}`);
            } else {
                botReply("Sorry, I couldn't find outstanding fee information for you.");
            }
        } else if (userMessage === "residence information") {
            botReply(`Please choose from the following options:
        <ul>
            <li>Residence Name</li>
            <li>Residence Fees</li>
        </ul>`);
        } else if (userMessage === "residence name" && currentStudent) {
            botReply(`Your residence is ${currentStudent.Residence}`);
        } else if (userMessage === "residence fees" && currentStudent) {
            const studentNumber = Object.keys(students).find(key => students[key] === currentStudent);
            if (studentNumber && fees.hasOwnProperty(studentNumber)) {
                botReply(`Your residence fees are ${fees[studentNumber].res_Fees}`);
            } else {
                botReply("Sorry, I couldn't find residence fee information for you.");
            }
        } else if (userMessage === "financial information") {
            botReply(`Please choose from the following options:
        <ul>
            <li>Academic Fees</li>
            <li>Residence Fees</li>
            <li>Outstanding Fees</li>
        </ul>`);
        } else if (userMessage === "academic fees" && currentStudent) {
            const studentNumber = Object.keys(students).find(key => students[key] === currentStudent);
            if (studentNumber && fees.hasOwnProperty(studentNumber)) {
                botReply(`Your academic fees are ${fees[studentNumber].academic_Fees}`);
            } else {
                botReply("Sorry, I couldn't find academic fee information for you.");
            }
        } else if (userMessage === "residence fees" && currentStudent) {
            const studentNumber = Object.keys(students).find(key => students[key] === currentStudent);
            if (studentNumber && fees.hasOwnProperty(studentNumber)) {
                botReply(`Your residence fees are ${fees[studentNumber].res_Fees}`);
            } else {
                botReply("Sorry, I couldn't find residence fee information for you.");
            }
        } else if (userMessage === "outstanding fees" && currentStudent) {
            const studentNumber = Object.keys(students).find(key => students[key] === currentStudent);
            if (studentNumber && fees.hasOwnProperty(studentNumber)) {
                botReply(`Your outstanding fees are ${fees[studentNumber].Outstanding_fees}`);
            } else {
                botReply("Sorry, I couldn't find outstanding fee information for you.");
            }
        } if (userMessage === "departments contact information") {
            botReply(`Please choose from the following options:
    <ul>
        <li>Health Care Sciences</li>
        <li>Medicine</li>
        <li>Oral Health Sciences</li>
        <li>Pharmacy</li>
        <li>Science and Technology</li>
    </ul>`);
        } 
    }

    function botReply(message) {
        appendMessage("SmooBot", message);
    }

    function appendMessage(sender, message) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message");
        messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
        chatArea.appendChild(messageElement);
        chatArea.scrollTop = chatArea.scrollHeight;
    }
});