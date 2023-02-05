import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'

async function getProjects() {
	const res = await fetch(
		'https://fleffy-portfolio-db.pockethost.io/api/collections/projects/records/',
		{ cache: 'no-store' }
	)
	const data = await res.json()
	return data?.items as any[]
}

async function getSkills() {
	const res = await fetch(
		'https://fleffy-portfolio-db.pockethost.io/api/collections/skills/records/',
		{ cache: 'no-store' }
	)
	const data = await res.json()
	return data?.items as any[]
}

export default async function Home() {
	const projects = await getProjects()
	const skills = await getSkills()

	return (
		<main>
			<About />
			<Projects projectList={projects} />
			<Skills skillList={skills} />
		</main>
	)
}
