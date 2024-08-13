var list = document.getElementById("list");
var typing = document.getElementById("typing");

function sendMessage() {
    if (event.keyCode === 13) {
        var elem = event.target;
        var userInput = elem.value.trim().toLowerCase();
        list.innerHTML += "<li class='right-side'>" + userInput + "</li>";
        showTypingIndicator();
        // Greeting 
        if (['hi', 'hy', 'heyy', 'hii', 'hello', 'hey', 'salam', 'assalamualikum'].indexOf(userInput) !== -1) {
            setTimeout(function () {
                list.innerHTML += "<li class='left-side'> Hello, main Smit Registration Chatbot hoon. Aap registration process ke hawale se sawal pooch sakte hain. <br> </li>";
                hideTypingIndicator();
            }, 1500);
            setTimeout(function () {
                list.innerHTML += "<li class='left-side'> 1.saylani ke kon kon se courses hai ?<br>2.how to apply for saylani courses <br>3.who is eligible ? <br>4.campus of saylani welfare trust (karachi)  <br> Main yahi questions ke jawab de sakta hoon, isliye inhi sawalon ko copy paste kar dein. Thank you </li>";
            }, 2000);
        }
        // Courses 
        else if (['saylani welfare trust courses', 'saylani ke courses', '1.saylani ke kon kon se courses hai ?', '1.saylani ke kon kon se courses hai?', 'saylani ke kon kon se courses hai ?', 'saylani ke kon kon se courses hai?','courses'].indexOf(userInput) !== -1) {
            setTimeout(function () {
                list.innerHTML += "<li class='left-side'>Saylani Welfare International Trust is a non-government organization (NGO) focusing primarily on feeding the poor and homeless. It was established in May 1999 and is headquartered at Bahadurabad, Karachi, Pakistan</li>";
                hideTypingIndicator();
            }, 1500);
            setTimeout(function () {
                list.innerHTML += "<li class='left-side'>Saylani provides the following educational courses: <br> 1. Saylani Schooling System <br> 2. Vocational Training <br> 3. Technical Education <br> 4. Islamic Education <br> 5. Account And Finance <br> <br> These courses may contan a maximum Rs 1000 which is mantainance fees (you will be informed at orientation)  <br> (courses ki details ke liye course ka naam mention karein taka details apko mil sake). <br> <br> (the starting date of courses will be informed on result day or on social media handles) Ya phir agla sawal pooch lein. </li>";
            }, 2000);
        }
        //SAYLANI SCHOOLING SYSTEM 
        else if (['1. saylani schooling system', 'saylani schooling system'].indexOf(userInput) !== -1) {
            setTimeout(function () {
                list.innerHTML += "<li class='left-side'> <h3> Services - Education - Schooling System <h3>Saylani Welfare has been providing primary and secondary education to millions of children. Under this, many children from poor families are becoming an asset to the country through education. Now Saylani has set up a regular academy named Saylani A1 — Mohsin Academy has been set up. Under this academy, free educational facilities will be provided to students in accordance with international standards. </li>";
                hideTypingIndicator();
            }, 1500);
        }
        //VOCATIONAL TRAINING response
        else if (['2. vocational training', '2. Vocational Training', 'vocational training'].indexOf(userInput) !== -1) {
            setTimeout(function () {
                list.innerHTML += "<li class='left-side'> <h3> Services - Education - Vocational Training - Motor Bike Mechanic Training <h3> Motor Bike Mechanic Training Saylani Welfare is teaching people not only to eat fish but also to catch fish. For this purpose, the organization is training unskilled people in various fields so that they can stand on their own two feet and arrange better employment for themselves. For the same purpose, the institute has set up a Crown & Saylani Motorbike Training & Workshop where the less educated people are being imparted courses of Motorbike Mechanic for the sake of Allah and after completion of these courses, employment will be provided to the successful students. </li>";
                hideTypingIndicator();
            }, 1500);
            setTimeout(function () {
                list.innerHTML += "<li class='left-side'> <h3>Services - Education - Vocational Training - Textile Training <h3> Program Textile Training Program The organization has also set up a textile training program to make women skilled and increase their employment opportunities, where women are given various courses duration from 20 days to 45 days as per the requirements of the textile industry. After that these women are also provided employment in the famous and well known textile industry of the country. During the course, these women are provided with pick-and-drop facilities, rations and many other items for their families.</li>";
                hideTypingIndicator();
            }, 2000);
        }
        //TECHNICAL EDUCATION 
        else if (['3. technical education', '3. technical education ', 'technical education'].indexOf(userInput) !== -1) {
            setTimeout(function () {
                list.innerHTML += "<li class='left-side'> <h3>Services - Education - Technical Education - SMIT </h3> Saylani Mass IT Today is the age of information technology and we aim to equip our youth with computer programming skills and prepare them for the development of the country. In this regard, our Saylani Mass IT Training Program provides vocational training to more than 75,000 students in Web and Mobile Application Development, CCNA, Graphics Designing, Computer Based Accounting in Karachi, Hyderabad, Faisalabad, Islamabad. Our goal is to develop more than 1 million software developers across the country, which will add about $100 billion annually to Pakistan's economy. </li>";
                hideTypingIndicator();
            }, 1500);
            setTimeout(function () {
                list.innerHTML += "<li class='left-side'> <h3>Services - Education - Technical Education - PIAIC </h3> PIAIC (Presidential Initiative for Artificial Intelligence and Computing) has been introduced by the President of Pakistan, which includes Saylani Welfare International Trust, Pakistan Stock Exchange, and PanaCloud as partners. This program is specially launched for the youth of the country to specialize in the IT field. Courses in Artificial Intelligence, Cloud Computing, Blockchain, Internet of Things, etc. are being conducted in this program. This program is being taught in almost every city of Pakistan. This program comes with online facility so that any student can stand on his or her own feet by availing this advanced technology at home. </li>";
                hideTypingIndicator();
            }, 3000);

        }
        //ISLAMIC EDUCATION 
else if (['4. islamic education', '4. Islamic Education ', 'islamic education'].indexOf(userInput) !== -1) {
    setTimeout(function () {
        list.innerHTML += "<li class='left-side'> <h3>Services - Education - Islamic Education - Online Quran Academy </h3> Online Quran Academy Saylani Welfare is also providing religious education to the children of Muslims. Not only for the Muslims living in Pakistan but also the children of Muslims living all over the world are being taught Quran with Tajweed through online Quran Academy. Through this project, children and the elderly are benefiting from the teachings of the Holy Quran </li>";
        hideTypingIndicator();
    }, 1500);
    setTimeout(function () {
        list.innerHTML += "<li class='left-side'> <h3>Services - Education - Islamic Education - Madarsa-eFaizan-e-Mustafa </h3> Madarsa-e-Faizan-eMustafa Saylani Welfare is providing secular education as well as religious education. For which the institute has set up more than 145 madrassas in which more than 20,000 students are receiving religious education. </li>";
        hideTypingIndicator();
    }, 3000);
}
// account and finance
else if (['5. Account And Finance','5. Account And Finance ' ,'5. account and finance'].indexOf(userInput) !== -1) {
    setTimeout(function () {
        list.innerHTML += "<li class='left-side'> <h3> Services - Education - Schooling System <h3>Saylani Welfare has been providing primary and secondary education to millions of children. Under this, many children from poor families are becoming an asset to the country through education. Now Saylani has set up a regular academy named Saylani A1 — Mohsin Academy has been set up. Under this academy, free educational facilities will be provided to students in accordance with international standards. </li>";
        hideTypingIndicator();
    }, 1500);
}
// eliblity criteria
else if (['eligible', '3.who is eligible ?','who is eligible' ,'3.who is eligible'].indexOf(userInput) !== -1) {
    setTimeout(function () {
        list.innerHTML += "<li class='left-side'> Saylani courses are typically open to individuals of various educational backgrounds and ages. Specific eligibility criteria may vary by course, so it's best to check the requirements listed on their official website or contact Saylani directly for more detailed information </li>";
        hideTypingIndicator();
    }, 1500);
}
// location of saylani welfare trust 
else if (['location','4.campus of saylani welfare trust (karachi)','campus of saylani welfare trust (karachi)'].indexOf(userInput) !== -1) {
    setTimeout(function () {
        var branchInfo = "<li class='left-side'>" +
            "<h3>Saylani Welfare Branches</h3>" +
            "<p>" +
            "Saylani Welfare has several branches across Karachi:<br>" +
            "<ul>" +
            "<li><strong>Head Office:</strong> Plot # A-25 Char Minar Churangi Main Bahadurabad, Karachi, Pakistan. 0311-1729526, 021-111-729-526</li>" +
            "<li><strong>Ghani Chowrangi:</strong> Plot no: E/33 Site Area Ghani chowrangi Near railway phatak. 0311-1729526, 021-111-729-526</li>" +
            "<li><strong>Clifton Branch:</strong> Shop No. 15-16, Perdesi Pride, Old Race Court, Teen Talwar, Karachi. 0311-1729526, 021-111-729-526</li>" +
            "<li><strong>DHA Badar Commercial:</strong> Plot no 35c BADAR Commercial street 10 phase 5 Extension opp bundo khan hotel 0311-1729526, 021-111-729-526</li>" +
            "<li><strong>Garden:</strong> Plot No. 200 near jumman shah mazar garden west kharachi 0311-1729526, 021-111-729-526</li>" +
            "<li><strong>Saddar:</strong> Shop # No 07 Aljadeed centre electronics market near hashmi centre saddar kharachi. 0311-1729526, 021-111-729-526</li>" +
            "</ul>" +
            "For more information about Saylani's branches, visit their <a target='_blank' href='https://www.saylaniwelfare.com/en/contact-us/branches'>More Branches </a>" +
            "</p>"+"</li>";
            hideTypingIndicator();
        list.innerHTML += branchInfo;
    }, 1500);
    
}
        // Handle LOCATED response
        else if (['2.How To Apply for saylani courses', '2.How To Apply for saylani courses ', '2.how to apply for saylani courses', '2.How To Apply for saylani courses', 'apply', 'saylani headoffice'].indexOf(userInput) !== -1) {
            setTimeout(function () {
                list.innerHTML += "<li class='left-side'>To apply for a Saylani course, visit their official website/Social Media page or nearest centre, choose your desired course, fill out the online application form, submit required documents, and wait for confirmation.</li>";
                hideTypingIndicator();
            }, 1500);
            elem.value = "";
        }
        // Handle unrecognized input
        else {
            setTimeout(function () {
                list.innerHTML += "<li class='left-side'> Yeh word meri list mein shamil nahin hai. Jo options diye hain un mein se select karein. Thank you! </li>";
                hideTypingIndicator();
            }, 2000);
        }

        elem.value = "";
    }
}

function showTypingIndicator() {
    typing.style.display = 'block';
}

function hideTypingIndicator() {
    typing.style.display = 'none';
}
