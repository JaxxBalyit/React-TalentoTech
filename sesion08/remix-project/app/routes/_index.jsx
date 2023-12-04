import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

xport const meta = () => {
	return [
		{
			title: "Jaxx's Remix",
		},
		{
			name: 'description',
			content: 'App de Remix para el curso de TalentoTech',
		},
	]
}

export const loader = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts')
	const posts = await res.json()
	return json({ posts })
}

export default function Index() {
	const { posts } = useLoaderData()
	return (
		<div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
			<h1>Talento Tech - React</h1>
			<ul>
				{posts.map((post) => (
					<li key={post.id}>
						<h2>{post.title}</h2>
						<p>{post.body}</p>
					</li>
				))}
			</ul>
		</div>
	)
}
