import SkillCard from './SkillCard'

export default function Skills({ skillList }: any) {
	return (
		<section className='mx-auto max-w-7xl px-4 py-4 pb-12 sm:px-6 md:py-6 lg:px-8 lg:py-8'>
			<h2 className='mb-2 text-3xl font-bold md:text-5xl lg:text-5xl'>
				Skills
			</h2>
			<div className='grid grid-cols-1 gap-5 pt-10 sm:grid-cols-2 md:gap-10 lg:grid-cols-3'>
				{skillList.map((skill: any) => (
					<SkillCard key={skill.id} skill={skill} />
				))}
			</div>
		</section>
	)
}
