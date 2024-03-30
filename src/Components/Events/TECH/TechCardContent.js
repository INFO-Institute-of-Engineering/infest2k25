import {
    paperpresentation,
    projecpresentation,
    webmaster,
    crashcode,
    game,
    googlehunt
} from "../../../assets/index.js";

const TechCardContent = [
    {
        img:paperpresentation,
        eventTitle : "Paper Presentation",
        eventDesc : "Paper presentation is an event where the participants are required to make a paper about a certain topic and then present it in front of a jury. ",
        rules:{
            rule1:"Maximum 4 members per team.",
            rule2:"The paper topics can be chosen by your own.",
            rule3:"Abstract should be sent 1 week before (infest2kcse@gmail.com).",
            rule4:"Abstract should not exceed more than 250 words and Paper should not exceed 15 pages.",
            rule5:"Abstract should be in the given format :",
            rule6:"Title- theme of the paper.",
            rule7:"Names of the students and their E-mail ID’S.",
            rule8:"Name of the Institute & City.",
            rule9:"Each team is allocated a total presentation time of 3 – 5 minutes.",
            rule10:"Submissions must be in the form of a POWER POINT PRESENTATION.",
            rule11:"Students should submit the PPT before 2 days via mail(infest2kcse@gmail.com).",
        },
        criteria:{
            point1:"Clarity.",
            point2:"Delivery (Confidence, Body Language, Dynamism & Vocal delivery)",
        }
    },
    {
        img:projecpresentation,
        eventTitle : "Project Presentation",
        eventDesc : "Project Presentation is an event where the participants are required to make a project about a certain topic and present infront of a jury.",
        rules:{
            rule1:"Abstract should be sent 2 days before the event",
            rule2:"Maximum 4 members per team .",
            rule3:".The Project topics shall be choosen by their own.",
            rule4:"Abstract should not exceed more than 250 words and paper should not exceed 15 slides.",
            rule5:"A team should present the project upto 8 minutes.",
        },
        criteria:{
            point1:".Delivery (Communication skills, confidence, and Proper delivery of content )",
            point2:"Visuals (Quality of content and effectiveness of slides, use of multimedia, Attractive slides)",
        },
    },
    {
        img:googlehunt,
        eventTitle : "Google Hunt",
        eventDesc : '"Google Hunt" is a fast-paced competition with two rounds: "Google Search Challenge" and "Google Feats." It is all about being fast and precise with Google search skills',
        rules:{
            rule1:"No. of Rounds : 2",
            rule2:"Round 1 is Google Search Challenge and Duration of 25 Minutes.",
            rule3:"Round 2 is Google Feats and Duration of 30 Minutes.",
            rule4:"Round 1 :",
            rule5:"As per the participants, teams are separated.",
            rule6:"For each team, commonly 15 questions are given and 40sec is given to answer the question.",
            rule7:"The teams that gained more points will move to the next round.",
            rule8:"Round 2 :",
            rule9:"In this round the time alone will be reduced for 1 min to search for the question and answer it.",
            rule10:"Other than that, you can follow the rules used for round 1.",
            rule11:"General Rules :",
            rule12:"Mobile phones are allowed for searching answers.",
            rule13:"You must only use google to search for the question.",
            rule14:"Using ChatGPT and other Gen AI tools are prohibited",
        },
        criteria:{
            point1:"Accuracy, Speed, Teamwork, Problem Solving Skills",
        }
    },
    {
        img:crashcode,
        eventTitle : "Crash Your Code",
        eventDesc : "The CRASH YOUR CODE event is a coding contest where the participants need to solve the MCQs and Debugging and Problem Solving questions using any programming languages.",
        rules:{
            rule1:"No. of Rounds : 2",
            rule2:"Round 1 is MCQ and Round 2 is Debugging and Problem Solving.",
            rule3:"Round 1 Duration is 20 Mins and Round 2 Duration is 30 Mins.",
            rule4:"Any Programming language is allowed to solve the problems.",
            rule5:"All rounds will be conducted in Hackerrank, etc.",
            rule6:"Mobile Phone is not allowed.",
            rule7:"Switching tabs are stricly prohibited.",
            rule8:"Plagarism is prohibited.",
        },
        criteria:{
            point1:"Problem Solving Skills.",
            point2:"Coding Proficiency.",
            point3:"Innovation and Optimization.",
            point4:"Adaptability and Resilence."
        }
    },
    {
        img:webmaster,
        eventTitle : "Web Master",
        eventDesc : "Web Master is an event where the participants have to express their web development skills by creating a website with given requirements.",
        rules:{
            rule1:"There will be two rounds :",
            rule2:"Round 1: MCQ (Shortlisted participants will be participated in round 2)",
            rule3:"Round 2: web page development ",
            rule4:"Individual Participants only.",
            rule5:"Switching tabs is prohibited.",
            rule6:"Using of Chatgpt and other Gen 4.AI tools are prohibited.",
            rule7:"Mobile phones are prohibited.",
            rule8:"Required assests for web page will be provided.",
        },
        criteria:{
            point1:"Creativity",
            point2:"Content Quality",
            point3:"Colourful look",
            point4:"Attractive design",
            point5:"Interactivity",
        }
    },
    {
        img:game,
        eventTitle : "Gaming",
        eventDesc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nesciunt ipsa officiis suscipit quia exercitationem laborum excepturi nostrum officia et incidunt molestiae, rerum possimus expedita? Sit quaerat aliquam minus in.",
        rules:{
            rule1:"No. of Rounds : 2",
            rule2:"Round 1 is MCQ and Round 2 is Debugging and Problem Solving.",
            rule3:"Round 1 Duration is 20 Mins and Round 2 Duration is 30 Mins.",
            rule4:"Any Programming language is allowed to solve the problems.",
            rule5:"All rounds will be conducted in Hackerrank, etc.",
            rule6:"Mobile Phone is not allowed.",
            rule7:"Switching tabs are stricly prohibited.",
            rule8:"Plagarism is prohibited.",
        },
        criteria:{
            point1:"Problem Solving Skills.",
            point2:"Coding Proficiency.",
            point3:"Innovation and Optimization.",
            point4:"Adaptability and Resilence."
        }
    },
];

export default TechCardContent;