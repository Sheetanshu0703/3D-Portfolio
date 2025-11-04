import { fleksa } from "../assets/icons";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    ai,
    iot,
    food,
    compiler
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Framer Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
];

export const experiences = [
    {
        title: "AI Engineer Intern",
        company_name: "Fleksa",
        icon: fleksa,
        iconBg: "#F6E05E",
        date: "May 2024 - Present",
        points: [
            "Built a Conversational AI agent to automate restaurant drive-thru ordering using real-time speech recognition, NLP, and response generation.",
            "Integrated the agent with backend APIs to process customer orders, handle menu queries, and optimize order accuracy.",
            "Improved user interaction latency and implemented custom intent handling for food-related dialogues.",
            "Collaborated with a cross-functional team to design, test, and deploy the AI model in real-time environments."
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Sheetanshu0703',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/sheetanshu-gautam/',
    }
];

export const projects = [
    {
        iconUrl: ai,
        theme: 'btn-back-yellow',
        name: 'Briefly - AI Text Summarizer',
        description: 'A text summarization app using Google’s FLAN-T5 and Transformer models to generate concise, high-quality summaries for long-form text, blogs, or articles with multi-framework support.',
        link: 'https://github.com/Sheetanshu0703/Briefly',
    },
    {
        iconUrl: iot,
        theme: 'btn-back-green',
        name: 'KneeRevive',
        description: 'An IoT-based knee rehabilitation system using accelerometer and gyroscope sensors to track motion data, detect jerks or bad movements in real time, and provide visual health assessments.',
        link: 'https://github.com/Suhanigh/KneeRevive',
    },
    {
        iconUrl: food,
        theme: 'btn-back-red',
        name: 'WhatAMess',
        description: 'A full-stack web app for college students to check daily mess menus, compare food across nearby messes, and enable peer-to-peer food delivery with a credit-based reward system.',
        link: 'https://github.com/Sheetanshu0703/WAM',
    },
    {
        iconUrl: compiler,
        theme: 'btn-back-blue',
        name: 'CompilerCalci',
        description: 'A compiler design project that parses and evaluates mathematical expressions using BODMAS rules, while generating parser tables and trees through Flex, Bison, and Node.js APIs.',
        link: 'https://github.com/Sheetanshu0703/CompilerCalci',
    },
];
