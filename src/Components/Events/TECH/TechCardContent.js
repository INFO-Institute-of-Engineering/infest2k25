import {
    paperpresentation,
    paperbanner,
    projecpresentation,
    webmaster,
    crashcode,
    game,
    googlehunt
} from "../../../assets/index.js";

const TechCardContent = [
    {
        id:1,
        img:paperpresentation,
        banner:paperbanner,
        eventTitle : "Paper Presentation",
        eventDesc : "Paper presentation is an event where the participants are required to make a paper about a certain topic and then present it in front of a jury. ",
        rules:[
            "Maximum 4 members per team.",
            "The paper topics can be chosen by your own.",
            "Abstract should be sent 1 week before (infest2kcse@gmail.com).",
            "Abstract should not exceed more than 250 words and Paper should not exceed 15 pages.",
            "Abstract should be in the given format :",
            "Title- theme of the paper.",
            "Names of the students and their E-mail ID’S.",
            "Name of the Institute & City.",
            "Each team is allocated a total presentation time of 3 – 5 minutes.",
            "Submissions must be in the form of a POWER POINT PRESENTATION.",
            "Students should submit the PPT before 2 days via mail(infest2kcse@gmail.com).",
        ],
        criteria:[
            "Clarity.",
            "Delivery (Confidence, Body Language, Dynamism & Vocal delivery)",
        ]
    },
    {
        id:2,
        img:projecpresentation,
        banner:"",
        eventTitle : "Project Presentation",
        eventDesc : "Project Presentation is an event where the participants are required to make a project about a certain topic and present infront of a jury.",
        rules:[
            "Abstract should be sent 2 days before the event",
            "Maximum 4 members per team .",
            ".The Project topics shall be choosen by their own.",
            "Abstract should not exceed more than 250 words and paper should not exceed 15 slides.",
            "A team should present the project upto 8 minutes.",
        ],
        criteria:[
            ".Delivery (Communication skills, confidence, and Proper delivery of content )",
            "Visuals (Quality of content and effectiveness of slides, use of multimedia, Attractive slides)",
        ],
    },
    {
        id:3,
        img:googlehunt,
        banner:"",
        eventTitle : "Google Hunt",
        eventDesc : '"Google Hunt" is a fast-paced competition with two rounds: "Google Search Challenge" and "Google Feats." It is all about being fast and precise with Google search skills',
        rules:[
            "No. of Rounds : 2",
            "Round 1 is Google Search Challenge and Duration of 25 Minutes.",
            "Round 2 is Google Feats and Duration of 30 Minutes.",
            "Round 1 :",
            "As per the participants, teams are separated.",
            "For each team, commonly 15 questions are given and 40sec is given to answer the question.",
            "The teams that gained more points will move to the next round.",
            "Round 2 :",
            "In this round the time alone will be reduced for 1 min to search for the question and answer it.",
            "Other than that, you can follow the rules used for round 1.",
            "General Rules :",
            "Mobile phones are allowed for searching answers.",
            "You must only use google to search for the question.",
            "Using ChatGPT and other Gen AI tools are prohibited",
        ],
        criteria:[
            "Accuracy, Speed, Teamwork, Problem Solving Skills",
        ]
    },
    {
        id:4,
        img:crashcode,
        banner:"",
        eventTitle : "Crash Your Code",
        eventDesc : "The CRASH YOUR CODE event is a coding contest where the participants need to solve the MCQs and Debugging and Problem Solving questions using any programming languages.",
        rules:[
            "No. of Rounds : 2",
            "Round 1 is MCQ and Round 2 is Debugging and Problem Solving.",
            "Round 1 Duration is 20 Mins and Round 2 Duration is 30 Mins.",
            "Any Programming language is allowed to solve the problems.",
            "All rounds will be conducted in Hackerrank, etc.",
            "Mobile Phone is not allowed.",
            "Switching tabs are stricly prohibited.",
            "Plagarism is prohibited.",
        ],
        criteria:[
            "Problem Solving Skills.",
            "Coding Proficiency.",
            "Innovation and Optimization.",
            "Adaptability and Resilence."
        ]
    },
    {
        id:5,
        img:webmaster,
        banner:"",
        eventTitle : "Web Master",
        eventDesc : "Web Master is an event where the participants have to express their web development skills by creating a website with given requirements.",
        rules:[
            "There will be two rounds :",
            "Round 1: MCQ (Shortlisted participants will be participated in round 2)",
            "Round 2: web page development ",
            "Individual Participants only.",
            "Switching tabs is prohibited.",
            "Using of Chatgpt and other Gen 4.AI tools are prohibited.",
            "Mobile phones are prohibited.",
            "Required assests for web page will be provided.",
        ],
        criteria:[
            "Creativity",
            "Content Quality",
            "Colourful look",
            "Attractive design",
            "Interactivity",
        ]
    },
    {
        id:6,
        img:game,
        banner:"",
        eventTitle : "Gaming",
        eventDesc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nesciunt ipsa officiis suscipit quia exercitationem laborum excepturi nostrum officia et incidunt molestiae, rerum possimus expedita? Sit quaerat aliquam minus in.",
        rules:[
            "No. of Rounds : 2",
            "Round 1 is MCQ and Round 2 is Debugging and Problem Solving.",
            "Round 1 Duration is 20 Mins and Round 2 Duration is 30 Mins.",
            "Any Programming language is allowed to solve the problems.",
            "All rounds will be conducted in Hackerrank, etc.",
            "Mobile Phone is not allowed.",
            "Switching tabs are stricly prohibited.",
            "Plagarism is prohibited.",
        ],
        criteria:[
            "Problem Solving Skills.",
            "Coding Proficiency.",
            "Innovation and Optimization.",
            "Adaptability and Resilence."
        ]
    },
];

export default TechCardContent;