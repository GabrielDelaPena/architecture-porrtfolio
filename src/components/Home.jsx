import { useState } from 'react'
import Slide1 from "../assets/main-banner.jpg"
import Slide2 from "../assets/main-banner1.jpg"
import Slide3 from "../assets/spacejoy.jpg"
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs"
import { RxDotFilled } from "react-icons/rx"


const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const slides = [
        {
            url: Slide1
        },
        {
            url: Slide2
        },
        {
            url: Slide3
        }
    ]

    const prevSilde = () => {
        const isFirstIndex = currentIndex === 0
        const newIndex = isFirstIndex ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const nextSilde = () => {
        const isLastIndex = currentIndex === slides.length - 1
        const newIndex = isLastIndex ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

    return (
        <section name="home" className='max-w-[1400px] h-[780px] pt-28 px-4 mx-auto relative group'>
            <div
                style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                className='w-full h-full rounded-xl bg-center bg-cover duration-500'></div>
            {/** left arrow */}
            <div className='hidden group-hover:block rounded-full absolute top-[50%] -translate-x-0 translate-y-[-50%] left-7 text-2xl rounden-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSilde} size={30} />
            </div>

            {/** right arrow */}
            <div className='hidden group-hover:block rounded-full absolute top-[50%] -translate-x-0 translate-y-[-50%] right-7 text-2xl rounden-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={nextSilde} size={30} />
            </div>

            <div className='flex top-4 justify-center py-2'>
                {slides.map((slide, slideIndex) => (
                    <div
                        className='text-2xl cursor-pointer'
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}>
                        <RxDotFilled />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Home