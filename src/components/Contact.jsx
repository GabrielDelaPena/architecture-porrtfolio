

const Contact = () => {
    return (
        <div name="contact" className='w-full py-28 px-4 bg-[rgba(0,0,0,0.8)]'>
            <div className='max-w-[1400px] mx-auto flex flex-col gap-4 justify-center items-center'>
                <div className="flex flex-col gap-10">
                    <div className='flex flex-col gap-4'>
                        <p className='text-[#afafaf]'>GET IN TOUCH</p>
                        <p className='font-extrabold text-5xl text-white'>Contact US</p>
                        <p className='text-[#757575]'>If you have any question about our process or company? Let us know how we can help you.</p>
                    </div>
                    <form action="" className='flex flex-col max-w-[500px] gap-5'>
                        <input className='p-3 border-2 border-[#666] text-[#757575] text-sm bg-[#333333]' type="text" placeholder='Your Full Name' name='name' />
                        <input className='p-3 border-2 border-[#666] text-[#757575] text-sm bg-[#333333]' type="text" placeholder='Your Email Address' name='email' />
                        <textarea className='p-3 border-2 border-[#666] text-[#757575] text-sm bg-[#333333]' rows="10" placeholder='Your Message' />
                        <button className='bg-[#c5a992] p-4 rounded-md text-white font-semibold hover:bg-black'>SUBMIT</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact