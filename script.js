window.onload = function() {
var about= document.getElementById("aboutMeShort");
about.innerHTML+="Motivated agile developer who is passionate about <b>well documented code, collaboration</b> and <b>reusability of code</b> ";
var aboutLong=document.getElementById("aboutMeLong");
aboutLong.innerHTML+="I've always sought out opportunities and challenges that are meaningful to me. Although I have been involved in many different kind of projects over the years- From being the President for the local Chapter of the student organization AIESEC, to delivering personality development sessions to underprivileged children and organizing social events - I have always engaged my passion to help others. <br> <br> As a web developer, I enjoy working on both front-end code as well as back-end code, and coordinating with my team to build the best possible code that we can. I also have a knack for learning new technologies- from Vue.js to Android App Development using Kotlin- and building on my knowledge of these. This is why I am excited to make a big impact at a growing company";


var expData=[{
    num:1,
    name:"Infosys",
    role:"Senior Systems Engineer",
    period:"08/2018 - Present",
    desc:"Infosys is a global leader in next-generation digital services and consulting.",
    title1:"Application Development and Maintenance(ADM)",
    roles:["Working in an agile team to develop and maintain a logistic management enterprise application for a retail organization",
        "Developing core features across entire stack(20k+ lines of code)",
        "Lead the application migration from http to https",
        "Optimising the application monitoring to improve the service availability of application",
        "Developing POC's for demonstration of solution approach for a proablem",
        "Tools: Java, J2EE, Android //Kafka // Vue.JS // Sonarqube // Hibernate// Websphere"],
    accomplishments:["Stabilized the application from ~50 incidents per month to <5 incidents per month",
                    "Delivered 50 releases in Production over 2.5 years of service, with no defects"
                ]
}];

var container= document.getElementById("experienceCards");
expData.forEach((result, idx)=>{
    
    var rolesList="";
    var content = `
    <div class="card">
    <div class="card-header"  id="heading-${idx}">
    <p id="name">${result.name}</p> 
    </div>

    <div >
      <div class="card-body id="heading-${idx}">
      <p id="period">${result.period}</p> <p id="role">${result.role}</p>
      
        <p>${result.desc}</p>
        <h5>${result.title1}</h5>
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


function makeUl(list){
        var myList=""
        list.forEach(function(item){
            myList+="<li>"+item+"</li>";
        });         
        
         return myList;    
}

}