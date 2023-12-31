document.getElementById("logo").setAttribute("src","resources/logo.png");
let a = document.getElementById("main");
window.addEventListener('resize', function() {
    var elementToRemove = document.querySelector('.pic'); // Replace with your CSS selector or ID
    
    if (window.innerWidth < 480) {
      // Remove the element from the DOM
      elementToRemove.remove();
      // Or hide the element by setting its display property to 'none'
      // elementToRemove.style.display = 'none';
    }
});
const color = [
    "#D8C0FC",
    "#8DC2F5",
    "#F58D8D",
    "#96E5CC",
    "#FEBA9E",
    "#FFE593",
    "#E6E6E6",
    "#FBFFDC",
    "#DAF5FF",

    "#FFDCDC",
    "#C4DFDF",
];
// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------

// NAVIGATION BAR ------------------------------------------------------------------------------
const navlinks = document.querySelectorAll('.box');
const windowPathName = window.location.pathname;

navlinks.forEach(navLinkEl => {
    navLinkEl.addEventListener('click',()=>{
        document.querySelector('.active')?.classList.remove('active');
        setTimeout(() => {
            navLinkEl.classList.add('active');
        }, 200);
    });
})
// --------------------------------------------------------------------------------------------
    
// DELAY FUNCTION -----------------------------------------------------------------------------
function delay(arg1,arg2){
    setTimeout(arg1,arg2);
}
// --------------------------------------------------------------------------------------------

// MUSIC TOGGLE -------------------------------------------------------------------------------
var audio = new Audio("resources/Jericho.mp3");
function togglePlayPause() {
    if (audio.paused) {
      audio.currentTime = 0;
      audio.play();
    } else {
      audio.pause();
    }
}
// --------------------------------------------------------------------------------------------

// ABOUT ME FUNCTION --------------------------------------------------------------------------
const aboutMe = () =>{
    a.innerHTML = `<div id="aboutMe">
    <div id="hello"><img src='resources/gify.gif' alt='Hello' id='helloGIF'> <span id="Im">, I'm</span></div>
    <div class="name"><p id="first-name">Shreyansh </p><p id="last-name">Saagar</p></div>
    <div class="self-intro"><p>I am a frontend Web Developer and UI-UX designer who strives to create intuitive websites using modern & minimal user experiences. I believe websites are the vibrant gateways to boundless possibilities, where design and functionality converge to create immersive experiences that captivate, inform, and connect people in the digital realm. My expertise in design thinking, combined with my ability to translate ideas into functional and visually appealing websites, makes me a valuable asset. In 2024, I am going to complete my Bachelor's degree in Technology in Computer Sciences.</p>
    <a href="https://drive.google.com/uc?export=download&id=190p9oHfT-0_LcVKju3HnEJlttjsiMw1j">

        <button id="Resume">
            <lord-icon
                src="https://cdn.lordicon.com/nocovwne.json"
                trigger="hover"
                colors="primary:#121331,secondary:#000000"
                stroke="55"
                state="hover-1">
            </lord-icon>
            <p>Resume</p>
        </button>
    </a>
    </div>
    <div class="profiles-box">
        <ul id="profiles">
            <li class="profile">
                <a href="https://github.com/Shreyansh-saagar" target="_blank" title="Github"><ion-icon name="logo-github"></ion-icon></a>
            </li>
            <li class="profile" title="Figma">
                <a href="https://www.figma.com/@susanoo_77" target="_blank"><ion-icon name="logo-figma"></ion-icon></a>
            </li>
            <li class="profile" title="Coding Ninjas">
                <a href="https://www.codingninjas.com/studio/profile/Shreyansh77" target="_blank"><ion-icon name="code-slash-outline"></ion-icon></a>
            </li>
        </ul>
    </div>
    <div class="square" title="Jericho-Inkio">
        <img src="resources/musicimg.jpeg" alt="Extra image">
        <div id="song">
            <button class="play" onclick="togglePlayPause()">
                <lord-icon
                    src="https://cdn.lordicon.com/hciqteio.json"
                    trigger="hover"
                    colors="primary:#121331,secondary:#252525"
                    stroke="55">
                </lord-icon>
            </button>
            <p>Play or Pause</p>
        </div>
    </div>
    <p id="caps">Currently Listening to</p>
</div>`
}
// --------------------------------------------------------------------------------------------

// EDUCATION ----------------------------------------------------------------------------------
const education =() => {
// --------------------------------------------------------------------------------------------
    const institution = [
        "Coding Ninjas",
        "I.K. Gujral Punjab Technical University",
        "Adarsh Vikas Vidyalya",
        "Adelaide Convent School",
    ];
    const paragraph = [
        "Learning FullStack Development",
        "Bachelors of Technology in Computer Science & Engineering",
        "10+2 (CBSE)",
        "10th (CBSE)",
    ];
    const timeline =[
        "2023 - Present",
        "2020 - Present",
        "2019-2020",
        "2016-2017",
    ];
// --------------------------------------------------------------------------------------------
    function generateList(arg1,arg2,arg3){
        let list = "";
        for(let i=0;i< arg1.length; i++){
            list += `<li class="card"> <p> ${arg1[i]} <span> ${arg3[i]} </span> </p>
                        <ul>
                            <li>
                                ${arg2[i]}
                            </li>
                        </ul>
    
                    </li>`
        }
        return list;
    }

    a.innerHTML=`<div id="educ_achie">
                    <ul class="edu_ach">
                        ${generateList(institution,paragraph,timeline)}
                    </ul>
                </div>
                
                `   
}
// --------------------------------------------------------------------------------------------

// ACHIEVEMENTS -------------------------------------------------------------------------------
const achievements = () => {
// --------------------------------------------------------------------------------------------
    const achievementName = [
        "Codekaze-Sept ’23",
        "Founder’s Challenge",
        "The Art of UI event",
        "Smart Hackathon",
        "National Engineering Olympiad",
        "National Soft Tennis",
    ];
    const achievementDetail = [
        "Secured (AIR 606) (College-Specific Rank: 1) (Graduation Year (24 & above) Based Rank: 495) -  (Coding Ninjas)",
        "Secured (AIR 88) - (Coding Ninjas)",
        "Winner (1st position) - (Amritsar Group of Colleges)",
        "Winner (3rd position) - (GeeksforGeeks)",
        "(Round 1: AIR 695 ) (Round 2: AIR 390)",
        "Captained Bihar State Team for 1 years",
    ];
// --------------------------------------------------------------------------------------------
    function generateList(arg1,arg2){
        let list = "";
        for(let i=0;i< arg1.length; i++){
            list += `<li class="card"> <p>${arg1[i]}</p> 
                        <ul>
                            <li>${arg2[i]}</li>
                        </ul>
                    </li>`
        }
        return list;
    }
    a.innerHTML=`<div id="educ_achie">
                    <ul class="edu_ach">
                    ${generateList(achievementName,achievementDetail)}
                    </ul>
                </div>`
}
// --------------------------------------------------------------------------------------------

// CERTIFICATION ------------------------------------------------------------------------------
const certification = () => {
// --------------------------------------------------------------------------------------------
    const certificates = [
    "NPTEL Cloud Computing Certificate",
    "Google Cloud Certificates - Google",
    "Certificate of excellence in FrontEnd Development - Coding Ninja", 
    "Certificate of excellence in C++ - Coding Ninja",
    "HTML,CSS and JAVASCRIPT - Coursera",
    "Machine Learning - Internship Studio (Training + Internship)",
    "User Experience and Interface Design - Linkedin",
    "SQL (Intermediate level) - HackerRank",
    "SQL (Basic level) - HackerRank",
    ];
    const links = [
        "#",
        "https://www.cloudskillsboost.google/public_profiles/78c91478-0ba5-446f-911f-b23edb1ec720",
        "https://certificate.codingninjas.com/view/00a5cd66c67aa9ef",
        "https://certificate.codingninjas.com/view/7785eb5ff0924a98",
        "https://www.coursera.org/account/accomplishments/certificate/8VTEQAT5LNPM",
        "https://www.linkedin.com/posts/shreyansh-saagar_internship-studio-activity-6899628885307195392-LCW8?utm_source=share&utm_medium=member_desktop",
        "https://www.linkedin.com/learning/certificates/b6aa96b7a8da526f4d4083b94e4aef35f029524e2bd90306bbef71be2ff56534",
        "https://www.hackerrank.com/certificates/b3e748c6fff1",
        "https://www.hackerrank.com/certificates/ea67aae5890e",
    ];
// --------------------------------------------------------------------------------------------

    function generateList(arg1,arg2){
        let list = "";
        for(let i=0;i< arg1.length; i++){
            list += `<li class="card">  
                        <a href="${arg2[i]}">${arg1[i]}</a>
                    </li>`
        }
        return list;
    }
    a.innerHTML=`<div id="educ_achie">
                    <ul class="edu_ach">
                        ${generateList(certificates,links)}
                    </ul>
                </div>`
}
// --------------------------------------------------------------------------------------------

// SKILLS -------------------------------------------------------------------------------------
const skills = () => {
// --------------------------------------------------------------------------------------------
    const categories = [
        "Tech Stack",
        "Creative Stack",
        "Software's",
        "Platforms",
        "Soft Skills",
        "Course Work",
    ];
    const TechSkill=[
        "HTML",
        " CSS",
        " JavaScript",
        " PHP",
        " Bootstrap",
        " Tailwind",
        " C++",
        " Machine Learning",
        " SQL",
        " Node.js",
    ];
    const designSkill = [
        "UI-UX",
        " Graphic Designing",
        " 2D-Animation",
        " Digital Painting",
    ];
    const software = [
        "Figma",
        " Adobe Creative Suite (Photoshop, XD, Illustrator, etc.)",
        " MySQL",
        " GitHub",
        " Canva",
        " Dribble",
        " MongoDb",
    ]
    const platforms =[
        "Web",
        " Oracle",
        " Windows",
    ]
    const softSkills = [
        "Leadership",
        " Teamwork",
        " Communication",
        " Adaptability",
        " Event Management",
        " Strategic Planning",
        " Writing",
        " Design Thinking",
    ]

    const coursework = [
        "Object Oriented Programming",
        " Operating Systems",
        " Database Management System",
        " Computer Networking",
        " Cloud Computing",
        " Web Development",
        " Software Project Management",
    ]
    const innerlist = [
        TechSkill,
        designSkill,
        software,
        platforms,
        softSkills,
        coursework,
    ]
    const skillObject = {
        techStack:   ["HTML","CSS","JavaScript","PHP","Bootstrap","Tailwind","C++","Machine Learning","SQL","Big Data",],
        designSkill: ["UI-UX","Graphic Designing","2D-Animation","Digital Painting",],
        software: ["Figma","Adobe Creative Suite (Photoshop, XD, Illustrator, etc.)","MySQL","GitHub","Canva","Dribble",],
        platforms: ["Web","Oracle","Windows","Linux",],
        softskills: ["Leadership","Teamwork","Communication","Adaptability","Event Management","Strategic Planning","Writing","Design Thinking",]
    };
// --------------------------------------------------------------------------------------------

    function generateList(arg1,arg2){
        let list = ""
        for(let i=0;i< arg1.length; i++){
            list += `<li class="card">
                        <p>${arg1[i]}</p>
                          <ul>
                            <li>${arg2[i]}</li>
                          </ul>
                    </li>` 
        }
        return list;
    }
    a.innerHTML=`<div id="educ_achie">
                    <ul class="edu_ach">
                        ${generateList(categories,innerlist)}
                    </ul>
                </div>`
}
// --------------------------------------------------------------------------------------------

// INTERNSHIP + TRAINING ----------------------------------------------------------------------
const intern = () => {
// --------------------------------------------------------------------------------------------
const img =[
    "https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703808000&semt=ais",
    "resources/webdev.jpeg",
    "resources/mlimg.jpeg",
    "resources/graphic.png",
]

const internship = [
    "FreeLance",
    "Coursera",
    "Internship Studio",
    "SahiCollege Mentoring",
]

const internDetail = [
    "Collaborated with a client to conceptualize and execute a visually appealing UI design for their e-commerce application.",
    "Frontend Web Development - 2 Month Industrial Training",
    "Machine Learning Training + Internship",
    "Junior Graphic Designer + Campus Lead",
];

const internTime = [
    "",
    "JUN 2022 - JUL 2022: Remote",
    "NOV 2021 - FEB 2022: Remote",
    "SEP 2021 - OCT 2021: Remote",
];
// --------------------------------------------------------------------------------------------
    
    let list = "";
    for (let i = 0; i < internship.length; i++) {
      let colorIndex = i % color.length;
      let divElement = document.createElement("div");
      divElement.className = "internTrain";
      divElement.style.backgroundColor = color[colorIndex];
  
      divElement.innerHTML = `<div class="image">
                                  <img src="${img[i]}" alt="">
                              </div>
                              <div class="data">
                                  <i>${internTime[i]}</i>
                                  <div class="title-container">
                                      <p class="title-firm">${internship[i]}</p>
                                  </div>
                                  <p class="data-detail">${internDetail[i]}</p>
                              </div>`;
  
      list += divElement.outerHTML;
    }
    a.innerHTML=` <div id="intern" >
                        
                </div> `
    document.getElementById("intern").innerHTML = list;

}
// --------------------------------------------------------------------------------------------


// PROJECTS -----------------------------------------------------------------------------------
const projects = () => {
// --------------------------------------------------------------------------------------------
    const img2 = [
        "resources/carrent.jpeg",
        "resources/portfolio.png",
        "https://weeb-com.vercel.app/Resourcces/logo.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVQNhWC9xFsRoe7ty-Ld4RJv9z6l-23ASINg&usqp=CAU",
        "https://media.istockphoto.com/id/1323505778/vector/librarian-at-library-scene-young-woman-working-at-desk-on-computer-monitor-vector.jpg?s=612x612&w=0&k=20&c=yXhvxp2PrLxmCHd7pSjVIWf417XwKsEr6UKHt-bCtck=",
        "resources/chilz.jpeg",
        "resources/youtube.png",
        "resources/nba.jpeg",
        "resources/contact.jpeg",
        "resources/git.jpeg",
        "resources/beyond.jpeg",
        "resources/meal.png",
        "resources/animax.png",
    ]
    const projectName = [
        "Vroomz.com",
        "Personal Portfolio",
        "Weeb.com",
        "Note Keeper - (using Node.js)",
        "Library Management System",
        "Chillz.com",
        "YouTube Adview Prediction",
        "NBA App UI-UX",
        "Contact App",
        "GitFinder",
        "Beyond Snacks Web UI-UX",
        "Meal-Box",
        "Animax Web UI-UX",
    ];
    const projectDesc = [
        `Utilized React to create a landing page for a dynamic car rental web app, offering a smooth and intuitive user experience and
        functionality.`,
        "Discover a captivating personal portfolio website crafted with HTML, CSS, JavaScript, and jQuery. Explore the showcase of my skills, projects, and achievements. Experience my journey now!",
        `Created a sleek and user-friendly website for anime enthusiasts, featuring dynamic quotes and animations using HTML, Tailwind
        CSS, and JavaScript.`,
        `Note Keeper is a terminal application that allows users to create, read, update, and delete notes using Node.js.`,
        `This project is a web-based application that allows users to manage various aspects of a library, such as books, members and returns.`,
        "Chillz.com is a movie streaming website fetching data from TMDB API. It offers movie details and utilizes HTML, CSS, and JS, with Firebase and Google Sheets for efficient database management.",
        "This machine learning project aims to predict the number of views for a YouTube advertisement by analyzing various factors such as duration, category, and other metadata.",
        "Designed the UI-UX of NBA Store a mobile application for shopping jersey. The design is visually appealing and incredibly user-friendly, making it easier for customers to find what they need.",
        "A contact app developed using Java is a software application designed to manage and organize contacts for individuals. It provides users with a centralized location to store and access contacts.",
        "Gitfnder is a website to search GitHub profiles using username and view their details. This repository holds the code for the site, built using HTML, CSS, and JavaScript, and the GitHub API.",
        "Redesigned the UI of Beyond Snacks Company's website! The new design is not only visually appealing but also incredibly user-friendly.This redesign truly takes the user experience to the next level.",
        "Meal Box is a website created with HTML and CSS that offers delicious vegetarian burgers. It has a modern and clean design that focuses on the implementation of the Glassmorphism effect.",
        "Immerse Yourself in the World of Anime with Animax - the Ultimate Destination for Anime Fans! Experience a User-Friendly Interface and Engaging Red Color Gradient Design on Figma.",
    ];
    const projectLinks = [
        "#",
        "https://shreyansh-saagar.github.io/Shreyansh77/",
        "https://weeb-com-shreyansh-saagar.vercel.app/",
        "https://github.com/Shreyansh-saagar/Note-Keeper-using-Node.js",
        "https://github.com/Shreyansh-saagar/Library-Management-System",
        "https://github.com/Shreyansh-saagar/Chillz.com",
        "https://github.com/Shreyansh-saagar/Machine-Learning/tree/main/Youtube%20Adview%20Prediction",
        "https://www.figma.com/community/file/1221777967713335637",
        "#",
        "https://shreyansh-saagar.github.io/GitFinder/Git/",
        "https://www.figma.com/community/file/1214259841515263138",
        "https://shreyansh-saagar.github.io/Meal-Box/Meal-box/index.html",
        "https://www.figma.com/community/file/1226431272407261759",
    ];
// --------------------------------------------------------------------------------------------

    let list = "";
    for (let i = 0; i < projectName.length; i++) {
        let colorIndex = i % color.length;
        let divElement = document.createElement("div");
        divElement.className = "internTrain";
        divElement.style.backgroundColor = color[colorIndex];
    
        divElement.innerHTML = `<div class="image">
                                    <img src="${img2[i]}" alt="">
                                </div>
                                <div class="data">
                                    <div class="title-project">
                                        <p class="title-firm project-title">${projectName[i]}</p>
                                    </div>
                                        <p class="project-detail">${projectDesc[i]}</p>
                                        <a href="${projectLinks[i]}">
                                            <button class="project-links">
                                                <ion-icon name="link-outline"></ion-icon>
                                                <p>Visit Project</p>
                                            </button>
                                        </a>
                                </div>`;
  
      list += divElement.outerHTML;
    }
    a.innerHTML=` <div id="intern" >
                        
                </div> `
    document.getElementById("intern").innerHTML = list;
}
// --------------------------------------------------------------------------------------------

aboutMe()
