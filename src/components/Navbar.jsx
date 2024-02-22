import {useState} from 'react';
import { AiOutlineHome, AiTwotoneCalendar, AiFillProject, AiOutlineTeam } from 'react-icons/ai';
import { MdOutlineClass } from 'react-icons/md';
import { GoCommentDiscussion } from 'react-icons/go';
import { HiOutlineSearch} from 'react-icons/hi';
import { BiLogOut } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { MdOutlineManageAccounts } from 'react-icons/md';
export const navLinks = [
    {
        title:'Home',
        path: '/',
        logo:<AiOutlineHome size={30} className="fill-white" />
    },
    {
        title:'Team',
        path: 'team',
        logo:<AiOutlineTeam size={30}className="fill-white" />,
    },
    {
        title:'Project',
        path: 'project',
        logo:<AiFillProject size={30} className="fill-white" />
    },
    {
        title:'Jadwal',
        path: 'jadwal',
        logo:<AiTwotoneCalendar size={30} className="fill-white" />
    },
    {
        title:'Calendar',
        logo:<AiTwotoneCalendar size={30} className="fill-white" />
    },
    {
        title:'Class',
        logo:<MdOutlineClass size={30} className="fill-white" />,
        gap: 'true',
    },
    {
        title:'Forum',
        logo:<GoCommentDiscussion size={30} className="fill-white" />
    },
    {
        title:'Logout',
        logo:<BiLogOut size={30} className="fill-white" />
    }
];


const Navbar = () => {
    const [active, setActive] = useState('home');
    const [open, setOpen] = useState(false);


    return (
        <div className="hidden md:flex justify-between p-6 ">
        <div className="w-1/2 flex text-md xl:text-xl font-semibold items-center">
        <div className="flex gap-8">

                    <Link to='/' className="text-white">Home</Link>
                    <h1 className="text-white">About</h1>
                    <h1 className="text-white">Blog</h1>
                    <Link to='/project' className="text-white">Project</Link>
        </div>
        </div>

        <div className="hidden sm:w-1/2 sm:flex justify-end p-6 items-center text-black">
            <div className="bg-gray-100 h-8 rounded-md p-1 flex items-center">
            <input type="text" className="bg-transparent outline-none h-4 rounded-xl"  />
            <HiOutlineSearch size={15} />
            </div>
            
        </div>
    </div>
    )
}

export default Navbar