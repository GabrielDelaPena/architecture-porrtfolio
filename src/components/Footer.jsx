import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='w-full bg-black text-white font-light'>
            <div className='max-w-7xl mx-auto flex flex-col py-8 gap-8'>
                <div className='flex justify-between px-5'>
                    <div>
                        <p className='font-bold'>Architecture.</p>
                        <p>Thank you for visiting our portfolio, and we look forward to the opportunity to work with you on your next project.</p>
                    </div>

                    <div className='flex justify-center items-center gap-3 text-2xl'>
                        <FaGithub />
                        <FaLinkedin />
                        <FaFacebook />
                    </div>
                </div>

                <div>
                    <div>
                        <div className='px-5 grid grid-cols-2 gap-12 w-full md:flex md:justify-between'>
                            <div className='flex flex-col gap-4'>
                                <p className='font-semibold'>Project</p>
                                <ul className='flex flex-col gap-3'>
                                    <li>Changelog</li>
                                    <li>Status</li>
                                    <li>License</li>
                                    <li>All Versions</li>
                                </ul>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <p className='font-semibold'>Project</p>
                                <ul className='flex flex-col gap-3'>
                                    <li>Changelog</li>
                                    <li>Status</li>
                                    <li>License</li>
                                    <li>All Versions</li>
                                </ul>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <p className='font-semibold'>Project</p>
                                <ul className='flex flex-col gap-3'>
                                    <li>Changelog</li>
                                    <li>Status</li>
                                    <li>License</li>
                                    <li>All Versions</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Footer