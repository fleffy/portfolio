import About from './components/About/About'
import Projects from './components/Projects/Projects'

async function getProjects() {
	const res = await fetch(
		'http://127.0.0.1:8090/api/collections/projects/records',
		{ cache: 'no-store' }
	)
	const data = await res.json()
	return data?.items as any[]
}

export default async function Home() {
	const projects = await getProjects()

	return (
		<main>
			<About />
			<Projects projectList={projects} />
		</main>
	)
}
