import {
    FaHtml5,
    FaCss3,
    FaLinkedin,
    FaJava,
    FaJs,
    FaPython,
    FaGit,
    FaGitlab,
    FaJenkins,
    FaDocker,
    FaGithub,
    FaStackOverflow,
    FaReact
} from "react-icons/fa";
import {TbBrandCpp} from "react-icons/tb"
import {SiPostgresql, SiOracle, SiGradle, SiRabbitmq, SiLeetcode, SiSpringboot, SiTailwindcss} from "react-icons/si"
import {GiTortoise} from "react-icons/gi"
import {DiGrails} from "react-icons/di";

import PROJECT_IMAGE_1 from "../assets/images/project-01/main.png"
import PROJECT_DEFAULT_IMAGE from "../assets/images/project.png"

export const SUPPORTED_LANGUAGES = [
    {code: "en", name: "English", country_code: "us"},
    {code: "pt_br", name: "Português", country_code: "br"}
]

export const MENU_LINKS = [
    {id: 1, label: "navbar.item.1", offset: -100, to: "hero"},
    {id: 2, label: "navbar.item.2", offset: -80, to: "projects"},
    {id: 3, label: "navbar.item.3", offset: -80, to: "skills"},
    {id: 4, label: "navbar.item.4", offset: -80, to: "about"},
    {id: 5, label: "navbar.item.5", offset: -80, to: "contact"},
]

export const STATS = [
    {id: 1, count: "6", label: "stats.item.1"},
    {id: 2, count: "10", label: "stats.item.2"},
    {id: 3, count: "6", label: "stats.item.3"},
    {id: 4, count: "4", label: "stats.item.4"}
]

export const SKILLS_TAB = [
    {id: 1, label: "skills.tabs.item.1", value: "all"},
    {id: 2, label: "skills.tabs.item.2", value: "backend"},
    {id: 3, label: "skills.tabs.item.3", value: "frontend"},
    {id: 4, label: "skills.tabs.item.4", value: "data"},
    {id: 5, label: "skills.tabs.item.5", value: "repository"},
    {id: 6, label: "skills.tabs.item.6", value: "devops"}
]
export const SKILLS = [
    {id: 1, icon: FaJava, name: "Java", type: "backend", progress: 80, description: "skills.java.text"},
    {id: 2, icon: FaJs, name: "JavaScript", type: "frontend", progress: 80, description: "skills.javascript.text"},
    {id: 3, icon: TbBrandCpp, name: "C++", type: "backend", progress: 40, description: "skills.cpp.text"},
    {id: 4, icon: FaPython, name: "Python", type: "backend", progress: 70, description: "skills.python.text"},
    {id: 5, icon: FaHtml5, name: "Html", type: "frontend", progress: 70, description: "skills.html.text"},
    {id: 6, icon: FaCss3, name: "CSS", type: "frontend", progress: 70, description: "skills.css.text"},
    {id: 7, icon: SiOracle, name: "OracleSQL", type: "data", progress: 70, description: "skills.oracle.text"},
    {id: 8, icon: SiPostgresql, name: "PostgreSQL", type: "data", progress: 60, description: "skills.postgresql.text"},
    {id: 9, icon: FaGit, name: "Git", type: "repository", progress: 80, description: "skills.git.text"},
    {id: 10, icon: GiTortoise, name: "Tortoise SVN", type: "repository", progress: 60, description: "skills.tortoisesvn.text"},
    {id: 11, icon: SiGradle, name: "Gradle", type: "devops", progress: 60, description: "skills.gradle.text"},
    {id: 12, icon: FaCss3, name: "Maven", type: "devops", progress: 60, description: "skills.maven.text"},
    {id: 13, icon: FaGitlab, name: "Gitlab CI/CD", type: "devops", progress: 80, description: "skills.gitlabcicd.text"},
    {id: 14, icon: FaJenkins, name: "Jenkins", type: "devops", progress: 60, description: "skills.jenkins.text"},
    {id: 15, icon: FaDocker, name: "Docker", type: "devops", progress: 70, description: "skills.docker.text"},
    {id: 16, icon: SiRabbitmq, name: "RabbitMQ", type: "backend", progress: 40, description: "skills.rabbitmq.text"},
    {id: 17, icon: SiSpringboot, name: "Springboot", type: "backend", progress: 80, description: "skills.springboot.text"},
    {id: 18, icon: FaJs, name: "Extjs", type: "frontend", progress: 80, description: "skills.extjs.text"},
    {id: 19, icon: DiGrails, name: "Grails", type: "backend", progress: 80, description: "skills.grails.text"},
    {id: 20, icon: FaReact, name: "React", type: "frontend", progress: 50, description: "skills.react.text"},
    {id: 21, icon: SiTailwindcss, name: "Tailwind CSS", type: "frontend", progress: 40, description: "skills.tailwind.text"}
]

export const ABOUT_ME = {
    links: [
        {id: 1, label: "LinkedIn", icon: FaLinkedin, link: "https://www.linkedin.com/in/joao-gabriel-h/"},
        {id: 2, label: "GitHub", icon: FaGithub, link: "https://github.com/JoaoGH"},
        {id: 3, label: "Stack Overflow", icon: FaStackOverflow, link: "https://stackoverflow.com/users/10426962/joao-g-hartmann"},
        {id: 4, label: "Stack Overflow em Português", icon: FaStackOverflow, link: "https://pt.stackoverflow.com/users/126507/joao-g-hartmann"},
        {id: 5, label: "Leetcode", icon: SiLeetcode, link: "https://leetcode.com/u/DrZer0/"}
    ],

    email: "gabrielhartmannqwert@gmail.com"
}

export const PROJECTS = [
    {
        id: 1, title: "Retro Code", image: PROJECT_IMAGE_1,
        tags: ["C++", "PHP", "Java", "Javascript", "HTML", "CSS", "SQL", "Legacy"],
        description: "projects.retrocode.description",
        details: {
            fullDescription: "projects.retrocode.text",
            features: [
                "projects.retrocode.feat.1.label",
                "projects.retrocode.feat.2.label",
                "projects.retrocode.feat.3.label"
            ],
            codeUrl: "https://github.com/JoaoGH/retro-code",
            demoUrl: null,
        }
    }, {
        id: 2, title: "Stories Video Maker", image: PROJECT_DEFAULT_IMAGE,
        tags: ["Grails", "Python 3", "FFmpeg", "Automation", "OpenCV"],
        description: "projects.storiesmaker.description",
        details: {
            fullDescription: "projects.storiesmaker.text",
            features: [
                "projects.storiesmaker.features.1.label",
                "projects.storiesmaker.features.2.label",
                "projects.storiesmaker.features.3.label",
                "projects.storiesmaker.features.4.label"
            ],
            codeUrl: "https://github.com/JoaoGH/stories-video-maker",
            demoUrl: null
        }
    }, {
        id: 3, title: "John's Wallet", image: PROJECT_DEFAULT_IMAGE,
        tags: ["Java", "Springboot"],
        description: "projects.johnswallet.description",
        details: {
            fullDescription: "projects.johnswallet.text",
            features: [
                "projects.johnswallet.features.1.label"
            ],
            codeUrl: "https://github.com/JoaoGH/John-s-Wallet",
            demoUrl: null
        }
    }, {
        id: 4, title: "John's Wallet Messaging", image: PROJECT_DEFAULT_IMAGE,
        tags: ["Java", "Springboot", "RabbitMQ"],
        description: "projects.johnswalletmsg.description",
        details: {
            fullDescription: "projects.johnswalletmsg.text",
            features: [
                "projects.johnswalletmsg.features.1.label",
                "projects.johnswalletmsg.features.2.label"
            ],
            codeUrl: "https://github.com/JoaoGH/John-s-Wallet",
            demoUrl: null
        }
    }, {
        id: 5, title: "projects.pln.title", image: PROJECT_DEFAULT_IMAGE,
        tags: ["Python", "NLP", "Machine Learning", "NLTK", "Pandas"],
        description: "projects.pln.description",
        details: {
            fullDescription: "projects.pln.text",
            features: [
                "projects.pln.features.1.label",
                "projects.pln.features.2.label",
                "projects.pln.features.3.label",
                "projects.pln.features.4.label",
                "projects.pln.features.5.label",
                "projects.pln.features.6.label"
            ],
            codeUrl: "https://github.com/JoaoGH/topicos-especiais-pln",
            demoUrl: null
        }
    }, {
        id: 6, title: "projects.cve.title", image: PROJECT_DEFAULT_IMAGE,
        tags: ["Python", "CVSS", "CVE"],
        description: "projects.cve.description",
        details: {
            fullDescription: "projects.cve.text",
            features: [
                "projects.cve.features.1.label",
                "projects.cve.features.2.label",
                "projects.cve.features.3.label",
                "projects.cve.features.4.label"
            ],
            codeUrl: "https://github.com/JoaoGH/cve-cvss-identifier",
            demoUrl: null
        }
    }, {
        id: 7, title: "projects.certverify.title", image: PROJECT_DEFAULT_IMAGE,
        tags: ["Python", "PKI", "X.509"],
        description: "projects.certverify.description",
        details: {
            fullDescription: "projects.certverify.text",
            features: [
                "projects.certverify.features.1.label",
                "projects.certverify.features.2.label",
                "projects.certverify.features.3.label",
                "projects.certverify.features.4.label"
            ],
            codeUrl: "https://github.com/JoaoGH/verify-digital-cert",
            demoUrl: null
        }
    },
]
