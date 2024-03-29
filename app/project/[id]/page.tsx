async function getProject(id: string) {
	const res = await fetch(
		`http://fleffy-portfolio-db.pockethost.io/api/collections/projects/records/${id}`,
		{ next: { revalidate: 10 } }
	)
	const data = await res.json()
	return data
}

export default async function ProjectPage({ params }: any) {
	const project = await getProject(params.id)
	const { id, title, about, link, githubLink, gif, tags } = project || {}
	return (
		<section className='mx-auto flex max-w-7xl flex-col items-center justify-between px-4 py-[100px] pb-12 sm:px-6 md:flex-row md:py-[140px] lg:gap-x-28 lg:px-8 lg:py-[180px] xl:gap-x-12'>
			<div className='mx-auto flex min-w-[400px] max-w-[800px] flex-col gap-2 md:gap-4 xl:max-w-full'>
				<h2 className='mb-2 w-full text-3xl font-bold text-slate-50 animate-in fade-in-5 slide-in-from-top-8 duration-1500 md:text-5xl lg:text-5xl'>
					{title}
				</h2>
				<div>
					<h3 className='w-full pb-3 text-3xl font-bold text-slate-50 animate-in fade-in-5 slide-in-from-top-6 duration-1500 md:text-3xl lg:text-4xl'>
						About
					</h3>
					<p className='max-w-3xl text-base text-slate-200 animate-in fade-in-5 slide-in-from-top-6 duration-2000 md:text-xl lg:text-xl xl:text-xl'>
						{about}
					</p>
				</div>
				<div className='pt-5 animate-in fade-in-5 slide-in-from-top-6 duration-2000 md:flex-col lg:block'>
					<span>Used technologies:</span>
					<ul className='relative flex flex-wrap pt-3 lg:w-[90%]'>
						{tags
							? tags.split(' ')?.map((tag: any) => {
									return (
										<li className='mr-1 mb-2 rounded-full border py-1 px-3 text-sm'>
											{tag}
										</li>
									)
							  })
							: console.error('something went wrong')}
					</ul>
				</div>
				<div className='flex gap-3 animate-in fade-in-5 slide-in-from-top-8 duration-2000'>
					<a href={githubLink} target='_blank'>
						<svg
							role='img'
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'
							id='github-icon'
							className='h-16 w-16 fill-white py-1 transition-colors duration-300'
						>
							<title>GitHub</title>
							<path d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'></path>
						</svg>
					</a>
					<a
						href={link}
						target='_blank'
						rel='noopener noreferrer'
						className='group inline-flex cursor-pointer items-center rounded-full  bg-white px-3 py-3 text-sm font-semibold text-slate-800 transition-colors duration-500 hover:bg-slate-100 hover:no-underline hover:shadow hover:shadow-[#300171] md:px-5 md:text-base lg:px-4 lg:py-1'
					>
						Visit website
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
					</a>
				</div>
			</div>
			<div className='min-h-[300px] pt-5 md:min-h-[400px]'>
				<div className='rounded-lg border border-slate-200/20 bg-violet-800 shadow-lg animate-in fade-in-5 slide-in-from-top-10 duration-2000'>
					<div className='xl:min-h-[400px] xl:min-w-[720px]'>
						<video
							autoPlay
							loop
							muted
							playsInline
							className='relative w-full rounded-lg'
						>
							<source
								className='relative w-full rounded-lg'
								width={1280}
								height={720}
								src={`https://fleffy-portfolio-db.pockethost.io/api/files/_pb_users_auth_/${id}/${gif}`}
								type='video/mp4'
							/>
						</video>
					</div>
				</div>
			</div>
		</section>
	)
}
