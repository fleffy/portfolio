export default function Experience() {
	return (
		<section className='mx-auto max-w-7xl px-4 py-4 pb-12 sm:px-6 md:py-6 lg:px-8 lg:py-8'>
			<h2 className='mb-2 text-3xl font-bold animate-in fade-in-0 slide-in-from-top-4 duration-1500 md:text-5xl lg:text-5xl '>
				Experience
			</h2>
			<div className='pt-5'>
				<div className='ml-[6px] h-[30px] w-1 bg-white'></div>
				<div className='flex items-center gap-3'>
					<div className='h-4 w-4 rounded-full bg-white'></div>
					<span className='font-mono text-white'>02.2023</span>
				</div>
				<div className='flex items-center gap-12'>
					<div className='ml-[6px] h-[250px] w-1 bg-[hsl(200,100%,60%)]'></div>
					<div className='text-center'>
						<h4 className='text-2xl'>Front-end developer, Crypto Project</h4>
						<h2 className='mb-6 text-base opacity-40'>React, JS, SCSS</h2>
						<a
							href='https://resume-fleffy.vercel.app/'
							target='_blank'
							rel='noopener noreferrer'
							className='cursor-pointer items-center rounded-full bg-white px-3 py-2 text-sm font-semibold text-slate-800 transition-colors duration-500 hover:bg-slate-100 hover:no-underline hover:shadow hover:shadow-[#300171] md:px-5 md:text-base lg:px-4 lg:py-3'
						>
							About project
						</a>
					</div>
				</div>
				<div className='flex items-center gap-3'>
					<div className='h-4 w-4 rounded-full bg-white'></div>
					<span className='font-mono text-white'>08.2022</span>
				</div>
				<div className='ml-[6px] h-[30px] w-1 bg-white opacity-20'></div>
			</div>
		</section>
	)
}
