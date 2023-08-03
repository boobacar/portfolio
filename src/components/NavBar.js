import React, {useState} from 'react';
import {FaBars, FaTimes, FaLinkedin, FaGithub, FaTwitter} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import {Link} from 'react-scroll';
import CV from '../assets/Boubacar FALL CV.pdf';


const NavBar = () => {

  const [nav, setNav] = useState(false);

  const links = [
    [
        {
            id: 1,
            link: <Link to='home' smooth={true} duration={500} >home</Link>
        },
        {
            id: 2,
            link: <Link to='about' smooth={true} duration={500} >about</Link>
        },
        {
            id: 3,
            link: <Link to='skills' smooth={true} duration={500} >skills</Link>
        },
        {
            id: 4,
            link: <Link to='work' smooth={true} duration={500} >work</Link>
        },
        {
            id: 5,
            link: <Link to='contact' smooth={true} duration={500} >contact</Link>
        }
    ],
    [
        {
            id: 1,
            link: <Link onClick={() => setNav(!nav)} to='home' smooth={true} duration={500} >home</Link>
        },
        {
            id: 2,
            link: <Link onClick={() => setNav(!nav)} to='about' smooth={true} duration={500} >about</Link>
        },
        {
            id: 3,
            link: <Link onClick={() => setNav(!nav)} to='skills' smooth={true} duration={500} >skills</Link>
        },
        {
            id: 4,
            link: <Link onClick={() => setNav(!nav)} to='work' smooth={true} duration={500} >work</Link>
        },
        {
            id: 5,
            link: <Link onClick={() => setNav(!nav)} to='contact' smooth={true} duration={500} >contact</Link>
        }
    ]
];

  return (
    <div className='flex justify-between items-center w-full h-28 px-4  text-white bg-[#08192f] fixed
                    shadow-sm shadow-[#040c16]'
    >
        <div>
            <a href='#'>
                <h1 className='text-5xl text-red-400 font-bold font-signature ml-2 '>Boubs</h1>
            </a>
        </div>
        <ul className='hidden md:flex'>
            {links[0].map(({id, link}) => (
                <li key={id} className='px-4 cursor-pointer capitalize
                 font-medium text-gray-500 hover:scale-105 duration-200'>
                    {link}
                </li>
            ))}
            
        </ul>

        <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && ( 
            <ul className='flex flex-col justify-center items-center absolute top-0 left-0 
                           w-full h-screen bg-gradient-to-b from-[#08192f] to-gray-950
                        text-gray-500 duration-300'>
                {links[1].map(({id, link}) => (
                    <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-105 duration-200'>
                        {link}
                        <hr></hr>
                    </li>
                ))}
            </ul> 
            )
        }

                                {/* SOCIAL ICONS */}

        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-blue-800'>
                    <a className='flex justify-between items-center w-full text-gray-300 px-4'
                        href=''>
                        Linkedin <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-gray-950'>
                    <a className='flex justify-between items-center w-full text-gray-400 px-4'
                        href='https://github.com/boobacar'
                        target='_blank'
                    >
                        GitHub <FaGithub size={30}/>
                    </a>
                </li>
                {/* <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-blue-400'>
                    <a className='flex justify-between items-center w-full text-gray-300 px-4'
                        href=''>
                        Mail <HiOutlineMail size={30}/>
                    </a>
                </li> */}
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-gray-300 px-4'
                        href={CV} download>
                        Resume <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
            </ul>
        </div>
        
        

    </div>
  )
}

export default NavBar;