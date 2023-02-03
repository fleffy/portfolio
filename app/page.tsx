import About from './components/About/About'
import Projects from './components/Projects/Projects'

import PocketBase from 'pocketbase'

async function getProjects() {
	const res = await fetch(
		'https://fleffy-portfolio-db.pockethost.io/api/collections/projects/records/',
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
