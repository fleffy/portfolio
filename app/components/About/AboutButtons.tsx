export default function AboutButtons() {
	return (
		<div className='mt-4 flex w-full items-center justify-center gap-4 animate-in fade-in-0 zoom-out-105 slide-in-from-top-8 duration-1500 xl:mt-8'>
			{/* <a
				href='https://resume-fleffy.vercel.app/'
				target='_blank'
				rel='noopener noreferrer'
				className='group inline-flex cursor-pointer items-center rounded-full bg-white px-3 py-2 text-sm font-semibold text-slate-800 transition-colors duration-500 hover:bg-slate-100 hover:no-underline hover:shadow hover:shadow-[#300171] md:px-5 md:text-base lg:px-4 lg:py-3'
			>
				Resume / CV
				<svg
					className='stroke mt-0.5 ml-2 -mr-1 h-3 stroke-current stroke-2'
					fill='none'
					viewBox='0 0 10 10'
					aria-hidden='true'
				>
					<path
						className='opacity-0 transition group-hover:opacity-100'
						d='M0 5h7'
					></path>
					<path
						className='transition group-hover:translate-x-[3px]'
						d='M1 1l4 4-4 4'
					></path>
				</svg>
			</a> */}
			<a
				href='https://github.com/fleffy'
				target='_blank'
				rel='noopener noreferrer'
				className=' inline-flex cursor-pointer items-center rounded-full  bg-white/10 px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/20 hover:no-underline md:px-5 md:text-base lg:px-4 lg:py-3'
			>
				GitHub
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 448 512'
					className='ml-2 h-3 fill-white'
				>
					<path d='M256 64C256 46.33 270.3 32 288 32H415.1C415.1 32 415.1 32 415.1 32C420.3 32 424.5 32.86 428.2 34.43C431.1 35.98 435.5 38.27 438.6 41.3C438.6 41.35 438.6 41.4 438.7 41.44C444.9 47.66 447.1 55.78 448 63.9C448 63.94 448 63.97 448 64V192C448 209.7 433.7 224 416 224C398.3 224 384 209.7 384 192V141.3L214.6 310.6C202.1 323.1 181.9 323.1 169.4 310.6C156.9 298.1 156.9 277.9 169.4 265.4L338.7 96H288C270.3 96 256 81.67 256 64V64zM0 128C0 92.65 28.65 64 64 64H160C177.7 64 192 78.33 192 96C192 113.7 177.7 128 160 128H64V416H352V320C352 302.3 366.3 288 384 288C401.7 288 416 302.3 416 320V416C416 451.3 387.3 480 352 480H64C28.65 480 0 451.3 0 416V128z'></path>
				</svg>
			</a>
		</div>
	)
}
