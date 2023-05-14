import Blog1 from "../assets/postimg1.jpg"
import Blog2 from "../assets/postimg2.jpg"
import Blog3 from "../assets/postimg3.jpg"
import { motion } from "framer-motion";

const Blogs = () => {

    return (
        <div name="latest-blogs" className="w-full py-28 px-4">
            <div className="max-w-[1400px] mx-auto flex flex-col gap-10">
                <div className="flex flex-col gap-4">
                    <p className='text-[#afafaf]'>READ OUR BLOG</p>
                    <p className='font-extrabold text-5xl text-[#2f2f2f]'>Latest Blogs</p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <motion.div
                        className="flex flex-col gap-4 shadow-md shadow-[#040c16] max-w-[350px] mx-auto"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                    >
                        <div
                            style={{ backgroundImage: `url(${Blog1})` }}
                            className="image-size"></div>

                        <div className="flex flex-col gap-8 p-4">
                            <p className="text-[#afafaf]">Mar 29, 2021</p>
                            <p className="font-semibold text-lg">How To Make Minimalist Living Rooms Pop-Out</p>
                            <p className="text-[#afafaf] pb-4">Lectus molestie id enim ipsum. Netus sed cursus nibh iaculis ipsum turpis nulla blandit dui.</p>
                        </div>
                    </motion.div>
                    <motion.div
                        className="flex flex-col gap-4 shadow-md shadow-[#040c16] max-w-[350px] mx-auto"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                    >
                        <div
                            style={{ backgroundImage: `url(${Blog2})` }}
                            className="image-size"></div>

                        <div className="flex flex-col gap-8 p-4">
                            <p className="text-[#afafaf]">Mar 29, 2021</p>
                            <p className="font-semibold text-lg">How To Make Minimalist Living Rooms Pop-Out</p>
                            <p className="text-[#afafaf] pb-4">Lectus molestie id enim ipsum. Netus sed cursus nibh iaculis ipsum turpis nulla blandit dui.</p>
                        </div>
                    </motion.div>
                    <motion.div
                        className="flex flex-col gap-4 shadow-md shadow-[#040c16] max-w-[350px] mx-auto"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                    >
                        <div
                            style={{ backgroundImage: `url(${Blog3})` }}
                            className="image-size"></div>

                        <div className="flex flex-col gap-8 p-4">
                            <p className="text-[#afafaf]">Mar 27, 2021</p>
                            <p className="font-semibold text-lg">How To Make Your Resort That Looks Outstanding</p>
                            <p className="text-[#afafaf] pb-4">Lectus molestie id enim ipsum. Netus sed cursus nibh iaculis ipsum turpis nulla blandit dui.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Blogs