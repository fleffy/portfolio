import ProjectCard from './ProjectCard'

export default function Projects({ projectList }: any) {
	return (
		<section className='mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8 py-8 md:py-16 lg:py-24'>
			<h2 className='mb-2 text-3xl font-bold md:text-5xl lg:text-5xl'>
				My Projects
			</h2>
			<div className='grid gap-5 grid-cols-1 sm:grid-cols-2 md:gap-10 my-lg:grid-cols-3 pt-10'>
				{projectList.map((project: any) => (
					<ProjectCard key={project.id} project={project} />
				))}
			</div>
		</section>
	)
}
