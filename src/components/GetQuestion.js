import React from 'react';


// https://opentdb.com/api_config.php
// Sample array of objects Q&A 
// const questions = [
//     {
//         category: "HTML",
//         type: "multiple",
//         difficulty: "easy",
//         question: "In any programming language, what is the most common way to iterate through an array?",
//         correct_answer: "&#039;For&#039; loops",
//         incorrect_answers: [
//             "&#039;If&#039; Statements",
//             "&#039;Do-while&#039; loops",
//             "&#039;While&#039; loops"
//         ]
//     },
//     {
//         category: "HTML",
//         type: "multiple",
//         difficulty: "medium",
//         question: "Which internet company began life as an online bookstore called &#039;Cadabra&#039;?",
//         correct_answer: "Amazon",
//         incorrect_answers: [
//             "eBay",
//             "Overstock",
//             "Shopify"
//         ]
//     },
//     {
//         category: "HTML",
//         type: "multiple",
//         difficulty: "easy",
//         question: "What does the &quot;MP&quot; stand for in MP3?",
//         correct_answer: "Moving Picture",
//         incorrect_answers: [
//             "Music Player",
//             "Multi Pass",
//             "Micro Point"
//         ]
//     },
//     {
//         category: "HTML",
//         type: "multiple",
//         difficulty: "easy",
//         question: "When Gmail first launched, how much storage did it provide for your email?",
//         correct_answer: "1GB",
//         incorrect_answers: [
//             "512MB",
//             "5GB",
//             "Unlimited"
//         ]
//     },
//     {
//         category: "HTML",
//         type: "multiple",
//         difficulty: "medium",
//         question: "Whistler was the codename of this Microsoft Operating System.",
//         correct_answer: "Windows XP",
//         incorrect_answers: [
//             "Windows 2000",
//             "Windows 7",
//             "Windows 95"
//         ]
//     },
//     {
//         category: "HTML",
//         type: "multiple",
//         difficulty: "medium",
//         question: "What five letter word is the motto of the IBM Computer company?",
//         correct_answer: "Think",
//         incorrect_answers: [
//             "Click",
//             "Logic",
//             "Pixel"
//         ]
//     },
//     {
//         category: "HTML",
//         type: "multiple",
//         difficulty: "hard",
//         question: "How many Hz does the video standard PAL support?",
//         correct_answer: "50",
//         incorrect_answers: [
//             "59",
//             "60",
//             "25"
//         ]
//     },
//     {
//         category: "HTML",
//         type: "multiple",
//         difficulty: "easy",
//         question: "Which computer hardware device provides an interface for all other connected devices to communicate?",
//         correct_answer: "Motherboard",
//         incorrect_answers: [
//             "Central Processing Unit",
//             "Hard Disk Drive",
//             "Random Access Memory"
//         ]
//     },
//     {
//         category: "HTML",
//         type: "multiple",
//         difficulty: "easy",
//         question: "If you were to code software in this language you&#039;d only be able to type 0&#039;s and 1&#039;s.",
//         correct_answer: "Binary",
//         incorrect_answers: [
//             "JavaScript",
//             "C++",
//             "Python"
//         ]
//     },
//     {
//         category: "HTML",
//         type: "multiple",
//         difficulty: "medium",
//         question: "All of the following programs are classified as raster graphics editors EXCEPT:",
//         correct_answer: "Inkscape",
//         incorrect_answers: [
//             "Paint.NET",
//             "GIMP",
//             "Adobe Photoshop"
//         ]
//     },
//     {
//         category: "HTML",
//         type: "multiple",
//         difficulty: "medium",
//         question: "The computer OEM manufacturer Clevo, known for its Sager notebook line, is based in which country?",
//         correct_answer: "Taiwan",
//         incorrect_answers: [
//             "United States",
//             "Germany",
//             "China (People&#039;s Republic of)"
//         ]
//     },
//     {
//         category: "HTML",
//         type: "multiple",
//         difficulty: "medium",
//         question: "On which day did the World Wide Web go online?",
//         correct_answer: "December 20, 1990",
//         incorrect_answers: [
//             "December 17, 1996",
//             "November 12, 1990",
//             "November 24, 1995"
//         ]
//     },
//     {
//         category: "HTML",
//         type: "multiple",
//         difficulty: "easy",
//         question: "What is the code name for the mobile operating system Android 7.0?",
//         correct_answer: "Nougat",
//         incorrect_answers: [
//             "Ice Cream Sandwich",
//             "Jelly Bean",
//             "Marshmallow"
//         ]
//     },
//     {
//         category: "HTML",
//         type: "multiple",
//         difficulty: "easy",
//         question: "What is the domain name for the country Tuvalu?",
//         correct_answer: ".tv",
//         incorrect_answers: [
//             ".tu",
//             ".tt",
//             ".tl"
//         ]
//     },
//     {
//         category: "HTML",
//         type: "multiple",
//         difficulty: "medium",
//         question: "Which coding language was the #1 programming language in terms of usage on GitHub in 2015?",
//         correct_answer: "JavaScript",
//         incorrect_answers: [
//             "C#",
//             "Python",
//             "PHP"
//         ]
//     },
//     {
//         category: "HTML",
//         type: "multiple",
//         difficulty: "hard",
//         question: "Which of these names was an actual codename for a cancelled Microsoft project?",
//         correct_answer: "Neptune",
//         incorrect_answers: [
//             "Enceladus",
//             "Pollux",
//             "Saturn"
//         ]
//     },
//     {
//         category: "HTML",
//         type: "multiple",
//         difficulty: "medium",
//         question: "In the programming language &quot;Python&quot;, which of these statements would display the string &quot;Hello World&quot; correctly?",
//         correct_answer: "print(&quot;Hello World&quot;)",
//         incorrect_answers: [
//             "console.log(&quot;Hello World&quot;)",
//             "echo &quot;Hello World&quot;",
//             "printf(&quot;Hello World&quot;)"
//         ]
//     },
//     {
//         category: "HTML",
//         type: "multiple",
//         difficulty: "medium",
//         question: "In HTML, which non-standard tag used to be be used to make elements scroll across the viewport?",
//         correct_answer: "&lt;marquee&gt;&lt;/marquee&gt;",
//         incorrect_answers: [
//             "&lt;scroll&gt;&lt;/scroll&gt;",
//             "&lt;move&gt;&lt;/move&gt;",
//             "&lt;slide&gt;&lt;/slide&gt;"
//         ]
//     },
//     {
//         category: "HTML",
//         type: "multiple",
//         difficulty: "easy",
//         question: "In &quot;Hexadecimal&quot;, what color would be displayed from the color code? &quot;#00FF00&quot;?",
//         correct_answer: "Green",
//         incorrect_answers: [
//             "Red",
//             "Blue",
//             "Yellow"
//         ]
//     },
//     {
//         category: "HTML",
//         type: "multiple",
//         difficulty: "medium",
//         question: "What is the correct term for the metal object in between the CPU and the CPU fan within a computer system?",
//         correct_answer: "Heat Sink",
//         incorrect_answers: [
//             "CPU Vent",
//             "Temperature Decipator",
//             "Heat Vent"
//         ]
//     },
//     {
//         category: "HTML",
//         type: "multiple",
//         difficulty: "easy",
//         question: "Which computer language would you associate Django framework with?",
//         correct_answer: "Python",
//         incorrect_answers: [
//             "C#",
//             "C++",
//             "Java"
//         ]
//     },
//     {
//         category: "HTML",
//         type: "multiple",
//         difficulty: "easy",
//         question: "What does LTS stand for in the software market?",
//         correct_answer: "Long Term Support",
//         incorrect_answers: [
//             "Long Taco Service",
//             "Ludicrous Transfer Speed",
//             "Ludicrous Turbo Speed"
//         ]
//     },
//     {
//         category: "HTML",
//         type: "multiple",
//         difficulty: "medium",
//         question: "In computing terms, typically what does CLI stand for?",
//         correct_answer: "Command Line Interface",
//         incorrect_answers: [
//             "Common Language Input",
//             "Control Line Interface",
//             "Common Language Interface"
//         ]
//     },
//     {
//         category: "HTML",
//         type: "multiple",
//         difficulty: "medium",
//         question: "What does &quot;LCD&quot; stand for?",
//         correct_answer: "Liquid Crystal Display",
//         incorrect_answers: [
//             "Language Control Design",
//             "Last Common Difference",
//             "Long Continuous Design"
//         ]
//     },
//     {
//         category: "HTML",
//         type: "multiple",
//         difficulty: "medium",
//         question: ".rs is the top-level domain for what country?",
//         correct_answer: "Serbia",
//         incorrect_answers: [
//             "Romania",
//             "Russia",
//             "Rwanda"
//         ]
//     },
//     {
//         category: "HTML",
//         type: "multiple",
//         difficulty: "medium",
//         question: ".at is the top-level domain for what country?",
//         correct_answer: "Austria",
//         incorrect_answers: [
//             "Argentina",
//             "Australia",
//             "Angola"
//         ]
//     },
//     {
//         category: "HTML",
//         type: "multiple",
//         difficulty: "medium",
//         question: "What is known as &quot;the brain&quot; of the Computer?",
//         correct_answer: "Central Processing Unit",
//         incorrect_answers: [
//             "Motherboard",
//             "Graphics Processing Unit",
//             "Keyboard"
//         ]
//     },
//     {
//         category: "HTML",
//         type: "multiple",
//         difficulty: "hard",
//         question: "Which data structure does FILO apply to?",
//         correct_answer: "Stack",
//         incorrect_answers: [
//             "Queue",
//             "Heap",
//             "Tree"
//         ]
//     },
//     {
//         category: "HTML",
//         type: "multiple",
//         difficulty: "hard",
//         question: "What internet protocol was documented in RFC 1459?",
//         correct_answer: "IRC",
//         incorrect_answers: [
//             "HTTP",
//             "HTTPS",
//             "FTP"
//         ]
//     },
//     {
//         category: "HTML",
//         type: "multiple",
//         difficulty: "medium",
//         question: "What is the main CPU is the Sega Mega Drive / Sega Genesis?",
//         correct_answer: "Motorola 68000",
//         incorrect_answers: [
//             "Zilog Z80",
//             "Yamaha YM2612",
//             "Intel 8088"
//         ]
//     },
//     {
//         category: "HTML",
//         type: "multiple",
//         difficulty: "hard",
//         question: "What does the International System of Quantities refer 1024 bytes as?",
//         correct_answer: "Kibibyte",
//         incorrect_answers: [
//             "Kylobyte",
//             "Kilobyte",
//             "Kelobyte"
//         ]
//     },
//     {
//         category: "HTML",
//         type: "multiple",
//         difficulty: "medium",
//         question: "What was the first Android version specifically optimized for tablets?",
//         correct_answer: "Honeycomb",
//         incorrect_answers: [
//             "Eclair",
//             "Froyo",
//             "Marshmellow"
//         ]
//     },
//     {
//         category: "HTML",
//         type: "multiple",
//         difficulty: "medium",
//         question: "Which of these people was NOT a founder of Apple Inc?",
//         correct_answer: "Jonathan Ive",
//         incorrect_answers: [
//             "Steve Jobs",
//             "Ronald Wayne",
//             "Steve Wozniak"
//         ]
//     },
//     {
//         category: "HTML",
//         type: "multiple",
//         difficulty: "hard",
//         question: "Which RAID array type is associated with data mirroring?",
//         correct_answer: "RAID 1",
//         incorrect_answers: [
//             "RAID 0",
//             "RAID 10",
//             "RAID 5"
//         ]
//     },
//     {
//         category: "HTML",
//         type: "multiple",
//         difficulty: "hard",
//         question: "What was the first company to use the term &quot;Golden Master&quot;?",
//         correct_answer: "Apple",
//         incorrect_answers: [
//             "IBM",
//             "Microsoft",
//             "Google"
//         ]
//     },
//     {
//         category: "HTML",
//         type: "multiple",
//         difficulty: "hard",
//         question: "Released in 2001, the first edition of Apple&#039;s Mac OS X operating system (version 10.0) was given what animal code name?",
//         correct_answer: "Cheetah",
//         incorrect_answers: [
//             "Puma",
//             "Tiger",
//             "Leopard"
//         ]
//     },
//     {
//         category: "HTML",
//         type: "multiple",
//         difficulty: "medium",
//         question: "Which programming language was developed by Sun Microsystems in 1995?",
//         correct_answer: "Java",
//         incorrect_answers: [
//             "Python",
//             "Solaris OS",
//             "C++"
//         ]
//     },
//     {
//         category: "HTML",
//         type: "multiple",
//         difficulty: "hard",
//         question: "Who invented the &quot;Spanning Tree Protocol&quot;?",
//         correct_answer: "Radia Perlman",
//         incorrect_answers: [
//             "Paul Vixie",
//             "Vint Cerf",
//             "Michael Roberts"
//         ]
//     },
//     {
//         category: "HTML",
//         type: "multiple",
//         difficulty: "medium",
//         question: "In programming, what do you call functions with the same name but different implementations?",
//         correct_answer: "Overloading",
//         incorrect_answers: [
//             "Overriding",
//             "Abstracting",
//             "Inheriting"
//         ]
//     },
//     {
//         category: "HTML",
//         type: "multiple",
//         difficulty: "medium",
//         question: "What does RAID stand for?",
//         correct_answer: "Redundant Array of Independent Disks",
//         incorrect_answers: [
//             "Rapid Access for Indexed Devices",
//             "Range of Applications with Identical Designs",
//             "Randomized Abstract Identification Description"
//         ]
//     },
//     {
//         category: "HTML",
//         type: "multiple",
//         difficulty: "easy",
//         question: "How long is an IPv6 address?",
//         correct_answer: "128 bits",
//         incorrect_answers: [
//             "32 bits",
//             "64 bits",
//             "128 bytes"
//         ]
//     },
//     {
//         category: "HTML",
//         type: "multiple",
//         difficulty: "easy",
//         question: "In computing, what does MIDI stand for?",
//         correct_answer: "Musical Instrument Digital Interface",
//         incorrect_answers: [
//             "Musical Interface of Digital Instruments",
//             "Modular Interface of Digital Instruments",
//             "Musical Instrument Data Interface"
//         ]
//     },
//     {
//         category: "HTML",
//         type: "multiple",
//         difficulty: "hard",
//         question: "What major programming language does Unreal Engine 4 use?",
//         correct_answer: "C++",
//         incorrect_answers: [
//             "Assembly",
//             "C#",
//             "ECMAScript"
//         ]
//     },
//     {
//         category: "HTML",
//         type: "multiple",
//         difficulty: "hard",
//         question: "The acronym &quot;RIP&quot; stands for which of these?",
//         correct_answer: "Routing Information Protocol",
//         incorrect_answers: [
//             "Runtime Instance Processes",
//             "Regular Interval Processes",
//             "Routine Inspection Protocol"
//         ]
//     },
//     {
//         category: "HTML",
//         type: "multiple",
//         difficulty: "medium",
//         question: "The teapot often seen in many 3D modeling applications is called what?",
//         correct_answer: "Utah Teapot",
//         incorrect_answers: [
//             "Pixar Teapot",
//             "3D Teapot",
//             "Tennessee Teapot"
//         ]
//     },
//     {
//         category: "HTML",
//         type: "multiple",
//         difficulty: "medium",
//         question: "What is the number of keys on a standard Windows Keyboard?",
//         correct_answer: "104",
//         incorrect_answers: [
//             "64",
//             "94",
//             "76"
//         ]
//     },
//     {
//         category: "HTML",
//         type: "multiple",
//         difficulty: "hard",
//         question: "What type of sound chip does the Super Nintendo Entertainment System (SNES) have?",
//         correct_answer: "ADPCM Sampler",
//         incorrect_answers: [
//             "FM Synthesizer",
//             "Programmable Sound Generator (PSG)",
//             "PCM Sampler"
//         ]
//     },
//     {
//         category: "HTML",
//         type: "multiple",
//         difficulty: "medium",
//         question: "Unix Time is defined as the number of seconds that have elapsed since when?",
//         correct_answer: "Midnight, January 1, 1970",
//         incorrect_answers: [
//             "Midnight, July 4, 1976",
//             "Midnight on the creator of Unix&#039;s birthday",
//             "Midnight, July 4, 1980"
//         ]
//     },
//     {
//         category: "HTML",
//         type: "multiple",
//         difficulty: "medium",
//         question: "How many bits make up the significand portion of a single precision floating point number?",
//         correct_answer: "23",
//         incorrect_answers: [
//             "8",
//             "53",
//             "15"
//         ]
//     },
//     {
//         category: "HTML",
//         type: "multiple",
//         difficulty: "hard",
//         question: "Which kind of algorithm is Ron Rivest not famous for creating?",
//         correct_answer: "Secret sharing scheme",
//         incorrect_answers: [
//             "Hashing algorithm",
//             "Asymmetric encryption",
//             "Stream cipher"
//         ]
//     }
// ]

// This function translate unicode char to standard char 
// it's not always working
// Find better solution
function decode(str) {
    return decodeURI(str)
}


const GetQuestion = ({ questionNumber, questions }) => {

    let question = decode(questions[questionNumber].question)

    return (
        <div className="question-container">
            <h2>{question}</h2>
        </div>
    );
};

export default GetQuestion;