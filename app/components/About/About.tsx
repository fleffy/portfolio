import AboutButtons from './AboutButtons'

export default function About() {
	return (
		<div className='lg:[220px] pt-[100px] sm:py-[100px] md:py-[200px] xl:py-[130px] 2xl:pt-[200px]'>
			<div className='mx-auto max-w-[700px] xl:max-w-6xl'>
				<h1 className='text-center text-4xl font-bold tracking-tight text-white animate-in fade-in-5 slide-in-from-top-8 duration-1000 sm:text-6xl sm:tracking-tight lg:text-[4rem] xl:text-[6rem] xl:tracking-tight 2xl:text-[6.5rem]'>
					Yevhenii Sivukhin
					<span> —</span>
					<span className='text-[hsl(280,100%,60%)]'> Front-End</span>
					<span className='text-white'> Developer</span>
					<span className='text-[hsl(200,100%,60%)]'>.</span>
				</h1>
				<AboutButtons />
			</div>
		</div>
	)
}
