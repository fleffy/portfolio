import Image from 'next/image'
import Link from 'next/link'

export default function ProjectCard({ project }: any) {
	const { id, title, subtitle, link, githubLink, img, gif, tags } =
		project || {}

	return (
		<div className='w-full rounded-xl border border-slate-200/20 bg-white/5 p-4 transition-colors duration-500 hover:bg-white/20'>
			<div className='mb-4 flex items-center justify-center overflow-hidden rounded-lg border border-slate-200/20'>
				<Image
					src={`https://fleffy-portfolio-db.pockethost.io/api/files/_pb_users_auth_/${id}/${img}`}
					width={1280}
					height={720}
					className='max-h-[250px] max-w-[720px] object-cover object-top'
					alt='project card img'
				/>
			</div>
			<h2 className='text-2xl font-bold'>{title}</h2>
			<ul className='relative my-5 flex flex-wrap'>
				{tags.split(' ')?.map((tag: any) => {
					return (
						<li className='mr-1 mb-2 rounded-full border py-1 px-3 text-sm'>
							{tag}
						</li>
					)
				})}
			</ul>
			<div className='flex gap-3'>
				<Link
					href={`/project/${id}`}
					className='min-w-fullhover:shadow group inline-flex cursor-pointer items-center rounded-full bg-white px-3 py-2 text-sm font-semibold text-slate-800 transition-colors duration-500 hover:bg-slate-100 hover:no-underline hover:shadow-[#300171] md:px-5 md:text-base lg:px-4 lg:py-3'
				>
					Explore this Project
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
				</Link>
				<a href={githubLink} target='_blank'>
					<svg
						role='img'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
						id='github-icon'
						className='dark:fill-t3-purple-100 h-14 w-14 fill-white py-1 transition-colors duration-300'
					>
						<title>GitHub</title>
						<path d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'></path>
					</svg>
				</a>
			</div>
		</div>
	)
}
