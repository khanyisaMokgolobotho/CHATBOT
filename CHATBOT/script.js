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
        "202009934":  {First_Name: "Khanyisa", Last_Name: "Mokgolobotho", Course: "Dietics", Residence: "2A", OTPs: "123456"},
        "201908966": {First_Name: "Lenty", Last_Name: "Machete", Course: "BDS", Residence: "Drei lillies", OTPs: "234567"},
        "201955721": {First_Name: "Relinde", Last_Name: "Mlangeni",Course: "BSc-Mathematics",Residence: "4B", OTPs: "345678"},
        "201989046": {First_Name: "Hope", Last_Name: "Letlotlo", Course: "BSc-Physics", Residence: "MadeiraIsles", OTPs: "456789"},
        "201989059": {First_Name: "Lihle", Last_Name: "Sekgobela", Course: "MBCHB", Residence: "Heights", OTPs: "567890"},
        "201999254": {First_Name: "Thato", Last_Name: "Letlalo", Course: "BSc-Mathematics", Residence: "5A", OTPs: "678901"},
        "202004546": {First_Name: "Blessing", Last_Name: "Mongwe", Course: "BSc-Life Science", Residence: "Madeira Isles", OTPs: "789012"},
        "202008966": {First_Name: "Glen", Last_Name: "Nkadimeng", Course: "BSc-Physics", Residence: "Madeira Isles", OTPs: "890123"},
        "202010307": {First_Name: "Masechaba", Last_Name: "Mofokeng", Course: "MBCHB", Residence: "South Point", OTPs: "901234"},
        "202012345": {First_Name: "Lethabo", Last_Name: "Rangata", Course: "Radiography", Residence: "The Heights", OTPs: "012345"},
        "202012545": {First_Name: "Vince", Last_Name: "Letsoalo", Course: "BSc-Life Sciences", Residence: "1D", OTPs: "123456"},
        "202077896": {First_Name: "Bongiwe", Last_Name: "Masoa", Course: "Dentistry", Residence: "Arebeng", OTPs: "234567"},
        "202123066": {First_Name: "Shiner", Last_Name: "Dube", Course: "SpeechnAudio", Residence: "5B", OTPs: "345678"},
        "202181044": {First_Name: "DAN", Last_Name: "Khumalo", Course: "BSC-Chemistry", Residence: "1A", OTPs: "456789"},
        "202189886": {First_Name: "Njabulo", Last_Name: "Mantiti", Course: "BSc-Audio", Residence: "Heights", OTPs: "567890"}
    };

    const contacts = {
        "Health Care Sciences": [
            { Title: "Dean", Name: "Prof D. Maleka", Email: "dean.healthcaresciences@smu.ac.za" },
            { Title: "Secretary", Name: "Ms C. Serepong", Email: "charmaineserepong@smu.ac.za" }
        ],
        "Oral Health Sciences": [
            { Title: "Dean", Name: "Prof D. Mawela", Email: "dean.oralhealthsciences@smu.ac.za" },
            { Title: "Secretary", Name: "Ms W. Mambana", Email: "winilemambana@smu.ac.za" }
        ],
        "Medicine": [
            { Title: "Dean", Name: "Prof N. Mafolo", Email: "dean.medicine@smu.ac.za" },
            { Title: "Secretary", Name: "Ms R. Mphahlele", Email: "raisibemphahlele@smu.ac.za" }
        ],
        "Pharmacy": [
            { Title: "Dean", Name: "Prof P. Demana", Email: "dean.pharmacy@smu.ac.za" },
            { Title: "Secretary", Name: "Ms S. Mahlangu", Email: "simangelemahlangu@smu.ac.za" }
        ],
        "Science and Technology": [
            { Title: "Dean", Name: "Prof L. Obi", Email: "dean.sciencetechnology@smu.ac.za" },
            { Title: "Secretary", Name: "Ms P. Zulu", Email: "phumzilezulu@smu.ac.za" }
        ],
        "Emergency": [
            { Title: "Ambulance", Name: "Mr E. Sephoka", Contacts: "+27 79 417 9546/6278" },
            { Title: "Clinic", Name: "Mrs M. Maake", Contacts: "+27 12 521 5735" },
            { Title: "Social Worker", Name: "Ms A. Kgatle", Location: "CP Building, 5th Floor, Room: S531" }
        ]
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
            botReply("Hi there! Are you a 'C' for current student or 'P' for prospective student?");
            // Set a flag to indicate that we are waiting for the user to choose 'C' or 'P'
            waitingForStudentType = true;
        } else if (waitingForStudentType) {
            if (userMessage === "c") {
                botReply("Great! Could you please provide your student number?");
                waitingForStudentType = false; // Reset the flag
            }else if (userMessage === "p") {
                // Provide options for prospective students
                botReply("Great! How can we assist you as a prospective student?");
                botReply("Please choose from the following options (Include full stop, i.e., 1.):\n<ul>\
                <li>1. Programs and Courses Offered</li>\
                <li>2. Admission Requirements</li>\
                <li>3. Application Process</li>\
                <li>4. Scholarships and Financial Aid</li>\
                <li>5. Contact Admissions</li>\
                <li>Type M to go Back to Main Menu</li>\
            </ul>");
                waitingForStudentType = false; // Reset the flag
            } else {
                botReply("Please enter 'C' for current student or 'P' for prospective student.");
            }
        } else if (userMessage === "1.") {
            botReply(`Please choose from the following options (Include full stop, i.e. 1.1.):
    <ul>\
        <li>1.1. Undergraduate Programmes</li>\
        <li>1.2. Postgraduate Programmes</li>\
        <li>1.3. Masters and Doctoral Programmes</li>\
        <li>Type M to go Back to Main Menu</li>\
    </ul>`);
        } else if (userMessage.toLowerCase() === "m") {
            botReply("Please choose from the following options (Include full stop, i.e., 1.):\n<ul>\
                <li>1. Programs and Courses Offered</li>\
                <li>2. Admission Requirements</li>\
                <li>3. Application Process</li>\
                <li>4. Scholarships and Financial Aid</li>\
                <li>5. Contact Admissions</li>\
                <li>Type M to go Back to Main Menu</li>\
            </ul>");
        } else if (userMessage === "1.1.") {
            botReply(`Please choose from the following options (Include full stop, i.e. 1.1.1.):
        <ul>
            <li>1.1.1. School of Medicine Undergraduate Programmes</li>
            <li>1.1.2. School of Oral Health Undergraduate Programmes</li>
            <li>1.1.3. School of Science and Technology Undergraduate Programmes</li>
            <li>1.1.4. School of Pharmacy Undergraduate Programmes</li>
            <li>1.1.5. School of Health Care Sciences Undergraduate Programmes</li>
            <li>Type M to go Back to Main Menu</li>
        </ul>`);
        } else if (userMessage === "1.2.") {
            botReply(`Please choose from the following options (Include full stop, i.e. 1.2.1.):
        <ul>
            <li>1.2.1. School of Medicine Postgraduate Programmes</li>
            <li>1.2.2. School of Oral Health Postgraduate Programmes</li>
            <li>1.2.3. School of Science and Technology Postgraduate Programmes</li>
            <li>1.2.4. School of Pharmacy Postgraduate Programmes</li>
            <li>1.2.5. School of Health Care Sciences Postgraduate Programmes</li>
            <li>Type M to go Back to Main Menu</li>
        </ul>`);
        } else if (userMessage === "1.3.") {
            botReply(`Please choose from the following options (Include full stop, i.e. 1.3.1.):
        <ul>
            <li>1.3.1. School of Medicine Postgraduate Programmes</li>
            <li>1.3.2. School of Oral Health Postgraduate Programmes</li>
            <li>1.3.3. School of Science and Technology Postgraduate Programmes</li>
            <li>1.3.4. School of Pharmacy Postgraduate Programmes</li>
            <li>1.3.5. School of Health Care Sciences Postgraduate Programmes</li>
            <li>Type M to go Back to Main Menu</li>
        </ul>`);
        } else if (userMessage === "1.1.1.") {
            botReply(`Here are the School of Medicine Undergraduate Programmes:
    <ul>
        <li>MBChB (Bachelor of Medicine and Bachelor of Surgery – BMC01)</li>
        <li>BRad (Diagn) (Bachelor of Diagnostic Radiography – BDR01)</li>
        <li>MBChB (ECP) (Bachelor of Medicine and Bachelor of Surgery (Extended Degree Programme) – BMCA01)</li>
        <li>Higher Certificate in Emergency Medical Care (CEMC01)</li>
        <li>Diploma in Emergency Medical Care (DEMC01)</li>
        <li>Type M to go Back to Main Menu</li>
    </ul>`);
        } else if (userMessage === "1.1.2.") {
            botReply(`Here are the School of Oral Health Undergraduate Programmes:
    <ul>
        <li>Bachelor of Dental Surgery – BDS</li>
        <li>Bachelor of Dental Therapy – BDentTher</li>
        <li>Bachelor of Oral Hygiene – BOralHyg</li>
        <li>Type M to go Back to Main Menu</li>
    </ul>`);
        } else if (userMessage === "1.1.3.") {
            botReply(`Here are the School of Science and Technology Undergraduate Programmes:
    <ul>
        <li>Bachelor of Science (Extended Curriculum Programme):
            <ul>
                <li>BSc (Life Sciences – BSCK01)</li>
                <li>BSc (Mathematical Sciences – BSCL01)</li>
                <li>BSc (Physical Sciences – BSCM01)</li>
                <li>Type M to go Back to Main Menu</li>
            </ul>
        </li>
        <li>Bachelor of Science:
            <ul>
                <li>BSc (Life Sciences – BSCG01)</li>
                <li>BSc (Mathematical Sciences – BSCH01)</li>
                <li>BSc (Physical Sciences – BSCI01)</li>
                <li>BSc (Occupational & Environmental Health Sciences – BSCJ01)</li>
               
            </ul>
        </li>
        <li>Type M to go Back to Main Menu</li>
    </ul>`);
        } else if (userMessage === "1.1.4.") {
            botReply(`Here are the School of Pharmacy Undergraduate Programmes:
    <ul>
        <li>DISPENSING COURSE FOR HEALTHCARE PROFESSIONALS 2023 - Short Course</li>
        <li>HIGHER CERTIFICATE in VACCINOLOGY</li>
        <li>National Certificate: Pharmacist Assistance</li>
        <li>BPHARM PROGRAMME (BPHA01)</li>
        <li>Type M to go Back to Main Menu</li>
    </ul>`);
        } else if (userMessage === "1.1.5.") {
            botReply(`Here are the School of Health Care Sciences Undergraduate Programmes:
    <ul>
        <li>BSc (Dietetics) Degree Programme (BDIA01)</li>
        <li>Bachelor Nursing and Midwifery (BNAM)</li>
        <li>Bachelor Nursing Sciences and Arts PROGRAMME (BNSA01) (phasing out)</li>
        <li>Bachelor of Occupational Therapy Degree Programme (BOTA01)</li>
        <li>Bachelor of Speech Language Pathology and Audiology Degree Programme (BSA01)</li>
        <li>Type M to go Back to Main Menu</li>
    </ul>`);
        } else if (userMessage === "1.2.1.") {
            botReply(`Here are the School of Medicine Postgraduate Programmes:
    <ul>
        <li>BSc (MS) (HONS) DEGREE PROGRAMME</li>
        <li>BSc (HONS) (MS) ANATOMICAL PATHOLOGY DEGREE PROGRAMME (HMSA01)</li>
        <li>BSc (HONS) (MS) ANATOMICAL PATHOLOGY DEGREE PROGRAMME (HMSA01)</li>
        <li>BSc (HONS) (MS) MEDICAL BIOCHEMISTRY/CHEMICAL PATHOLOGY (HMSD01)</li>
        <li>BSc HONS (MS) HAEMATOLOGICAL PATHOLOGY DEGREE PROGRAMME (HMSF01)</li>
        <li>BSC HONS (MS) (MEDICAL PHYSICS) DEGREE PROGRAMME (HMSC01)</li>
        <li>BSc HONS (MS) MICROBIOLOGY DEGREE PROGRAMME (HMSG01)</li>
        <li>BSc (MS) (HONS) PHARMACOLOGY (HMSI01)</li>
        <li>BSc (HONS) (MS) PHYSIOLOGY DEGREE PROGRAMME (HMSK01)</li>
        <li>BSc HONS (MS) PSYCHOLOGY DEGREE PROGRAMME (HSCS01)</li>
        <li>BSC HONS MEDICAL SCIENCES IN ANATOMY (HMS01)</li>
        <li>BSc (MED) (HONS) IN MEDICAL VIROLOGY DEGREE PROGRAMME (HMSH01)</li>
        <li>Type M to go Back to Main Menu</li>
    </ul>`);
        } else if (userMessage === "1.2.2.") {
            botReply(`Here are the School of Oral Health Postgraduate Programmes:
    <ul>
        <li>Postgraduate Diploma in Dentistry (PG Dip in Dent)</li>
        <li>Bachelor of Science Honours in Dental Science (BSc (Hons)(Dent Sc))</li>
        <li>Type M to go Back to Main Menu</li>
    </ul>`);
        } else if (userMessage === "1.2.3.") {
            botReply(`Here are the School of Science and Technology Postgraduate Programmes:
    <ul>
        <li>BSc Honours (BIOLOGY – HSCR01)</li>
        <li>BSc Honours (BIOCHEMISTRY – HSCP01)</li>
        <li>BSc Honours (APPLIED MATHEMATICS – HSCT01)</li>
        <li>BSc Honours (CHEMISTRY – HSCN01)</li>
        <li>BSc Honours (COMPUTER SCIENCES – HONCIT)</li>
        <li>BSc Honours (MATHEMATICS – HSCU01)</li>
        <li>BSc Honours (PHYSICS – HSCO01)</li>
        <li>BSc Honours (STATISTICS – HSCV01)</li>
        <li>Type M to go Back to Main Menu</li>
    </ul>`);
        } else if (userMessage === "1.2.4.") {
            botReply(`Here are the School of Pharmacy Postgraduate Programmes:
    <ul>
        <li>PG DIP in HOSPITAL PHARMACY MANAGEMENT (100)</li>
        <li>Type M to go Back to Main Menu</li>
    </ul>`);
        } else if (userMessage === "1.2.5.") {
            botReply(`Here are the School of Health Care Science Postgraduate Programmes:
    <ul>
        <li>Postgraduate Diploma Public Health (PPH01)</li>
        <li>Type M to go Back to Main Menu</li>
    </ul>`);
        } else if (userMessage === "1.3.1.") {
            botReply(`Here are the School of Medicine Masters and Doctoral Programmes:
    <ul>
        <li>MASTERS DEGREE PROGRAMMES
            <ul>
                <li>M Med (Anaesthesiology) Degree Programme (MMDB01)</li>
                <li>M Med (Anatomical Pathology) Degree Programme (026)</li>
                <li>M Med (Chemical Pathology) Degree Programme (MMDJ01)</li>
                <li>M Med (Dermatology) Degree Programme (MMDP01)</li>
                <li>M Med (Family Medicine) Degree Programme (MMF01)</li>
                <li>M Med (Forensic Pathology) Degree Programme (MMDI01)</li>
                <li>M Med (Haematological Pathology) Degree Programme MMDGO1</li>
                <li>M Med (Internal Medicine) Degree Programme (MMDQ01)</li>
                <li>M Med (Medical Microbiology) Degree Programme (MMDK01)</li>
                <li>M Med (Neurology) Degree Programme (MMG01)</li>
                <li>M Med (Neur Surg) Degree Programme (MMEA01)</li>
                <li>M Med (Nuclear Medicine) Degree Programme (MMDM01)</li>
                <li>M Med (Obstetrics & Gynaecology) Degree Programme (MMDC01)</li>
                <li>M Med (Occupational Medicine) Degree Programme (MMDS01)</li>
                <li>M Med (Ophthalmology) Degree Programme (MMDD01)</li>
                <li>M Med (Orthopaedics) Degree Programme (MMED01)</li>
                <li>M Med (Otorhinolaryngology) Degree Programme (MMDE01)</li>
                <li>M Med (Paediatrics & Child Health) Degree Programme (MMDO01)</li>
                <li>M Med (Plastic Surgery) Degree Programme (MMEC01)</li>
                <li>M Med (Psychiatry) Degree Programme (MMDR01)</li>
                <li>M Med (Public Health Medicine) Degree Programme (MMDF01)</li>
                <li>M Med (Diagnostic Radiology) Degree Programme (MMDL01)</li>
                <li>M Med (Surgery) (General) Degree Programme (MMEE01)</li>
                <li>M Med (Cardio-Thoracic Surgery) Degree Programme (MMEF01)</li>
                <li>M Med (Urology) Degree Programme (MMEB01)</li>
                <li>M Med (Virology) Degree Programme (MMDN01)</li>
                <li>MSc (Clinical Psychology) Degree Programme (MCP01)</li>
                <li>MSc (Med) Degree Programme (MSM01)</li>
                <li>MSc (Med) In Physiology (MSM01)</li>
        </ul>
    </li>
    <li>
        <ul>
            <li>PhD DEGREE PROGRAMME</li>
            <li>PHD IN PHYSIOLOGY (DHMA01)</li>
            <li>DSc (Med) DEGREE PROGRAMME</li>
        </ul>
    </li>
        <li>Type M to go Back to Main Menu</li>
</ul>`);
        } else if (userMessage === "1.3.2.") {
            botReply(`Here are the School of Oral Health Masters and Doctoral Programmes:
    <ul>
        <li>Master of Dentistry (M Dent)</li>
        <li>Master of Dental Science (MDS)</li>
        <li>Master of Science in Dentistry (MSc (Dent))</li>
        <li>Doctor of Philosophy (PhD)</li>
        <li>Type M to go Back to Main Menu</li>
    </ul>`);
        } else if (userMessage === "1.3.3.") {
            botReply(`Here are the School of Oral Health Masters and Doctoral Programmes:
    <ul>
           <li>Master of Science Degree (MSc)
                <ul>
                    <li>MSc (Master of Science in Applied Mathematics – MAMA090)</li>
                    <li>MSc (Master of Science in Biochemistry – MBIA090)</li>
                    <li>MSc (Master of Science in Botany – MBOA090)</li>
                    <li>MSc (Master of Science in Chemistry – MCHA090)</li>
                    <li>MSc (Master of Science in Mathematics – MMAA090)</li>
                    <li>MSc (Master of Science in Physics – MPHA090)</li>
                    <li>MSc (Master of Science in Statistics – MSTA090)</li>
                </ul>
           </li>
           
        <li>Doctor of Philosophy (PhD)
            <ul>
                <li>PhD (Doctor of Philosophy in Applied Mathematics – MAMA100)</li>
                <li>PhD (Doctor of Philosophy in Biochemistry – MBIA100)</li>
                <li>PhD (Doctor of Philosophy in Botany – MBOA100)</li>
                <li>PhD (Doctor of Philosophy in Chemistry – MCHA100)</li>
                <li>PhD (Doctor of Philosophy in Mathematics – MMAA100)</li>
                <li>PhD (Doctor of Philosophy in Physics – MPHA100)</li>
                <li>PhD (Doctor of Philosophy in Statistics – MSTA100)</li>
            </ul>
        </li>
        <li>Type M to go Back to Main Menu</li>
    </ul>`);
        } else if (userMessage === "1.3.4.") {
            botReply(`Here are the School of Pharmacy Masters and Doctoral Programmes:
    <ul>
        <li>MASTER OF PHARMACY (MPHARM)</li>
        <li>MASTER OF PHARMACY IN PUBLIC HEALTH PHARMACY AND MANAGEMENT [MPHARM (Public Health Pharmacy and Management)]</li>
        <li>MASTER OF PHARMACY IN RADIOPHARMACY</li>
        <li>PhD DEGREE PROGRAMME</li>
        <li>DPHARM DEGREE PROGRAMME</li>
        <li>Type M to go Back to Main Menu</li>
    </ul>`);
        } else if (userMessage === "1.3.5.") {
            botReply(`Here are the School of Health Care Sciences Masters and Doctoral Programmes:
    <ul>
        <li>MASTER OF NURSING PROGRAMME (MNSG01)</li>
        <li>M OCC THER DEGREE PROGRAMME (MOT01)</li>
        <li>MSc (Dietetics) DEGREE PROGRAMME (MDIA01)</li>
        <li>MSC PHYSIOTHERAPY DEGREE PROGRAMME</li>
        <li>MASTERS IN PUBLIC HEALTH DEGREE PROGRAMMES (MPUA01)</li>
        <li>MASTER IN AUDIOLOGY DEGREE PROGRAMME (MAUD01) / MASTER IN SPEECH-LANGUAGE PATHOLOGY DEGREE PROGRAMME (MSLP01)</li>
        <li>DOCTORAL DEGREE PROGRAMMES (DHMA03)</li>
        <li>Type M to go Back to Main Menu</li>
    </ul>`);
        } else if (userMessage === "2.") {
            botReply(`Please choose from the following options (Include full stop, i.e. 1.1.):
    <ul>\
        <li>2.1. Undergraduate Programmes</li>\
        <li>2.2. Postgraduate Programmes</li>\
        <li>2.3. Masters and Doctoral Programmes</li>\
        <li>Type M to go Back to Main Menu</li>\
    </ul>`);
        } else if (userMessage === "2.1.") {
            botReply(`Please choose a school for more information:
    <ul>
        <li><a href='https://www.smu.ac.za/schools/medicine/school-of-medicine-undergraduate-programmes/'>School of Medicine</a></li>
        <li><a href='https://www.smu.ac.za/schools/oral-health-sciences/school-of-oral-health-academic-programmes/'>School of Oral Health</a></li>
        <li><a href='https://www.smu.ac.za/schools/science-and-technology/school-of-science-and-technology-undergraduate-programmes/'>School of Science and Technology</a></li>
        <li><a href='https://www.smu.ac.za/schools/pharmacy/school-of-pharmacy-academic-programmes/'>School of Pharmacy</a></li>
        <li><a href='https://www.smu.ac.za/schools/health-care-sciences/school-of-health-care-sciences-academic-programmes/'>School of Health Care Sciences</a></li>
        <li>Type M to go Back to Main Menu</li>
    </ul>`);
        } else if (userMessage === "2.2.") {
            botReply(`Please choose a school for more information:
    <ul>
        <li><a href='https://www.smu.ac.za/schools/medicine/school-of-medicine-postgraduate-programmes/'>School of Medicine</a></li>
        <li><a href='https://www.smu.ac.za/schools/oral-health-sciences/school-of-oral-health-postgraduate-programmes/'>School of Oral Health</a></li>
        <li><a href='https://www.smu.ac.za/schools/science-and-technology/school-of-science-and-technology-postgraduate-programmes/'>School of Science and Technology</a></li>
        <li><a href='https://www.smu.ac.za/schools/pharmacy/school-of-pharmacy-postgraduate-programmes/'>School of Pharmacy</a></li>
        <li><a href='https://www.smu.ac.za/schools/health-care-sciences/school-of-health-care-sciences-postgraduate-programmes/'>School of Health Care Sciences</a></li>
        <li>Type M to go Back to Main Menu</li>
    </ul>`);
        } else if (userMessage === "2.3.") {
            botReply(`Please choose a school for more information:
    <ul>
        <li><a href='https://www.smu.ac.za/schools/medicine/school-of-medicine-masters-and-doctoral-programmes/'>School of Medicine</a></li>
        <li><a href='https://www.smu.ac.za/schools/oral-health-sciences/school-of-oral-health-masters-and-doctoral-programmes/'>School of Oral Health</a></li>
        <li><a href='https://www.smu.ac.za/schools/science-and-technology/school-of-science-and-technology-masters-and-doctoral-programmes/'>School of Science and Technology</a></li>
        <li><a href='https://www.smu.ac.za/schools/pharmacy/school-of-pharmacy-masters-and-doctoral-programmes/'>School of Pharmacy</a></li>
        <li><a href='https://www.smu.ac.za/schools/health-care-sciences/school-of-health-care-sciences-masters-and-doctoral-programmes/'>School of Health Care Sciences</a></li>
        <li>Type M to go Back to Main Menu</li>
    </ul>`);
        }






        else if (students.hasOwnProperty(userMessage)) {
            currentStudent = students[userMessage];
            botReply("Please enter the 6-digit OTP sent to your phone number.");
            // Set a flag to indicate that OTP verification is pending
            waitingForOTP = true;
        } else if (waitingForOTP) {
            // Check if the user entered the correct OTP
            if (userMessage === currentStudent.OTPs) {
                botReply(`Hello, ${currentStudent.First_Name}! What information are you looking for? Please choose from the following options (Include full stop, i.e., 1.):
        \n<ul>
                <li>1. Course Information</li>
                <li>2. Residence Information</li>
                <li>3. Financial Information</li>
                <li>4. Departments Contact Information</li>
                <li>5. Additional Contacts</li>
                <li>6. Registration Information</li>
                <li>7. Student Marketing</li>
                <li>8. Alumni</li>
                <li>9. My Information</li>
                <li>10. Student Administration</li>
                <li>11. If you do not see what you need (Contact: [Contact Information])</li>
        </ul>`);
                waitingForOTP = false; // Reset the flag
            } else {
                botReply("Incorrect OTP. Please enter the correct 6-digit OTP.");
            }
        }  else if (userMessage === "1.") {
            botReply(`Please choose from the following options (Include full stop, i.e. 1.1.):
        <ul>
            <li>1.1. Course Name</li>
            <li>1.2. Academic Record</li>
            <li>1.3. Exam Results</li>
            <li>1.4. Progress Report</li>
            <li>1.5. Timetables</li>
            <li>1.6. Graduation</li>
            <li>1.7. Qualifications Awarded</li>
            <li>1.8. Academic Admission</li>
            <li>Type M to go Back to Main Menu</li>
        </ul>`);
        }
        else if(userMessage.toLowerCase() === "m") {
            botReply(`What information are you looking for? Please choose from the following options (Include full stop, i.e., 1.):
        \n<ul>
                <li>1. Course Information</li>
                <li>2. Residence Information</li>
                <li>3. Financial Information</li>
                <li>4. Departments Contact Information</li>
                <li>5. Additional Contacts</li>
                <li>6. Registration Information</li>
                <li>7. Student Marketing</li>
                <li>8. Alumni</li>
                <li>9. My Information</li>
                <li>10. Student Administration</li>
                <li>11. If you do not see what you need (Contact: [Contact Information])</li>
        </ul>`);
        } else if (userMessage === "2.") {
            botReply(`Please choose from the following options (Include full stop, i.e. 2.1.):
        <ul>
            <li>2.1. Residence Name</li>
            <li>2.2. Residence Fees</li>
            <li>2.3. Bus Schedule</li>
            <li>Type M to go Back to Main Menu</li>
        </ul>`);
        } else if (userMessage === "3.") {
            botReply(`Please choose from the following options (Include full stop, i.e. 3.1.):
        <ul>
            <li>3.1. Academic Fees</li>
            <li>3.2. Residence Fees</li>
            <li>3.3. Outstanding Fees</li>
            <li>Type M to go Back to Main Menu</li>
        </ul>`);
        } else if (userMessage === "4.") {
            botReply(`Please choose from the following options (Include full stop, i.e. 4.1.):
        <ul>
            <li>4.1. Health Care Sciences</li>
            <li>4.2. Medicine</li>
            <li>4.3. Oral Health Sciences</li>
            <li>4.4. Pharmacy</li>
            <li>4.5. Science and Technology</li>
            <li>Type M to go Back to Main Menu</li>
        </ul>`);
        } else if (userMessage === "8.") {
            botReply(`Please choose from the following options (Include full stop, i.e., 8.1.):
        <ul>
            <li>8.1. Alumni Relations Office</li>
            <li>8.2. SMU Alumni Benefits</li>
            <li>8.3. Donors</li>
            <li>8.4. Alumni and Convocation Contact Details</li>
            <li>8.5. Getting Involved</li>
            <li>8.6. Alumni Contact Details Update</li>
            <li>8.7. Subscriptions Sign up</li>
            <li>8.8. Alumni and Convocation Announcements</li>
            <li>Type M to go Back to Main Menu</li>
        </ul>`);
        } else if (userMessage === "1.1.") {
            botReply(`Your course is ${currentStudent.Course}`);
        } else if (userMessage === "1.2.") {
            botReply(`Hi there! You can access your Academic record on your student portal under the student enquiry section. 
    <a href='https://lifestudent.smu.ac.za/pls/prodi41/w99pkg.mi_login'>Click this link to access the student portal</a><br>Type M to go Back to Main Menu`);
        } else if (userMessage === "1.3.") {
            botReply(`You can access your Exam Results on your student portal under the student enquiry section. 
    <a href='https://lifestudent.smu.ac.za/pls/prodi41/w99pkg.mi_login'>Click this link to access the student portal</a><br>Type M to go Back to Main Menu`);
        } else if (userMessage === "1.4.") {
            botReply(`You can access your Progress Report on your student portal under the student enquiry section. 
    <a href='https://lifestudent.smu.ac.za/pls/prodi41/w99pkg.mi_login'>Click this link to access the student portal</a><br>Type M to go Back to Main Menu`);
        } else if (userMessage === "1.5.") {
            botReply(`You can access your Timetables on your student portal under the student enquiry section. 
    <a href='https://lifestudent.smu.ac.za/pls/prodi41/w99pkg.mi_login'>Click this link to access the student portal</a><br>Type M to go Back to Main Menu`);
        } else if (userMessage === "1.6.") {
            botReply(`You can find information about Graduation on your student portal under the student enquiry section. 
    <a href='https://lifestudent.smu.ac.za/pls/prodi41/w99pkg.mi_login'>Click this link to access the student portal</a><br>Type M to go Back to Main Menu`);
        } else if (userMessage === "1.7.") {
            botReply(`You can access information about Qualifications Awarded on your student portal under the student enquiry section. 
    <a href='https://lifestudent.smu.ac.za/pls/prodi41/w99pkg.mi_login'>Click this link to access the student portal</a><br>Type M to go Back to Main Menu`);
        } else if (userMessage === "1.8.") {
            botReply(`For information about Academic Admission, please visit your student portal under the student enquiry section. 
    <a href='https://lifestudent.smu.ac.za/pls/prodi41/w99pkg.mi_login'>Click this link to access the student portal</a><br>Type M to go Back to Main Menu`);
        } else if (userMessage === "2.1.") {
            botReply(`Your residence is ${currentStudent.Residence}`);
        } else if (userMessage === "2.2.") {
            const studentNumber = Object.keys(students).find(key => students[key] === currentStudent);
            if (studentNumber && fees.hasOwnProperty(studentNumber)) {
                botReply(`Your residence fees are ${fees[studentNumber].res_Fees}`);
            } else {
                botReply("Sorry, I couldn't find residence fee information for you.");
            }
        } else if (userMessage === "2.3.") {
            botReply(`You can apply for residence by visiting the following link: 
    <a href='https://lifestudent.smu.ac.za/pls/prodi41/w99pkg.mi_main_menu'>Residence Application</a><br>Type M to go Back to Main Menu`);
        } else if (userMessage === "2.4.") {
            botReply(`You can complete your residence registration by visiting the following link: 
    <a href='https://lifestudent.smu.ac.za/pls/prodi41/w99pkg.mi_main_menu'>Residence Registration</a><br>Type M to go Back to Main Menu`);
        } else if (userMessage === "2.5.") {
            botReply(`Type M to go Back to Main Menu`);
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
            let message = `Here are the contacts for the Health Care Sciences department:<br><ul>`;

            departmentContacts.forEach(contact => {
                message += `<li>Title: ${contact.Title}</li>`;
                message += `<li>Name: ${contact.Name}</li>`;
                message += `<li>Email: ${contact.Email}</li>`;
            });

            message += `</ul>Type M to go Back to Main Menu<br>`;

            botReply(message);
        } else if (userMessage === "4.2.") {
            const departmentContacts = contacts["Medicine"];
            let message = `Here are the contacts for the Medicine department:<br><ul>`;

            departmentContacts.forEach(contact => {
                message += `<li>Title: ${contact.Title}</li>`;
                message += `<li>Name: ${contact.Name}</li>`;
                message += `<li>Email: ${contact.Email}</li>`;
            });

            message += `</ul>Type M to go Back to Main Menu<br>`;

            botReply(message);
        } else if (userMessage === "4.3.") {
            const departmentContacts = contacts["Oral Health Sciences"];
            let message = `Here are the contacts for the Oral Health Sciences department:<br><ul>`;

            departmentContacts.forEach(contact => {
                message += `<li>Title: ${contact.Title}</li>`;
                message += `<li>Name: ${contact.Name}</li>`;
                message += `<li>Email: ${contact.Email}</li>`;
            });

            message += `</ul>Type M to go Back to Main Menu<br>`;

            botReply(message);
        } else if (userMessage === "4.4.") {
            const departmentContacts = contacts["Pharmacy"];
            let message = `Here are the contacts for the Pharmacy department:<br><ul>`;

            departmentContacts.forEach(contact => {
                message += `<li>Title: ${contact.Title}</li>`;
                message += `<li>Name: ${contact.Name}</li>`;
                message += `<li>Email: ${contact.Email}</li>`;
            });

            message += `</ul>Type M to go Back to Main Menu<br>`;

            botReply(message);
        } else if (userMessage === "4.5.") {
            const departmentContacts = contacts["Science and Technology"];
            let message = `Here are the contacts for the Science and Technology department:<br><ul>`;

            departmentContacts.forEach(contact => {
                message += `<li>Title: ${contact.Title}</li>`;
                message += `<li>Name: ${contact.Name}</li>`;
                message += `<li>Email: ${contact.Email}</li>`;
            });

            message += `</ul>Type M to go Back to Main Menu<br>`;

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
                <li>Type M to go Back to Main Menu</li>
            </ul>`);
        } else if (userMessage === "6.") {
            botReply(`Please choose from the following options (Include full stop, i.e. 6.1.):
        <ul>
            <li>6.1. Proof of Registration</li>
            <li>6.2. Proof and Cost</li>
            <li>6.3. Submit Registration</li>
            <li>Type M to go Back to Main Menu</li>
        </ul>`);
        } else if (userMessage === "6.1.") {
            botReply(`You can access the Proof of Registration by visiting the following link: 
    <a href='https://lifestudent.smu.ac.za/pls/prodi41/w99pkg.mi_main_menu' target="_blank">Proof of Registration</a><br>Type M to go Back to Main Menu`);
        } else if (userMessage === "6.2.") {
            botReply(`For information about Proof and Cost, please visit: 
    <a href='https://lifestudent.smu.ac.za/pls/prodi41/w99pkg.mi_main_menu' target="_blank">Proof and Cost</a><br>Type M to go Back to Main Menu`);
        } else if (userMessage === "6.3.") {
            botReply(`To submit your Registration, please follow this link: 
    <a href='https://lifestudent.smu.ac.za/pls/prodi41/w99pkg.mi_main_menu' target="_blank">Submit Registration</a><br>Type M to go Back to Main Menu`);
        } else if (userMessage === "8.1.") {
            botReply(`For inquiries related to Alumni Relations Office, please visit the following link: 
    <a href='https://www.smu.ac.za/alumni-and-convocation/alumni/' target="_blank">Alumni Relations Office</a><br>Type M to go Back to Main Menu`);
        } else if (userMessage === "8.2.") {
            botReply(`Explore the benefits available to SMU alumni by visiting: 
    <a href='https://www.smu.ac.za/alumni-and-convocation/smu-alumni-benefits/' target="_blank">SMU Alumni Benefits</a><br>Type M to go Back to Main Menu`);
        } else if (userMessage === "8.3.") {
            botReply(`If you're interested in making a donation, please check our Donors page: 
    <a href='https://www.smu.ac.za/alumni-and-convocation/donor/' target="_blank">Donors</a><br>Type M to go Back to Main Menu`);
        } else if (userMessage === "8.4.") {
            botReply(`For Alumni and Convocation contact details, please refer to our Contact Us page: 
    <a href='https://www.smu.ac.za/alumni-and-convocation/contact/' target="_blank">Alumni and Convocation Contact Details</a><br>Type M to go Back to Main Menu`);
        } else if (userMessage === "8.5.") {
            botReply(`Learn how you can get involved with the Alumni community by visiting: 
    <a href='https://www.smu.ac.za/alumni-and-convocation/getting-involved/' target="_blank">Getting Involved</a><br>Type M to go Back to Main Menu`);
        } else if (userMessage === "8.6.") {
            botReply(`To update your Alumni contact details, please visit the following link: 
    <a href='https://smu.devman.co.za/devman/web/findme/' target="_blank">Alumni Contact Details Update</a><br>Type M to go Back to Main Menu`);
        } else if (userMessage === "8.7.") {
            botReply(`Sign up for Alumni and Convocation subscriptions to receive announcements and updates: 
    <a href='https://smu.devman.co.za/devman/create/subscriber/' target="_blank">Subscriptions Sign up</a><br>Type M to go Back to Main Menu`);
        } else if (userMessage === "8.8.") {
            botReply(`Stay updated with the latest Alumni and Convocation announcements here: 
    <a href='https://www.smu.ac.za/alumni-and-convocation/alumni-and-convocation-announcements/' target="_blank">Alumni and Convocation Announcements</a><br>Type M to go Back to Main Menu`);
        } else if (userMessage === "9.") {
            // Replace the following placeholders with the actual user information from the 'students' object.
            const studentId = "12345"; // Replace with the user's ID
            const user = students[studentId]; // Assuming 'students' is an object with student information

            if (user) {
                botReply(`Here is your information:
        First Name: ${user.firstName}
        Last Name: ${user.lastName}
        Course: ${user.course}
        Residence: ${user.residence}
        Type M to go Back to Main Menu`);
            } else {
                botReply("User information not found.");
            }
        } else if (userMessage === "9.") {
            // Replace the following placeholders with the actual user information from the 'students' object.
            const studentId = "12345"; // Replace with the user's ID
            const user = students[studentId]; // Assuming 'students' is an object with student information

            if (user) {
                botReply(`Here is your information:
        First Name: ${user.firstName}
        Last Name: ${user.lastName}
        Course: ${user.course}
        Residence: ${user.residence}
        Type M to go Back to Main Menu`);
            } else {
                botReply("User information not found.");
            }
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
