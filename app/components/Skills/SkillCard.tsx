import Image from 'next/image'

export default function SkillCard({ skill }: any) {
	const { id, skillTitle, skillLogo, skillLink, skillAbout } = skill || {}
	return (
		<div className='relative flex flex-col justify-between overflow-hidden rounded-md border border-slate-200/20 bg-white/5 transition-colors duration-500 hover:border-slate-300/50'>
			<a href={skillLink} target='_blank'>
				<div className='flex items-center space-x-4 bg-white/10 p-2 pl-5 transition-colors duration-500 hover:bg-white/20'>
					<Image
						src={`https://fleffy-portfolio-db.pockethost.io/api/files/zxnbhh6eet08c3o/${id}/${skillLogo}`}
						width={30}
						height={30}
						alt='skill icon'
					/>
					<p className='text-lg font-medium leading-6 text-slate-200 md:text-xl'>
						{skillTitle}
					</p>
				</div>
				<div className='m-6 text-sm text-slate-100 subpixel-antialiased md:text-base'>
					{skillAbout}
				</div>
			</a>
		</div>
	)
}
