const text = " hellow world i am shivam kachhadiya The great scientist and former President, Dr. APJ Abdul Kalam, wrote in the preface of his autobiography: “Each individual creature on this beautiful planet is created by God to fulfill a particular role.”ATMIYA University bestows wisdom and knowledge upon the learner to recognize this particular role. Established on April 13, 2018, under the Gujarat Private University Act 11, 2018, ATMIYA University emphasizes to train young minds in consonance with the doctrines of higher education and human values. The aim of this University is to spread eternal happiness and to create a happy society in letter and spirit. The motto “सुह्रदं सर्व भूतानम्” (Suhardam Sarva Bhootanam) is an expression of willingness to attain harmony with each creation of the Almighty!His Divine Holiness Hariprasad Swamiji Maharaj, the present spiritual successor of Lord Swaminarayan is the mentor of ATMIYA University. With His blessings, His Divinity P.P.Tyagvallabh Swamiji has envisioned Atmiya University to be a global leader in showing the path to enshrine Jeevan Vidya into every domain area of higher education, in the pursuit of transformative outcomes of education for living life to the fullest. For this, over the years, He has invested His sweat and toil and that of His team, to create state-of-the-art learning facilities and spaces. The ultimate goal is to attain ‘Atmiyata’.";



let index = 0;

function writeText() {
    document.body.innerText = text.slice(0, index);

    index++;

    if (index > text.length) {
        index = 0;
    }
}

setInterval(writeText, 50);