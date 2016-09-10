
var bio = {
    "name" : "William Yuan",
    "role" : "Front End Ninja",
    "contacts" : {
        "mobile" : "(732) 768-8595",
        "email" : "<a href='mailto:williampeiyuan@gmail.com'>me</a>",
        "github" : "<a href='https://github.com/iamwill123' target='_blank'>iamwill123</a>",
        "twitter" : "<a href='https://twitter.com/_wildabeast1' target='_blank'>@</a>_wildabeast1",
        "location" : "Brooklyn NYC"
    },
    "welcomeMessage" : "I’m a full stack web developer passionate about building beautiful and responsive web apps. Over the past 4 years, I’ve been working in the creative field, creating mixed media content related to acrobatics, photography, videography, and music. I am now combining all my skills into creating experiences on the web through web pages and web apps. <br><br> My list of previous digital photography freelance clients range from the Wall street journal, Runner’s World Magazine to 360 Theta VR cameras with Ricoh. When I’m not on the job, I enjoy venturing into different boroughs in NYC through my camera lens. I train acrobatics and calisthenics daily to keep myself mentally and physically fit.",
    "skills" : [
        "Ninja training", "handstanding", "coding", "Peanut Butter Eating", "Semantic HTM5L", "CSS3", "JavaScript", "jQuery", "Ruby on Rails", "Photoshop", "Lightroom", "InDesign", "Premiere", "After-Effects", "Sketch", "Principle"
    ],
    "biopic" : "images/headshotTrans.png",
    headerAndFooter : function() {
        var formattedName = HTMLheaderName.replace("%data%", this.name);
        var formattedRole = HTMLheaderRole.replace("%data%", this.role);

        var formattedMobile = HTMLmobile.replace("%data%", this.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", this.contacts.email);
        var formattedGithub = HTMLgithub.replace("%data%", this.contacts.github);
        var formattedTwitter = HTMLtwitter.replace("%data%", this.contacts.twitter);
        var formattedLocation = HTMLlocation.replace("%data%", this.contacts.location);

        var formattedbioPic = HTMLbioPic.replace("%data%", this.biopic);
        var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);

        // Header info

        $("#header").append(formattedwelcomeMsg);
        $("#header").append(formattedbioPic);

        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);

        $("#topContacts").prepend(formattedLocation);
        $("#topContacts").prepend(formattedTwitter);
        $("#topContacts").prepend(formattedGithub);
        $("#topContacts").prepend(formattedEmail);
        $("#topContacts").prepend(formattedMobile);

        //Footer info
        $("#footerContacts").prepend(formattedTwitter);
        $("#footerContacts").prepend(formattedGithub);
        $("#footerContacts").prepend(formattedEmail);
        $("#footerContacts").prepend(formattedMobile);
    },
    display : function() {
        $("#header").append(HTMLskillsStart);
        this.skills.forEach(function(skill){
            var formattedSkill = HTMLskills.replace("%data%", skill);
            $("#skills").append(formattedSkill);
        });
    }
};

var education = {
    "schools": [
        {
            "name": "New Jersey Institute of Technology",
            "location": "Newark, NJ",
            "degree": "Bachelors of Science",
            "major": "Mechanical Engineering",
            "dates": 2008,
            "url": "njit.edu"
        },
        {
            "name": "University of Manchester",
            "location": "Manchester, UK",
            "degree": "Masters Certificate",
            "major": "Mechanical Engineering",
            "dates": 2012,
            "url": "UMan.edu"
        },
        {
            "name": "General Assembly",
            "location": "New York, NY",
            "degree": "Bootcamps",
            "major": "Programming: Intro to Java through android, Java fundamentals for android bootcamp, and OOP in Java bootcamp.",  //Product Management Bootcamp, Content Marketing workshop, User Experience Design Bootcamp. Add later
            "dates": "2015 - 2016",
            "url": "generalassemb.ly"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front End Nanodegree",
            "school": "Udacity",
            "dates": 2016,
            "url": "www.udacity.com"
        },
        {
            "title": "Full-Stack Web Development Bootcamp",
            "school": "CareerFoundry (CF)",
            "dates": 2016,
            "url": "www.careerfoundry.com"
        },
        {
            "title": "Javascript fundamentals & beyond",
            "school": "Code School",
            "dates": 2016,
            "url": "www.codeschool.com"
        }
    ],
    display : function() {

        $("#education").append(HTMLschoolStart);

        this.schools.forEach(function(school){

            var formattedName = HTMLschoolName.replace("%data%", school.name);
            var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
            $(".education-entry:last").append(formattedName + " " + formattedDegree);

            var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
            $(".education-entry:last").append(formattedDates);

            var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
            $(".education-entry:last").append(formattedLocation);

            var formattedMajor = HTMLschoolMajor.replace("%data%", school.major);
            $(".education-entry:last").append(formattedMajor);
        });

        $("#education").append(HTMLonlineClasses);
        $("#education").append(HTMLonlineStart);

        this.onlineCourses.forEach(function(course){

            var formattedTitle = HTMLonlineTitle.replace("%data%", course.title);
            var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
            $(".online-entry:last").append(formattedTitle + " " + formattedSchool);

            var formattedDates = HTMLonlineDates.replace("%data%", course.dates);
            $(".online-entry:last").append(formattedDates);

            var formattedUrl = HTMLonlineURL.replace("%data%", course.url);
            $(".online-entry:last").append(formattedUrl);

        });
    }
};

var work = {
    "jobs": [
        {
            "employer": "Freelance",
            "title": "Web Developer & Designer",
            "location": "NY, New York",
            "dates": "2015 - present",
            "description": "Freelance web development work with occasional design work as needed during projects. Worked with a UX designer on a custom portfolio build, a photographer on recreating his static imagery into dynamic web content using JavaScript, and teamed up with a UX designer to revamp a boutique publicity and marketing firm website."
        },
        {
            "employer": "General Assembly (GA)",
            "title": "Associate Event Producer & Photographer A/V Team",
            "location": "NY, New York",
            "dates": "2015 -2016",
            "description": "Event producer: I worked across roles assisting multiple program managers, the marketing manager & sales team with logistic & execution of UX / marketing workshops. Provided photography / video work during work shop as needed. Client debriefs and feedback processing for multiple programs (i.e. GE, AXA, Adidas, FCB health, etc). Performance based iteration of next UX workshop based on my client feedback themes. GA: Worked in house at GA's A/V studio to provide headshots for all graduating students and staff of GA. GA event photography: providing digital content for GA’s social media platforms and internal newsletters."
        },
        {
            "employer": "GC photobooth",
            "title": "Photobooth Photographer / Event Photographer",
            "location": "NY, New York",
            "dates": "2013 - 2015",
            "description": "Lead person in GC NYC, Specialising in corporate, wedding, and fundraising events. Everything from transporting equipment, setup, operations and break down. Social media content creation for clients. [ www.gcphotobooth.com ]"
        },
        {
            "employer": "United States Environmental Protection Agency (USEPA)",
            "title": "Lead Mechanical Engineer",
            "location": "Edison, New Jersey",
            "dates": "2009- 2011",
            "description": "Project Management, team lead in facilities sustainability projects. AutoCAD drawings for HVAC floor plans and 3D solid model rendering. Asbestos Certified inspector. Implementations of renewable projects in New Jersey / New York government owned USEPA facilities."
        }
    ],
    display : function() {

        $("#workExperience").append(HTMLworkStart);

        this.jobs.forEach(function(job) {

            var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            $(".work-entry:last").append(formattedEmployerTitle);

            var formattedworkDates = HTMLworkDates.replace("%data%", job.dates);
            $(".work-entry:last").append(formattedworkDates);

            var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
            $(".work-entry:last").append(formattedDescription);
        });
    }
};

var project = {
    "projects": [
        {
            "title": "Online Portfolio",
            "dates": "2013-2016",
            "description": "My digital Art portfolio",
            "images": ["images/headshot.gif","images/headshot.gif","images/headshot.gif"]
        },
        {
            "title": "Game",
            "dates": "2016",
            "description": "asdasdasdasdsadasd",
            "images": ["images/headshot.gif","images/headshot.gif","images/headshot.gif"]
        },
        {
            "title": "Maps API",
            "dates": "2016",
            "description": "adasdasdaadas",
            "images": ["images/headshot.gif","images/headshot.gif","images/headshot.gif"]
        }
    ],
    display : function() {

        $("#projects").append(HTMLprojectStart);

        this.projects.forEach(function(project) {

            var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
            $(".project-entry:last").append(formattedTitle);

            var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
            $(".project-entry:last").append(formattedDates);

            var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
            $(".project-entry:last").append(formattedDescription);

            if (project.images.length > 0) {
                for (i = 0; i < project.images.length; i++) {
                    var formattedImage = HTMLprojectImage.replace("%data%", project.images[i]);
                    $(".project-entry:last").append(formattedImage);
                }
            }
        });
    }
};

//bio header
bio.headerAndFooter();

//bio skills
bio.display();

//Education
education.display();

//work experience
work.display();

// Encapsulating Functions Project section
project.display();

// Internationalize Name:
function inName(name) {
    //trim() takes out the white spaces in front & back
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}
$("#footerContacts").append(internationalizeButton);

//Google Maps
$("#mapDiv").append(googleMap);


    // To change title using the input box

$('#input').on('change', function () {

    var val, h2;

    val = $('#input').val();

    $('#lets-connect h2').text(val);

    h2 = $('.orange').children('h2');

    h2.text(val);

});

// Below are methods I will be using these later in my project just FYI

    //Removing something from the page
// var articleItems, ul;

// articleItems = $('.article-item');
// ul = articleItems.find('ul');
// ul.remove();

// or
// $('.article-item').find('ul').remove();

    // Building a DOM family tree:
// var family1, family2, bruce, madison, hunter;

// family1 = $('#family1');
// family2 = $('<div id="family2"><h1>Family 2</h1></div>');
// bruce = $('<div id="#bruce"><h2>Bruce</h2></div>');
// madison = $('<div id="#madison"><h2>Madison</h2></div>');
// hunter = $('<div id="#hunter"><h2>Hunter</h2></div>');
// family2.insertAfter(family1); //https://api.jquery.com/insertAfter/
// family2.append(bruce);
// bruce.append(madison);
// bruce.append(hunter);

// Iterating using .each() and .text() http://api.jquery.com/text/

// function numberAdder () {
//     var text, number;

//     text = $(this).text();
//     number = text.length;
//     $(this).text(text + " " + number);
// }

// $('p').each(numberAdder); // adding a number at the end of each paragraph

// $('#my-button').on('click', function() {
//     $(this).remove();
//     $('body').addClass('success');
// });

// Event delegation jQuery
//$( '.container' ).on( 'click', 'article', function() { … });
//in class container, it looks at article to see if it's clicked.
//https://classroom.udacity.com/nanodegrees/nd001/parts/0011345406/modules/296281861575461/lessons/5103579406/concepts/50210784590923

