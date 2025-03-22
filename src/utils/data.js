import {
    FaHtml5, FaCss3, FaLinkedin, FaJava, FaJs, FaPython, FaGit, FaGitlab, FaJenkins, FaDocker, FaGithub, FaStackOverflow
} from "react-icons/fa";
import {
    TbBrandCpp
} from "react-icons/tb"
import {
    SiPostgresql, SiOracle, SiGradle, SiRabbitmq, SiLeetcode
} from "react-icons/si"
import {
    GiTortoise,
} from "react-icons/gi"

import PROJECT_IMAGE_1 from "../assets/images/project.png"
import PROJECT_IMAGE_2 from "../assets/images/project.png"
import PROJECT_IMAGE_3 from "../assets/images/project.png"
import PROJECT_IMAGE_4 from "../assets/images/project.png"
import PROJECT_IMAGE_5 from "../assets/images/project.png"
import PROJECT_IMAGE_6 from "../assets/images/project.png"

export const MENU_LINKS = [
    {id: "01", label: "Home", offset: -100, to: "hero"},
    {id: "02", label: "Skills", offset: -80, to: "skills"},
    {id: "03", label: "Projects", offset: -80, to: "projects"},
    {id: "04", label: "About Me", offset: -80, to: "about"},
    {id: "05", label: "Contact", offset: -80, to: "contact"},
]

export const STATS = [
    {id: "01", count: "6", label: "Years of Experience"},
    {id: "02", count: "10", label: "Years of Study"},
    {id: "03", count: "X", label: "Certificates Earned"},
    {id: "04", count: "X", label: "Personal Projects"}
]

export const SKILLS = [
    {id: "01", icon: FaJava, name: "Java", type: "backend", description: "lorem ipsum"},
    {id: "02", icon: FaJs, name: "JavaScript", type: "frontend", description: "lorem ipsum"},
    {id: "03", icon: TbBrandCpp, name: "C++", type: "backend", description: "lorem ipsum"},
    {id: "04", icon: FaPython, name: "Python", type: "backend", description: "lorem ipsum"},
    {id: "05", icon: FaHtml5, name: "Html", type: "frontend", description: "lorem ipsum"},
    {id: "06", icon: FaCss3, name: "CSS", type: "frontend", description: "lorem ipsum"},
    {id: "07", icon: SiOracle, name: "OracleSQL", type: "data", description: "lorem ipsum"},
    {id: "08", icon: SiPostgresql, name: "PostgreSQL", type: "data", description: "lorem ipsum"},
    {id: "09", icon: FaGit, name: "Git", type: "repository", description: "lorem ipsum"},
    {id: "10", icon: GiTortoise, name: "Tortoise SVN", type: "repository", description: "lorem ipsum"},
    {id: "11", icon: SiGradle, name: "Gradle", type: "devops", description: "lorem ipsum"},
    {id: "12", icon: FaCss3, name: "Maven", type: "devops", description: "lorem ipsum"},
    {id: "13", icon: FaGitlab, name: "Gitlab CI/CD", type: "devops", description: "lorem ipsum"},
    {id: "14", icon: FaJenkins, name: "Jenkins", type: "devops", description: "lorem ipsum"},
    {id: "15", icon: FaDocker, name: "Docker", type: "devops", description: "lorem ipsum"},
    {id: "16", icon: SiRabbitmq, name: "RabbitMQ", type: "backend", description: "lorem ipsum"}
]

export const ABOUT_ME = {
    sumary: "lorem ipsum",
    links: [
        {id: "01", label: "LinkedIn", icon: FaLinkedin, link: ""},
        {id: "02", label: "GitHub", icon: FaGithub, link: ""},
        {id: "03", label: "Stack Overflow", icon: FaStackOverflow, link: ""},
        {id: "04", label: "Leetcode", icon: SiLeetcode, link: ""}
    ],

    email: "gabrielhartmannqwert@gmail.com"
}

export const PROJECTS = [
    {id: "01", title: "Project 01", description: "Lorem ipsum", image: PROJECT_IMAGE_1, TAGS: ["Java"]},
    {id: "02", title: "Project 02", description: "Lorem ipsum", image: PROJECT_IMAGE_2, TAGS: ["Java"]},
    {id: "03", title: "Project 03", description: "Lorem ipsum", image: PROJECT_IMAGE_3, TAGS: ["Java"]},
    {id: "04", title: "Project 04", description: "Lorem ipsum", image: PROJECT_IMAGE_4, TAGS: ["Java"]},
    {id: "05", title: "Project 05", description: "Lorem ipsum", image: PROJECT_IMAGE_5, TAGS: ["Java"]},
    {id: "06", title: "Project 06", description: "Lorem ipsum", image: PROJECT_IMAGE_6, TAGS: ["Java"]},
]
