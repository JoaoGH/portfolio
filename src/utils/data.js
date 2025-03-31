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

export const SUPPORTED_LANGUAGES = [
    {code: "en", name: "English", country_code: "us"},
    {code: "pt_br", name: "Português", country_code: "br"}
]

export const MENU_LINKS = [
    {id: "01", label: "navbar.item.1", offset: -100, to: "hero"},
    {id: "02", label: "navbar.item.2", offset: -80, to: "projects"},
    {id: "03", label: "navbar.item.3", offset: -80, to: "skills"},
    {id: "04", label: "navbar.item.4", offset: -80, to: "about"},
    {id: "05", label: "navbar.item.5", offset: -80, to: "contact"},
]

export const STATS = [
    {id: "01", count: "6", label: "stats.item.1"},
    {id: "02", count: "10", label: "stats.item.2"},
    {id: "03", count: "X", label: "stats.item.3"},
    {id: "04", count: "X", label: "stats.item.4"}
]

export const SKILLS_TAB = [
    {id: "01", label: "skills.tabs.item.1", value: "all"},
    {id: "02", label: "skills.tabs.item.2", value: "backend"},
    {id: "03", label: "skills.tabs.item.3", value: "frontend"},
    {id: "04", label: "skills.tabs.item.4", value: "data"},
    {id: "05", label: "skills.tabs.item.5", value: "repository"},
    {id: "06", label: "skills.tabs.item.6", value: "devops"}
]
export const SKILLS = [
    {id: "01", icon: FaJava, name: "Java", type: "backend", progress: 89, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a arcu eu justo viverra ullamcorper. Aliquam odio lorem, gravida et condimentum in, sodales quis nibh. Sed porta accumsan arcu sit amet commodo."},
    {id: "02", icon: FaJs, name: "JavaScript", type: "frontend", progress: 89, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a arcu eu justo viverra ullamcorper. Aliquam odio lorem, gravida et condimentum in, sodales quis nibh. Sed porta accumsan arcu sit amet commodo."},
    {id: "03", icon: TbBrandCpp, name: "C++", type: "backend", progress: 89, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a arcu eu justo viverra ullamcorper. Aliquam odio lorem, gravida et condimentum in, sodales quis nibh. Sed porta accumsan arcu sit amet commodo."},
    {id: "04", icon: FaPython, name: "Python", type: "backend", progress: 89, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a arcu eu justo viverra ullamcorper. Aliquam odio lorem, gravida et condimentum in, sodales quis nibh. Sed porta accumsan arcu sit amet commodo."},
    {id: "05", icon: FaHtml5, name: "Html", type: "frontend", progress: 89, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a arcu eu justo viverra ullamcorper. Aliquam odio lorem, gravida et condimentum in, sodales quis nibh. Sed porta accumsan arcu sit amet commodo."},
    {id: "06", icon: FaCss3, name: "CSS", type: "frontend", progress: 89, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a arcu eu justo viverra ullamcorper. Aliquam odio lorem, gravida et condimentum in, sodales quis nibh. Sed porta accumsan arcu sit amet commodo."},
    {id: "07", icon: SiOracle, name: "OracleSQL", type: "data", progress: 89, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a arcu eu justo viverra ullamcorper. Aliquam odio lorem, gravida et condimentum in, sodales quis nibh. Sed porta accumsan arcu sit amet commodo."},
    {id: "08", icon: SiPostgresql, name: "PostgreSQL", type: "data", progress: 89, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a arcu eu justo viverra ullamcorper. Aliquam odio lorem, gravida et condimentum in, sodales quis nibh. Sed porta accumsan arcu sit amet commodo."},
    {id: "09", icon: FaGit, name: "Git", type: "repository", progress: 89, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a arcu eu justo viverra ullamcorper. Aliquam odio lorem, gravida et condimentum in, sodales quis nibh. Sed porta accumsan arcu sit amet commodo."},
    {id: "10", icon: GiTortoise, name: "Tortoise SVN", type: "repository", progress: 89, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a arcu eu justo viverra ullamcorper. Aliquam odio lorem, gravida et condimentum in, sodales quis nibh. Sed porta accumsan arcu sit amet commodo."},
    {id: "11", icon: SiGradle, name: "Gradle", type: "devops", progress: 89, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a arcu eu justo viverra ullamcorper. Aliquam odio lorem, gravida et condimentum in, sodales quis nibh. Sed porta accumsan arcu sit amet commodo."},
    {id: "12", icon: FaCss3, name: "Maven", type: "devops", progress: 89, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a arcu eu justo viverra ullamcorper. Aliquam odio lorem, gravida et condimentum in, sodales quis nibh. Sed porta accumsan arcu sit amet commodo."},
    {id: "13", icon: FaGitlab, name: "Gitlab CI/CD", type: "devops", progress: 89, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a arcu eu justo viverra ullamcorper. Aliquam odio lorem, gravida et condimentum in, sodales quis nibh. Sed porta accumsan arcu sit amet commodo."},
    {id: "14", icon: FaJenkins, name: "Jenkins", type: "devops", progress: 89, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a arcu eu justo viverra ullamcorper. Aliquam odio lorem, gravida et condimentum in, sodales quis nibh. Sed porta accumsan arcu sit amet commodo."},
    {id: "15", icon: FaDocker, name: "Docker", type: "devops", progress: 89, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a arcu eu justo viverra ullamcorper. Aliquam odio lorem, gravida et condimentum in, sodales quis nibh. Sed porta accumsan arcu sit amet commodo."},
    {id: "16", icon: SiRabbitmq, name: "RabbitMQ", type: "backend", progress: 89, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a arcu eu justo viverra ullamcorper. Aliquam odio lorem, gravida et condimentum in, sodales quis nibh. Sed porta accumsan arcu sit amet commodo."}
]

export const ABOUT_ME = {
    sumary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec mollis libero. Pellentesque eu lorem nulla. Phasellus maximus, nunc eget malesuada pharetra, sem felis consectetur urna, quis porta lorem nibh a dui. Duis condimentum magna at malesuada pretium. Nunc id neque metus. Vivamus ut nisi pellentesque tortor rhoncus dapibus non in metus. Etiam ut pellentesque ante.\n" +
        "\n" +
        "Sed eu consectetur arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus placerat quis neque id condimentum. Duis vehicula congue dolor quis vulputate. Nam ut facilisis tellus. Aenean elementum odio eu vestibulum mollis. Phasellus ultricies consequat nibh, ac volutpat justo aliquam at. Maecenas malesuada lacus ante, at tempor tortor placerat sed. Nulla eu lacus arcu. In tempor tellus nec dui lobortis, in varius purus ultricies.",
    links: [
        {id: "01", label: "LinkedIn", icon: FaLinkedin, link: "https://www.linkedin.com/in/joao-gabriel-h/"},
        {id: "02", label: "GitHub", icon: FaGithub, link: "https://github.com/JoaoGH"},
        {id: "03", label: "Stack Overflow", icon: FaStackOverflow, link: "https://stackoverflow.com/users/10426962/jo%c3%a3o-g-hartmann"},
        {id: "04", label: "Leetcode", icon: SiLeetcode, link: "https://leetcode.com/u/DrZer0/"}
    ],

    email: "gabrielhartmannqwert@gmail.com"
}

export const PROJECTS = [
    {id: "01", title: "Project 01", description: "Lorem ipsum dolor sit amet, consectetur adinpiscing elit. Vivamus vitae augue dignissim, faucibus arcu aliquam, egestas libero.", image: PROJECT_IMAGE_1, tags: ["Java"]},
    {id: "02", title: "Project 02", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae augue dignissim, faucibus arcu aliquam, egestas libero.", image: PROJECT_IMAGE_2, tags: ["Java"]},
    {id: "03", title: "Project 03", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae augue dignissim, faucibus arcu aliquam, egestas libero.", image: PROJECT_IMAGE_3, tags: ["Java"]},
    {id: "04", title: "Project 04", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae augue dignissim, faucibus arcu aliquam, egestas libero.", image: PROJECT_IMAGE_4, tags: ["Java"]},
    {id: "05", title: "Project 05", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae augue dignissim, faucibus arcu aliquam, egestas libero.", image: PROJECT_IMAGE_5, tags: ["Java"]},
    {id: "06", title: "Project 06", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae augue dignissim, faucibus arcu aliquam, egestas libero.", image: PROJECT_IMAGE_6, tags: ["Java"]},
]
