import SingleImage from "../assets/singleimage.jpg"
import { motion } from "framer-motion";

const About = () => {
    return (
        <section name="about" className='max-w-[1400px] mx-auto py-28 px-4'>
            <div className='w-full flex flex-col mx-auto justify-center items-center lg:flex-row'>
                <motion.div
                    className='flex flex-col gap-2'
                    /** initial condition */
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        /** final conditions
                         * x: -50 : div will be at -50 from the start
                         * x: 0 : div will be at 0 from the start
                         */
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}>
                    <p className='text-[#afafaf]'>WHO ARE WE</p>
                    <p className='font-extrabold text-5xl text-[#2f2f2f]'>About Us</p>
                    <img className="mt-4 p-6" src={SingleImage} alt="Single Image" />
                </motion.div>

                <motion.div
                    className="p-4 max-w-[500px] flex flex-col gap-6 text-[#757575] text-lg"
                    /** initial condition */
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        /** final conditions
                         * x: -50 : div will be at -50 from the start
                         * x: 0 : div will be at 0 from the start
                         */
                        hidden: { opacity: 0, x: 50 },
                        visible: { opacity: 1, x: 0 },
                    }}>
                    <p>
                        Welcome to our architecture portfolio!
                        We are a team of passionate architects committed to creating innovative and sustainable design solutions.
                        Our studio is dedicated to crafting exceptional architecture that responds to the unique needs and aspirations of our clients.
                    </p>
                    <p>
                        Our approach to architecture is rooted in a deep understanding of the built environment,
                        and we believe that every project is an opportunity to make a positive impact on the world around us.
                        We are committed to designing spaces that are not only beautiful and functional but also environmentally responsible and socially relevant.
                    </p>
                    <p>
                        With years of experience in the architecture industry, we have honed our skills in designing and managing projects of varying scales and complexities.
                        From concept to completion,
                        we work closely with our clients to understand their vision and develop a design that meets their requirements while also addressing larger social and environmental issues.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default About