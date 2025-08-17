import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai"
import {
  FaDev,
  FaDiscord,
  FaEye,
  FaFacebookF,
  FaRegListAlt,
  FaRegNewspaper,
  FaRegUser,
  FaInstagram,
  FaTwitter,
  FaIdBadge,
} from "react-icons/fa"
import { FiSend } from "react-icons/fi"
import { MdComputer, MdDashboard } from "react-icons/md"
import {
  SiFigma,
  SiFirebase,
  SiFiverr,
  SiNextdotjs,
  SiShazam,
  SiNodedotjs,
  SiGooglecloud,
} from "react-icons/si"
import About from "./components/aboutPage/About"
import Blogs from "./components/blogsPage/Blogs"
import DevBlogs from "./components/blogsPage/DevBlogs"
import Contact from "./components/contactPage/Contact"
import GuestBook from "./components/guestbookPage/GuestBook"
import Resume from "./components/resumePage/Resume"
import Stats from "./components/statistics/Stats"
import Works from "./components/worksPage/Works"
import {
  ClientData,
  MenuData,
  ServiceData,
  SocialMedia,
  StatisticsData,
  TestimonialData,
} from "./types"

export const menus: MenuData[] = [
  {
    id: 1,
    label: "about",
    Icon: FaRegUser,
    Component: About,
  },
  {
    id: 2,
    label: "resume",
    Icon: FaRegListAlt,
    Component: Resume,
  },
  {
    id: 3,
    label: "works",
    Icon: FaEye,
    Component: Works,
  },
  {
    id: 4,
    label: "blog",
    Icon: FaRegNewspaper,
    Component: Blogs,
  },
  {
    id: 5,
    label: "stats",
    Icon: MdDashboard,
    Component: Stats,
  },
  {
    id: 6,
    label: "contact",
    Icon: FiSend,
    Component: Contact,
  },
  {
    id: 7,
    label: "guest book",
    Icon: MdComputer,
    Component: GuestBook,
  },
]

export const socialMedia: SocialMedia[] = [
  {
    id: 1,
    Icon: FaDev,
    label: "Dev",
    logoColor: "black",
    mediaUrl: "https://dev.to/gurucharan15",
    info: "Follow me and read my articles on Dev.to",
  },
  {
    id: 2,
    Icon: FaFacebookF,
    label: "Facebook",
    logoColor: "#3b5998",
    mediaUrl: "https://www.facebook.com/guru.charan.tanneeru/",
    info: "Follow me on Facebook",
  },
  {
    id: 3,
    Icon: AiOutlineGithub,
    label: "Github",
    logoColor: "#171515",
    mediaUrl: "https://github.com/gurucharan15",
    info: "Star my projects on Github",
  },
  {
    id: 4,
    Icon: AiFillLinkedin,
    label: "Linkedin",
    logoColor: "#0072b1",
    mediaUrl: "https://www.linkedin.com/in/gurucharan-tanneeru-a6488b193/",
    info: "Let's connect on Linkedin",
  },
  {
    id: 5,
    Icon: FaInstagram,
    label: "Instagram",
    logoColor: "#5865f2",
    mediaUrl: "https://www.instagram.com/guru.charan.tanneeru/",
    info: "Catch me on Instagram",
  },
  {
    id: 6,
    Icon: FaTwitter,
    label: "Twitter",
    logoColor: "#00b22d",
    mediaUrl: "https://twitter.com/T_GuruCharan",
    info: "Follow me on Twitter",
  },
  {
    id: 7,
    Icon: FaIdBadge,
    label: "Credly",
    logoColor: "#00b22d",
    mediaUrl: "https://www.credly.com/users/gurucharan-tanneeru/badges",
    info: "You can verify my Achivements",
  },
]

export const services: ServiceData[] = [
  {
    id: 1,
    title: "Smartsheet-Expert",
    Icon: SiShazam,
    description:
      "A skilled Smartsheet expert, optimizing workflows, collaborating on data-driven projects, and enhancing productivity through expert use of Smartsheet functionalities.",
  },
  {
    id: 2,
    title: "Data Analyst Consultant",
    Icon: SiDatabase,
    description:
      "A Data Analyst Consultant helps organizations make data-driven decisions by analyzing complex datasets and providing actionable insights for business growth.",
  },
  {
    id: 3,
    title: "Full-Stack",
    Icon: SiNodedotjs,
    description:
      "Design a modern, mobile-ready website with a back-end utilizing SQL and a standardized API to efficiently reach and assist a broad audience.",
  },
  {
    id: 4,
    title: "UI/UX design",
    Icon: SiFigma,
    description:
      "Modern user Interface trends with a highly professional and unique design.",
  },
]

export const clients: ClientData[] = [
  {
    id: 1,
    linkLocation: "https://www.linkedin.com/in/gurucharan-tanneeru-a6488b193/",
    imgLocation: "/images/lin.png",
  },
  {
    id: 2,
    linkLocation: "https://www.freelancer.com/",
    imgLocation: "/images/freelancer.png",
  },
  {
    id: 3,
    linkLocation: "https://www.upwork.com/",
    imgLocation: "/images/upwork.png",
  },
  {
    id: 4,
    linkLocation: "https://www.envato.com/",
    imgLocation: "/images/envato.png",
  },
]

export const quoteData: TestimonialData = {
  id: "quote",
  quote:
    "Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.",
  userName: "Linus Torvalds",
  userProfession: "Inventor of GIT, Linux",
  userImage: { url: "images/linus.jpeg" },
}

export const statisticsData: StatisticsData[] = [
  {
    title: "Developer",
    info: "Mean Stack",
  },
  {
    title: "projects",
    info: "15+",
  },
  {
    title: "clients",
    info: "10+",
  },
]
