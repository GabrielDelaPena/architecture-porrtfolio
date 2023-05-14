import Portfolio1 from "../assets/interoir.jpg"
import Portfolio2 from "../assets/tab1.jpg"
import Portfolio3 from "../assets/tab2.jpg"
import Portfolio4 from "../assets/tab3.jpg"
import Portfolio5 from "../assets/tab4.jpg"


const Portfolio = () => {

    return (
        <div name="portfolio" className="py-28 px-4 bg-[rgba(0,0,0,0.8)]">
            <div className="max-w-[1400px] mx-auto flex flex-col gap-10">
                <div className="flex flex-col gap-4">
                    <p className='text-[#afafaf]'>SOME OF OUR WORKS</p>
                    <p className='font-extrabold text-5xl text-white'>Our Portfolio</p>
                </div>

                <div
                    className="p-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
                >
                    <div style={{ backgroundImage: `url(${Portfolio1})` }}
                        className="image-size hover:scale-110 duration-500"
                    >

                    </div>
                    <div style={{ backgroundImage: `url(${Portfolio2})` }}
                        className="image-size hover:scale-110 duration-500"
                    >

                    </div>
                    <div style={{ backgroundImage: `url(${Portfolio3})` }}
                        className="image-size hover:scale-110 duration-500"
                    >

                    </div>
                    <div style={{ backgroundImage: `url(${Portfolio4})` }}
                        className="image-size hover:scale-110 duration-500"
                    >

                    </div>
                    <div style={{ backgroundImage: `url(${Portfolio5})` }}
                        className="image-size hover:scale-110 duration-500"
                    >

                    </div>
                    <div style={{ backgroundImage: `url(${Portfolio1})` }}
                        className="image-size hover:scale-110 duration-500"
                    >

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio