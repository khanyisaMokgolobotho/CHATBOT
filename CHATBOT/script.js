document.addEventListener("DOMContentLoaded", function () {
    const chatArea = document.getElementById("chat-area");
    const chatbox = document.getElementById("chatbox");

    // Initial bot message
    appendMessage("SmooBot", "Hello! Please type 'Hi' or 'Hello' to begin conversation.");

    // Listen for Enter key press in the chatbox
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
        "Health Care Sciences, Dean": { Title: "Dean", Name: "Prof D. Maleka", Email: "dean.healthcaresciences@smu.ac.za" },
        "Health Care Sciences, Secretary": { Title: "Secretary", Name: "Ms C. Serepong", Email: "charmaineserepong@smu.ac.za" },
        "Oral Health Sciences, Dean": { Title: "Dean", Name: "Prof D. Mawela", Email: "dean.oralhealthsciences@smu.ac.za" },
        "Oral Health Sciences, Secretary": { Title: "Secretary", Name: "Ms W. Mambana", Email: "winilemambana@smu.ac.za" },
        "Medicine, Dean": { Title: "Dean", Name: "Prof N. Mafolo", Email: "dean.medicine@smu.ac.za" },
        "Medicine, Secretary": { Title: "Secretary", Name: "Ms R. Mphahlele", Email: "raisibemphahlele@smu.ac.za" },
        "Pharmacy, Dean": { Title: "Dean", Name: "Prof P. Demana", Email: "dean.pharmacy@smu.ac.za" },
        "Pharmacy, Secretary": { Title: "Secretary", Name: "Ms S. Mahlangu", Email: "simangelemahlangu@smu.ac.za" },
        "Science and Technology, Dean": { Title: "Dean", Name: "Prof L. Obi", Email: "dean.sciencetechnology@smu.ac.za" },
        "Science and Technology, Secretary": { Title: "Secretary", Name: "Ms P. Zulu", Email: "phumzilezulu@smu.ac.za" },
        "Emergency, Ambulance": { Title: "Ambulance", Name: "Mr E. Sephoka", Contacts: "+27 79 417 9546/6278" },
        "Emergency, Clinic": { Title: "Clinic", Name: "Mrs M. Maake", Contacts: "+27 12 521 5735" },
        "Emergency, Social Worker": { Title: "Social Worker", Name: "Ms A. Kgatle", Location: "CP Building, 5th Floor, Room: S531" }
    };




    const staff = {
        "112232023": { Title: "Prof", LastName: "Sekgobela", Work_Dept: "CSIT", Contacts: "+27601347654", Email: "mmsekgobela@swave.smu.ac.za" },
        "123232023": { Title: "Dr", LastName: "Selepe", Work_Dept: "Physics", Contacts: "+27789987654", Email: "zselepe@swave.smu.ac.za" },
        "167892008": { Title: "Mr", LastName: "Khambule", Work_Dept: "Nursing", Contacts: "+27789987654", Email: "NKhambule@swave.smu.ac.za" },
        "116572003": { Title: "Mrs", LastName: "Nkuna", Work_Dept: "Security", Contacts: "+27601347654", Email: "BMNkuna@swave.smu.ac.za" },
        "199652000": { Title: "Mrs", LastName: "Nkwanazana", Work_Dept: "E-Learning", Contacts: "+27607899654", Email: "BEHNkwanaz@swave.smu.ac.za" },
        "198761999": { Title: "Ms", LastName: "Kekana", Work_Dept: "Administration", Contacts: "+27789990008", Email: "FDKekana@swave.smu.ac.za" },
        "220191999": { Title: "Dr", LastName: "Connie", Work_Dept: "Social services", Contacts: "+27718857654", Email: "MConnie@swave.smu.ac.za" },
        "116112001": { Title: "Prof", LastName: "Matjena", Work_Dept: "Adin", Contacts: "+27673345059", Email: "GSMatjena@swave.smu.ac.za" },
        "140412002": { Title: "Mr", LastName: "Peterson", Work_Dept: "Medicine", Contacts: "+27815409924", Email: "SMPeterson@swave.smu.ac.za" },
        "110212015": { Title: "Mr", LastName: "Van Wyk", Work_Dept: "Transport", Contacts: "+27716466311", Email: "EVanWyk@swave.smu.ac.za" },
        "155592001": { Title: "Mr", LastName: "Munzhedzi", Work_Dept: "Res Manager", Contacts: "+27789987654", Email: "WMunzhedzi@swave.smu.ac.za" },
        "116002002": { Title: "Prof", LastName: "De Beers", Work_Dept: "Security", Contacts: "+2760123454", Email: "BDeBeers@swave.smu.ac.za" },
        "113372023": { Title: "Mrs", LastName: "Chabs", Work_Dept: "Medicine", Contacts: "+27602027699", Email: "MSChabs@swave.smu.ac.za" },
        "18872013": { Title: "Mrs", LastName: "Williams", Work_Dept: "Psychology", Contacts: "+27601009876", Email: "pplwilliams@swave.smu.ac.za" },
        "109082018": { Title: "Dr", LastName: "Kuisi", Work_Dept: "Nursing", Contacts: "+27786654324", Email: "likuisis@swave.smu.ac.za" }
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


    // Function to handle user messages
    function sendMessage() {
        const userMessage = chatbox.value.trim().toLowerCase();
        chatbox.value = "";

        // Check if user input is empty
        if (!userMessage) {
            alert("Please type a message before sending.");
            return;
        }

        // Display user message in the chat
        appendMessage("YOU", userMessage);

        if (userMessage === "hi" || userMessage === "hello") {
            botReply("Hi there! Are you a 'current student' or a 'prospective student'?");
        } else if (userMessage === "current student") {
            botReply("Great! Could you please provide your student number?");
        } else if (students.hasOwnProperty(userMessage)) {
            currentStudent = students[userMessage];
            botReply(`Hello, ${currentStudent.First_Name}! What information are you looking for? Please choose from the following options (Include full stop, i.e. 1.):
        <ul>
            <li>1. Course Information</li>
            <li>2. Residence Information</li>
            <li>3. Financial Information</li>
            <li>4. Departments Contact Information</li>
            <li>5. Additional Contacts</li>
        </ul>`);
        } else if (userMessage === "1.") {
            botReply(`Please choose from the following option (Include full stop, i.e. 1.1.):
        <ul>
            <li>1.1. Course Name</li>
            <li>1.2. Academic Record</li>
        </ul>`);
        } else if (userMessage === "2.") {
            botReply(`Please choose from the following options (Include full stop, i.e. 2.1.):
        <ul>
            <li>2.1. Residence Name</li>
            <li>2.2. Residence Fees</li>
        </ul>`);
        } else if (userMessage === "3.") {
            botReply(`Please choose from the following options (Include full stop, i.e. 3.1.):
        <ul>
            <li>3.1. Academic Fees</li>
            <li>3.2. Residence Fees</li>
            <li>3.3. Outstanding Fees</li>
        </ul>`);
        } else if (userMessage === "4.") {
            botReply(`Please choose from the following options (Include full stop, i.e. 4.1.):
        <ul>
            <li>4.1. Health Care Sciences</li>
            <li>4.2. Medicine</li>
            <li>4.3. Oral Health Sciences</li>
            <li>4.4. Pharmacy</li>
            <li>4.5. Science and Technology</li>
        </ul>`);
        } else if (userMessage === "1.1.") {
            botReply(`Your course is ${currentStudent.Course}`);
        } else if (userMessage === "1.2.") {
            botReply(`Hi there! You can access your Academic record on your student portal under the student enquiry section. 
    <a href='https://lifestudent.smu.ac.za/pls/prodi41/w99pkg.mi_login'>Click this link to access the student portal</a>`);
        } else if (userMessage === "2.1.") {
            botReply(`Your residence is ${currentStudent.Residence}`);
        } else if (userMessage === "2.2.") {
            const studentNumber = Object.keys(students).find(key => students[key] === currentStudent);
            if (studentNumber && fees.hasOwnProperty(studentNumber)) {
                botReply(`Your residence fees are ${fees[studentNumber].res_Fees}`);
            } else {
                botReply("Sorry, I couldn't find residence fee information for you.");
            }
        } else if (userMessage === "3.1.") {
            const studentNumber = Object.keys(students).find(key => students[key] === currentStudent);
            if (studentNumber && fees.hasOwnProperty(studentNumber)) {
                botReply(`Your academic fees are ${fees[studentNumber].academic_Fees}`);
            } else {
                botReply("Sorry, I couldn't find academic fee information for you.");
            }
        } else if (userMessage === "3.2.") {
            const studentNumber = Object.keys(students).find(key => students[key] === currentStudent);
            if (studentNumber && fees.hasOwnProperty(studentNumber)) {
                botReply(`Your residence fees are ${fees[studentNumber].res_Fees}`);
            } else {
                botReply("Sorry, I couldn't find residence fee information for you.");
            }
        } else if (userMessage === "3.3.") {
            const studentNumber = Object.keys(students).find(key => students[key] === currentStudent);
            if (studentNumber && fees.hasOwnProperty(studentNumber)) {
                botReply(`Your outstanding fees are ${fees[studentNumber].Outstanding_fees}`);
            } else {
                botReply("Sorry, I couldn't find outstanding fee information for you.");
            }
        } else if (userMessage === "4.1.") {
            const departmentContacts = contacts["Health Care Sciences"];
            let message = `Here are the contacts for the Health Care Sciences department:<br>`;
            departmentContacts.forEach(contact => {
                message += `Title: ${contact.Title}<br>`;
                message += `Name: ${contact.Name}<br>`;
                message += `Email: ${contact.Email}<br>`;
            });
            botReply(message);
        } else if (userMessage === "4.2.") {
            const departmentContacts = contacts["Medicine"];
            let message = `Here are the contacts for the Medicine department:<br>`;
            departmentContacts.forEach(contact => {
                message += `Title: ${contact.Title}<br>`;
                message += `Name: ${contact.Name}<br>`;
                message += `Email: ${contact.Email}<br>`;
            });
            botReply(message);
        } else if (userMessage === "4.3.") {
            const departmentContacts = contacts["Oral Health Sciences"];
            let message = `Here are the contacts for the Oral Health Sciences department:<br>`;
            departmentContacts.forEach(contact => {
                message += `Title: ${contact.Title}<br>`;
                message += `Name: ${contact.Name}<br>`;
                message += `Email: ${contact.Email}<br>`;
            });
            botReply(message);
        } else if (userMessage === "4.4.") {
            const departmentContacts = contacts["Pharmacy"];
            let message = `Here are the contacts for the Pharmacy department:<br>`;
            departmentContacts.forEach(contact => {
                message += `Title: ${contact.Title}<br>`;
                message += `Name: ${contact.Name}<br>`;
                message += `Email: ${contact.Email}<br>`;
            });
            botReply(message);
        } else if (userMessage === "4.5.") {
            const departmentContacts = contacts["Science and Technology"];
            let message = `Here are the contacts for the Science and Technology department:<br>`;
            departmentContacts.forEach(contact => {
                message += `Title: ${contact.Title}<br>`;
                message += `Name: ${contact.Name}<br>`;
                message += `Email: ${contact.Email}<br>`;
            });
            botReply(message);
        } else if (userMessage === "5.") {
            botReply(`Additional Contacts:
            <ul>
                <li>Emergency Contacts:
                    <ul>
                        <li>Title: Ambulance</li>
                        <li>Name: Mr E. Sephoka</li>
                        <li>Contacts: +27 79 417 9546/6278</li>
                        <li>Title: Clinic</li>
                        <li>Name: Mrs M. Maake</li>
                        <li>Contacts: +27 12 521 5735</li>
                        <li>Title: Social Worker</li>
                        <li>Name: Ms A. Kgatle</li>
                        <li>Location: CP Building, 5th Floor, Room: S531</li>
                    </ul>
                </li>
                <li>Other Contacts:
                    <ul>
                        <li>Title: Security</li>
                        <li>Name: Mrs Nkuna</li>
                        <li>Contacts: +27 60 134 7654</li>
                        <li>Title: E-Learning</li>
                        <li>Name: Mrs Nkwanazana</li>
                        <li>Contacts: +27 60 789 9654</li>
                        <li>Title: Administration</li>
                        <li>Name: Ms Kekana</li>
                        <li>Contacts: +27 78 999 0008</li>
                        <li>Title: Social Services</li>
                        <li>Name: Dr Connie</li>
                        <li>Contacts: +27 71 885 7654</li>
                        <li>Title: Transport</li>
                        <li>Name: Mr Van Wyk</li>
                        <li>Contacts: +27 71 646 6311</li>
                        <li>Title: CSIT</li>
                        <li>Name: Prof Sekgobela</li>
                        <li>Contacts: +27 60 134 7654</li>
                    </ul>
                </li>
            </ul>`);
        }
    }


    // Function to generate bot's reply
    function botReply(message) {
        appendMessage("SmooBot", message);
    }


    // Function to append a message to the chat
    function appendMessage(sender, message) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message");
        messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
        chatArea.appendChild(messageElement);
        chatArea.scrollTop = chatArea.scrollHeight;
    }
});