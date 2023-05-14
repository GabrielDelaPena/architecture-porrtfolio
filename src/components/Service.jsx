

const Service = () => {
    return (
        <section name="services" className='w-full py-28 px-4'>
            <div className='max-w-[1400px] mx-auto flex flex-col gap-10'>
                <div className="flex flex-col gap-4">
                    <p className='text-[#afafaf]'>WHAT WE DO</p>
                    <p className='font-extrabold text-5xl text-[#2f2f2f]'>Services</p>
                </div>

                <div className='flex flex-col gap-10 justify-between md:flex-row'>
                    <div className='flex flex-col gap-5'>
                        <p className='font-bold text-xl'>Designing: Architects</p>
                        <p className='text-[#afafaf]'>Create designs and plans for new buildings, structures, and spaces. This involves developing ideas, sketching initial designs, creating 3D models, and selecting appropriate materials and construction methods..</p>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <p className='font-bold text-xl'>Planning</p>
                        <p className='text-[#afafaf]'>Architects work with clients and stakeholders to determine the needs and goals of a project. They assess the site, consider zoning and building codes, and develop a plan that meets the project requirements while also considering environmental factors and social context.</p>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <p className='font-bold text-xl'>Project management</p>
                        <p className='text-[#afafaf]'>Architects oversee the entire building process, from concept to completion. They manage budgets, schedules, contractors, and suppliers to ensure that the project is delivered on time, within budget, and to the required quality standards.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service