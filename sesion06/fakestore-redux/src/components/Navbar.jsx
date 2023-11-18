import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<nav className='bg-black p-4 w-full flex justify-center'>
			<div className='container flex justify-between items-center text-white px-4'>
				<Link
					to='/'
					className='text-xl text-white'
				>
					FakeStore
				</Link>
				<Link
					to='/cart'
					className='text-white'
				>
					Carrito
				</Link>
			</div>
		</nav>
	)
}

export default Navbar
