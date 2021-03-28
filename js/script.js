var expData=[{
    num:1,
    name:"Infosys Ltd",
    location:"Jaipur, Rajasthan, India",
    role:"Senior Systems Engineer",
    period:"August 2018 - Present",
    desc:"Infosys is a global leader in next-generation digital services and consulting.",
    title1:"Application Development and Maintenance(ADM)",
    roles:["Working in an agile team to develop and maintain a logistic management enterprise application for a retail organization",
        "Developing core features across entire stack(20k+ lines of code)",
        "Lead the application migration from http to https",
        "Optimizing the application monitoring to improve the service availability of application",
        "Developing POC's for demonstration of solution approach for a problem",
        "Tools: Java, J2EE, Android //Kafka // Vue.JS // Sonarqube // Hibernate// Websphere"],
    accomplishments:["Stabilized the application from ~50 incidents per month to <5 incidents per month",
                    "Delivered 50 releases in Production over 2.5 years of service, with no defects",
                    "Automated quality checks by integrating Sonarqube with Jenkins"
                ]
},
{
    num:2,
    name:"Infosys Ltd",
    location:"Mysuru, Karnataka, India",
    role:"Systems Engineer Trainee",
    period:"February 2018 - July 2018",
    desc:"Infosys is a global leader in next-generation digital services and consulting.",
    title1:"Java Stream Trainee",
    roles:["Learned about technologies like Python, SQL, AngularJS, Hibernate, etc.",
        "Learned to use agile methodology for software development",
        "Built a project in a team of 5 using Angular framework."]
     
},
{
    num:3,
    name:"AIESEC in Ludhiana",
    location:"Ludhiana, Punjab, India",
    role:"Volunteer",
    period:"Feburary 2015 - February 2018",
    desc:"AIESEC is a global platform for young people to develop their leadership potential through international internships and volunteer opportunities.",
    title1:"Roles held",
    roles:["Local Committee President, responsible for overall management of the local chapter, Feb 2017- Feb 2018",
        "Local Committee Vice President Finance, overlooked all the financial responsibilities for the management of local chapter, 2016",
        "Local Committee Vice President iGV, responsible for hosting volunteers from abroad and creating volunteer opportunities in the city, 2015"],
    accomplishments:["Organized various social events like Global Village, Balakalakar, for generating awareness about social issues and Sustainable Development Goals",
                    "Got recognized in the city for the good work done",
                    "Delivered seminars/sessions in various colleges in the city",
                "Conducted interviews for volunteers"]
     
},
{
    num:4,
    name:"Pehchan",
    location:"Ludhiana, Punjab, India",
    role:"Organizer/ Presenter",
    period:"July 2016 - December 2017",
    desc:"A group of 3 college students who wanted to empower under-privileged school children",
    title1:"Organizing Social Events",
    roles:["Delivered personality development sessions to school children in summer camps, 2016 and 2017",
        "Organized soft skills workshops in various Government Schools for the underprivileged children",
        "Organized social events for collecting and distributing gifts for underprivileged children"]
     
}


];


var projects=[
    {   id:1,
        projectTitle:"Used Products Marketplace",
        projectDesc:"Built an app similar to Olx, for buying and selling of used products", 
        features:["Used Angular.JS framework along with Java backend and Hibernate.","First experience working in an Agile team of 6 people"]
           },
    { id:2,
        projectTitle:"Event Management System",
     projectDesc:"Designed and developed a web application for management of college fests, like scheduling of roles, adding activities and enrolment of participants in the activities", 
     features:["College Major Project, created in a team of 2 people", "Used Django framework along with php for backend"]
    },
    {id:3,
    projectTitle:"OCR Financial Management System",
    projectDesc:"Web application in Javascript for scannning bills and adding the expenses from the same into google tracker",
    features:["Used open-source OCR engine 'Tesseract JS' for optical character recognition","Web application written using Html, CSS and Javascript","Used Google sheets API for input into the Sheets"]
    },
    {id:4,
    projectTitle:"Punjabi Speech Assistant- SiRA",
    projectDesc:"Speech assistant in which user could say the command in punjabi to perform some basic functions",
    features:["Built using Node.js framework","Client-side scripting done","Understands 5 basic commands"]}
];


var skills=[
    {
        type:"Back-end",
        technologies:["Java"]},
    {
        type:"HTML",
        technologies:["HTML5"]
    },
    {
        type:"CSS",
        technologies:["CSS3", "Bootstrap"]

    },
    {
        type:"Mobile Development",
        technologies:["Android 10"]
    },
    {
        type:"other",
        technologies:["Git","Kafka","Hibernate","Jenkins","Sonarqube"]
    },
    {
        type:"JavaScript",
        technologies:["JavaScript", "Angular", "Vue","jQuery"]
    }

];



var awards=[
    {
        awardName:"Summit Award - 2018",
        details:"Award for contributing in hosting of various inter DC events in Infosys"
    },
    {
        awardName:"Rising Star of the year award-2019",
        details:"Awarded for exceptional performance in requirement delivery, client communication and incident management for Infosys"
    },
    {
        awardName:"Mahatma Hansraj Trophy for Excellence in Academics",
        details:"Awarded for exceptional performance in academics in school"
    },
];

var education=[
    {
        degreeName:"Bachelors in Technology- Computer Science",
        collegeName:"Guru Nanak Dev Engineering College",
        place:"Ludhiana",
        university:"I.K.G. Punjab Technical University",
        percentile:"76.2 Percent"

    },
    {
        degreeName:"Secondary School(XII)  Non-Medical",
        collegeName:"D.A.V. Public School",
        place:"Ludhiana",
        university:"C.B.S.E.",
        percentile:"87.8 Percent"
    },
    {
        degreeName:"Matriculation",
        collegeName:"D.A.V. Public School",
        place:"Ludhiana",
        university:"C.B.S.E.",
        percentile:"10 CGPA"
    },
]

var contact=[
    {
        contactType:"email",
        contactDetail:"shaminder.singh.sekhon@gmail.com"
    },
    {
        contactType:"Git",
        contactDetail:"https://github.com/shamysekhon"
    },
    {
        contactType:"LinkedIn",
        contactDetail:"https://www.linkedin.com/in/shaminder-singh-sekhon/"
    },
]

window.onload = function() {
var about= document.getElementById("aboutMeShort");
about.innerHTML+="Motivated agile developer who is passionate about <b>well documented code, collaboration</b> and <b>reusability of code</b> ";
var aboutLong=document.getElementById("aboutMeLong");
aboutLong.innerHTML+="I've always sought out opportunities and challenges that are meaningful to me. Although I have been involved in many different kind of projects over the years- From being the President for the local Chapter of the student organization AIESEC, to delivering personality development sessions to underprivileged children and organizing social events - I have always engaged my passion to help others. <br> <br> As a web developer, I enjoy working on both front-end code as well as back-end code, and coordinating with my team to build the best possible code that we can. I also have a knack for learning new technologies- from Vue.js to Android App Development using Kotlin- and building on my knowledge of these. This is why I am excited to make a big impact at a growing company";



var container= document.getElementById("experienceCards");
expData.forEach((result, idx)=>{
    
    var rolesList="";
    var content = `
    <div class="card">
    <div class="card-header"  id="heading-${idx}">
    <p id="name">${result.name}</p>
    <p id="locationDiv">${result.location}</p> 
    </div>

    <div >
      <div class="card-body id="heading-${idx}">
     <table> <tr> <td id="period">${result.period}</td> <td></td>
     <td id="role">${result.role}</td></tr></table>
      
        <i>${result.desc}</i>
        <h4>${result.title1}</h4>
       `;

    rolesList=makeUl(result.roles);
    rolesList="<ul class='role-ul'>"+rolesList+"</ul>";
    content+=rolesList
    if(result.accomplishments!=null){
        content+=`<h4>Accomplishments</h4>`
        var accomplishmentList=  makeUl(result.accomplishments);
        accomplishmentList="<ul class='role-ul'>"+accomplishmentList+"</ul>";
        content+=accomplishmentList;
        }

    content+=`</div>
         </div>
    </div>`
   container.innerHTML+=content;

});  





var projContainer= document.getElementById("projectCards");
projects.forEach(function(result, idx) {
    
    projContainer.innerHTML+=`<div class="projectCard" id="card-${idx}">`+projInfo(result,idx)+`</div>`}, this);

var skillContainer=document.getElementById("skillCards");
skills.forEach(
    function(result,idx){
        skillContainer.innerHTML+=`<div class="skillCard" id="skill-card-${idx}">`+skillInfo(result,idx)+`</div>`
    }, this);

var awardContainer=document.getElementById("awardCards");
awards.forEach(
    function(result,idx){
        awardContainer.innerHTML+=`<div class="awardCard" id="award-card-${idx}">`+awardInfo(result,idx)+`</div>`
    }, this
);

var eduContainer=document.getElementById("eduCards");
education.forEach(
    function(result,idx){
        eduContainer.innerHTML+=`<div class="eduCard" id="edu-card-${idx}">`+eduInfo(result,idx)+`</div>`
    }, this
);

var contactContainer=document.getElementById("contactCards");
contact.forEach(
    function(result,idx){
        contactContainer.innerHTML+=`<div class="contactCard" id="contact-card-${idx}">`+contactInfo(result,idx)+`</div>`
    }, this
)



}


function showFeatures(object){
    var projCard= document.getElementById(object.id).parentElement;
    content=""
    var featuresList="";
    console.log(projCard.id);
    var projContent = `<div >
    <h2>Features</h2>`;

    featuresList=makeUl(projects[projCard.id].features);
    featuresList="<ul class='features-ul'>"+featuresList+"</ul>";
    projContent+=featuresList;
   
    projCard.innerHTML=projContent;
    var goBack=document.createElement("button");
    goBack.innerHTML="Return";
    projCard.appendChild(goBack);
    
    //goBack.onclick=projInfo(projCard.parentElement, projects[projCard.id], projects[projCard.id] );
    goBack.addEventListener("click",
    function(){
    projCard.parentElement.parentElement.innerHTML=projInfo(projects[projCard.id], projCard.id )}, false );
    projContent+=`</div>`;

};


function makeUl(list){
    var myList=""
    list.forEach(function(item){
        myList+="<li>"+item+"</li>";
    });         
    
     return myList;    
};

function projInfo( result, idx){
    
    var content = `
    

    <div class="project-card-div"  id="card-${idx}">

    <p id="name">${result.projectTitle}</p>
    <div class="info" id="${idx}">
    <p >${result.projectDesc}</p>
    <img class="proj-img" src="img/${result.id}.png"><br></br>
    <button id="btn-${idx}" onclick="showFeatures(this)">More info</button> 
    </div></div>
       `;
    
    return content;

};

function skillInfo( result, idx){
    
    var content = `   

    <div class="skill-card-div"  id="skill-card-${idx}">

    <p id="skill-name">${result.type}</p>
    <div class="info" id="${idx}">`;
    
    
    content+="<ul class='skills-ul'>"+makeUl(result.technologies)+"</ul></div></div>";
    
    return content;

};



function awardInfo(result, idx){
    var content = `   

    <div class="award-card-div"  id="award-card-${idx}">

    <p class="award-name">${result.awardName}</p>
    <div class="info" id="${idx}">
    <p class="award-info">${result.details}</p></div></div>`;
    
    return content;

};

function eduInfo(result, idx){
    var content = `   

    <div class="edu-card-div"  id="edu-card-${idx}">

    <p class="edu-name">${result.degreeName}</p>
    <p class="uni-name">${result.university}</p>
    <p class="college-name">${result.collegeName}</p>
    <p class="place">${result.place}</p>
    <p class="percentile">${result.percentile}</p>
   </div>`;
    
    return content;
}

function contactInfo(result, idx){
    var content="";
    if(result.contactType=="email"){
    content = `   

    <div class="contact-card-div"  id="contact-card-${idx}">

    <img class="contact-image"  src="img/${result.contactType}.png" alt="${result.contactType}">
    <a class="contact-detail" style="color:rgb(9, 9, 95)" href="mailto:${result.contactDetail}" target="_blank">${result.contactDetail}</a>
    
   </div>`;
    } else{
       content= `   

        <div class="contact-card-div"  id="contact-card-${idx}">
    
        <img class="contact-image"  src="img/${result.contactType}.png" alt="${result.contactType}">
        <a class="contact-detail" href="${result.contactDetail}" style="color:rgb(9, 9, 95)"target="_blank">${result.contactDetail}</a>
        
       </div>`

    }
    
    return content;
}