import { ContactRound, Home } from 'lucide-react';
import { BiLogoFigma } from 'react-icons/bi';
import { FaServicestack } from 'react-icons/fa';
import { FcAbout } from 'react-icons/fc';
import {
    AiOutlineBarChart, AiOutlineFileText, AiOutlineLinux,
    AiOutlineMail, AiOutlineSetting
} from 'react-icons/ai';
import { BsFillImageFill, BsPerson, BsReverseLayoutTextSidebarReverse } from 'react-icons/bs';

// Data for the navbar
const Links = [
    {
        id: 1,
        name: 'Home',
        icon: <Home />,
        route: '/'
    },
    {
        id: 2,
        name: 'Services',
        icon: <FaServicestack />,
        route: '/services'
    },
    {
        id: 3,
        name: 'About',
        icon: <FcAbout />,
        route: '/about'
    },
    {
        id: 4,
        name: 'Blog',
        icon: <BiLogoFigma />,
        route: '/blog'
    },
    {
        id: 5,
        name: 'Contact',
        icon: <ContactRound />,
        route: '/contact'
    },
];

// Data for the sidebar
const Menus = [
    { id: 1, title: 'Dashboard', route: './' },
    { id: 2, title: 'Pages', icon: <AiOutlineFileText />, route: './pages' },
    { id: 3, title: 'Media', spacing: true, icon: <BsFillImageFill />, route: './media' },
    {
        id: 4,
        title: 'Projects',
        icon: <BsReverseLayoutTextSidebarReverse />,
        submenu: true,
        submenuItems: [
            { id: 5, title: 'Submenu 1', icon: <AiOutlineLinux />, route: './projects/submenu' },
            { id: 6, title: 'Submenu 2', route: './projects/submenu2' },
            { id: 7, title: 'Submenu 3', route: './projects/submenu3' },
        ],
    },
    { id: 8, title: 'Analytics', icon: <AiOutlineBarChart />, route: './analytics' },
    { id: 9, title: 'Inbox', icon: <AiOutlineMail />, route: './inbox' },
    { id: 10, title: 'Profile', spacing: true, icon: <BsPerson />, route: './profile' },
    { id: 11, title: 'Settings', icon: <AiOutlineSetting />, route: './settings' },
];

export { Links, Menus };
