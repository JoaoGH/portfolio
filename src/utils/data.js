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

export const SKILLS_TAB = [
    {id: "01", label: "All", value: "all"},
    {id: "02", label: "Backend", value: "backend"},
    {id: "03", label: "Frontend", value: "frontend"},
    {id: "04", label: "Database", value: "data"},
    {id: "05", label: "Repository", value: "repository"},
    {id: "06", label: "DevOps", value: "devops"}
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
        {id: "01", label: "LinkedIn", icon: FaLinkedin, link: ""},
        {id: "02", label: "GitHub", icon: FaGithub, link: ""},
        {id: "03", label: "Stack Overflow", icon: FaStackOverflow, link: ""},
        {id: "04", label: "Leetcode", icon: SiLeetcode, link: ""}
    ],

    email: "gabrielhartmannqwert@gmail.com"
}

export const PROJECTS = [
    {id: "01", title: "Project 01", description: "Lorem ipsum", image: PROJECT_IMAGE_1, tags: ["Java"]},
    {id: "02", title: "Project 02", description: "Lorem ipsum", image: PROJECT_IMAGE_2, tags: ["Java"]},
    {id: "03", title: "Project 03", description: "Lorem ipsum", image: PROJECT_IMAGE_3, tags: ["Java"]},
    {id: "04", title: "Project 04", description: "Lorem ipsum", image: PROJECT_IMAGE_4, tags: ["Java"]},
    {id: "05", title: "Project 05", description: "Lorem ipsum", image: PROJECT_IMAGE_5, tags: ["Java"]},
    {id: "06", title: "Project 06", description: "Lorem ipsum", image: PROJECT_IMAGE_6, tags: ["Java"]},
]
