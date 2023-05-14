import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from "react-scroll"

const Navigation = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <nav className='fixed w-full h-[70px] z-10'>
            <div className='bg-black flex justify-between items-center h-full px-5 md:px-8'>
                <div>
                    <p className='font-normal text-3xl text-white'>Architure.</p>
                </div>

                {/** menu */}
                <ul className='hidden text-white text-lg lg:flex lg:gap-10'>
                    <li>
                        <Link to="home" smooth={true} duration={500}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="about" smooth={true} duration={500}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="portfolio" smooth={true} duration={500}>
                            Our Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link to="services" smooth={true} duration={500}>
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link to="latest-blogs" smooth={true} duration={500}>
                            Latest Blogs
                        </Link>
                    </li>
                    <li>
                        <Link to="contact" smooth={true} duration={500}>
                            Contact
                        </Link>
                    </li>
                </ul>

                {/** hamburger */}
                <div onClick={handleClick} className='lg:hidden z-10 cursor-pointer'>
                    {!nav ? <FaBars className='text-2xl text-white' /> : <FaTimes className='text-2xl text-black' />}
                </div>

                {/** mobile menu */}
                <ul className={!nav ? 'hidden' : 'absolute w-full h-screen top-0 left-0 flex flex-col justify-center items-center gap-8 bg-white'}>
                    <li className='text-3xl'>
                        <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                            Home
                        </Link>
                    </li>
                    <li className='text-3xl'>
                        <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                            About
                        </Link>
                    </li>
                    <li className='text-3xl'>
                        <Link onClick={handleClick} to="portfolio" smooth={true} duration={500}>
                            Our Portfolio
                        </Link>
                    </li>
                    <li className='text-3xl'>
                        <Link onClick={handleClick} to="services" smooth={true} duration={500}>
                            Services
                        </Link>
                    </li>
                    <li className='text-3xl'>
                        <Link onClick={handleClick} to="latest-blogs" smooth={true} duration={500}>
                            Latest Blogs
                        </Link>
                    </li>
                    <li className='text-3xl'>
                        <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation